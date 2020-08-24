import React, { useState, useContext } from "react";
import {
  Header,
  Segment,
  Container,
  Card,
  Image,
  Button,
  Icon,
  Modal,
  List,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_USERS_QUERY } from "../util/graphql";
import gql from "graphql-tag";
import { AuthContext } from "../context/auth";

import Title from "../components/Title";
import FilterSelection from "../components/FilterSelection";
import placeholder from "../assets/images/placeholder.png";

function ShpeitoNetwork(props) {
  const [filter, setFilter] = useState(
    new Filter({
      name: [],
      major: [],
      year: [],
      graduating: [],
      country: [],
      classes: [],
    })
  );

  const [open, setOpen] = React.useState(true);

  let { data, loading } = useQuery(FETCH_USERS_QUERY);
  let users = [];

  let {
    user: { id },
  } = useContext(AuthContext);

  let user = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id,
    },
  }).data.getUser;

  if (!loading && data) {
    users = data.getUsers.filter(function (user) {
      let fullName = user.firstName.concat(" ").concat(user.lastName);
      return (
        (filter.major.length === 0
          ? true
          : filter.major.includes(user.major)) &&
        (filter.year.length === 0 ? true : filter.year.includes(user.year)) &&
        (filter.graduating.length === 0
          ? true
          : filter.graduating.includes(user.graduating)) &&
        (filter.country.length === 0
          ? true
          : filter.country.includes(user.country)) &&
        (filter.classes.length === 0
          ? true
          : filter.classes.includes(user.classes)) &&
        (filter.name.length === 0
          ? true
          : filter.name
              .map((n) =>
                user.firstName.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true) ||
            filter.name
              .map((n) => user.lastName.toLowerCase().includes(n.toLowerCase()))
              .includes(true) ||
            filter.name
              .map((n) => fullName.toLowerCase().includes(n.toLowerCase()))
              .includes(true))
      );
    });
  }

  function getUsers(newFilter) {
    setFilter(new Filter(newFilter));
  }

  return (
    <div className="body">
      <Title title="SHPEito Network" />
      <Container>
        <FilterSelection getUsers={getUsers} />
        {loading ? (
          <Segment disabled loading>
            <div style={{ height: "400px" }} />
          </Segment>
        ) : user ? (
          user.classes.length == 0 ? (
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
            >
              <Modal.Header>
                <h3>Hello {user.firstName},</h3>
              </Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>&emsp;It seems like you currently have no classes.</p>
                  <p>
                    &emsp;Please click on "Continue" to register your classes.
                  </p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="red" onClick={() => setOpen(false)}>
                  CANCEL
                </Button>
                <Button color="green">CONTINUE</Button>
              </Modal.Actions>
            </Modal>
          ) : users.length > 0 ? (
            <>
              {console.log(user.classes.length)}
              <p></p>
              <Segment>
                <Card.Group stackable itemsPerRow="4">
                  {users.map((shpeito) => (
                    <Card>
                      <Image src={placeholder} className="card-image" />
                      <Card.Content>
                        <Card.Header>
                          {shpeito.firstName} {shpeito.lastName}
                        </Card.Header>
                        <Card.Meta>{shpeito.major}</Card.Meta>
                        <Card.Meta>{shpeito.year}</Card.Meta>
                        <Card.Description>
                          <Icon name="world"></Icon>
                          {shpeito.country}
                        </Card.Description>
                        <p></p>
                        <Modal
                          trigger={
                            <Button
                              fluid
                              content="View Classes"
                              icon="book"
                              labelPosition="left"
                            />
                          }
                          size="mini"
                          closeIcon
                        >
                          <Modal.Header>
                            {shpeito.firstName}'s Classes
                          </Modal.Header>
                          <Modal.Content>
                            <p></p>
                            {shpeito.classes.length > 0 ? (
                              shpeito.classes.map((className) => (
                                <List divided className="shpeito-spacing">
                                  <List.Item>
                                    <List.Icon
                                      className="shpeito-spacing"
                                      name="book"
                                    />
                                    <List.Content>{className}</List.Content>
                                  </List.Item>
                                </List>
                              ))
                            ) : (
                              <div className="shpeito-spacing">
                                <p>&ensp;Sorry, no classes registered.</p>
                                <p></p>
                              </div>
                            )}
                            <p></p>
                          </Modal.Content>
                        </Modal>
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
              </Segment>
            </>
          ) : (
            console.log("USER IS UNDEFINED")
          )
        ) : (
          <div style={{ paddingBottom: 16 }}>
            <p></p>
            <Segment placeholder>
              <Header icon>
                <i className="far fa-frown"></i>
                <p>No results found.</p>
              </Header>
            </Segment>
          </div>
        )}
      </Container>
    </div>
  );
}

class Filter {
  constructor(filter) {
    this.name = filter.name;
    this.major = filter.major;
    this.year = filter.year;
    this.graduating = filter.graduating;
    this.country = filter.country;
    this.classes = filter.classes;
  }
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      firstName
      lastName
      username
      classes
    }
  }
`;
export default ShpeitoNetwork;
