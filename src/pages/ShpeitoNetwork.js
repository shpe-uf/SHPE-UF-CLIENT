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
  Grid,
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
            <Container>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size="small"
              >
                <Modal.Header>
                  <h3>Hello {user.firstName},</h3>
                </Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <p></p>
                    <p>&emsp;It seems like you currently have no classes.</p>
                    <p>
                      &emsp;Please click on "Edit Profile" to edit your profile and
                      register your classes.
                    </p>
                  </Modal.Description>
                </Modal.Content>

                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Modal.Content>
                        <Modal.Actions>
                          <Button
                            style={{"margin-left":"0em"}}
                            size="small"
                            as={Link}
                            to="/profile"
                          >
                            Edit Profile
                          </Button>
                          <Button
                            floated="right"
                            color="green"
                            size="small"
                            onClick={() => setOpen(false)}
                          >
                            Continue
                          </Button>
                        </Modal.Actions>
                      </Modal.Content>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal>
            </Container>
          ) : users.length > 0 ? (
            <>
              <p></p>
              <Segment>
                <Card.Group stackable itemsPerRow="4">
                  {users.map((shpeito) => (
                    <Card>
                      <Image fluid src={placeholder} className="card-image" />
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
                              content="User Information"
                              icon="user"
                              labelPosition="left"
                            />
                          }
                          size="small"
                          closeIcon
                        >
                          <Modal.Header>
                            <h3>{shpeito.firstName}'s Information</h3>
                          </Modal.Header>
                          <Modal.Content>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column>
                                  <h5>Course Schedule:</h5>
                                  {shpeito.classes.length > 0 ? (
                                    shpeito.classes.map((className) => (
                                      <List className="shpeito-spacing">
                                        <List.Item>
                                          <List.Icon
                                            className="shpeito-spacing"
                                            name="book"
                                          />
                                          <List.Content>
                                            {className}
                                          </List.Content>
                                        </List.Item>
                                      </List>
                                    ))
                                  ) : (
                                    <div className="shpeito-spacing">
                                      <p>&ensp;Sorry, no classes registered for {shpeito.firstName}.</p>
                                    </div>
                                  )}
                                  <h5>Social Media:</h5>
                                  {shpeito.socialMedia.length > 0 ? (
                                    shpeito.socialMedia.map((naming) => (
                                      <List className="shpeito-spacing">
                                        <List.Item>
                                          <List.Icon
                                            className="shpeito-spacing"
                                            name="user circle"
                                          />
                                          <List.Content>
                                            {naming}
                                          </List.Content>
                                        </List.Item>
                                      </List>
                                    ))
                                  ) : (
                                    <div className="shpeito-spacing">
                                      <p>&ensp;Sorry, no social media registered for {shpeito.firstName}.</p>
                                    </div>
                                  )}
                                  <h5>Internship:</h5>
                                  {shpeito.internships.length > 0 ? (
                                    shpeito.internships.map((company) => (
                                      <List className="shpeito-spacing">
                                        <List.Item>
                                          <List.Icon
                                            className="shpeito-spacing"
                                            name="suitcase"
                                          />
                                          <List.Content>
                                            {company}
                                          </List.Content>
                                        </List.Item>
                                      </List>
                                    ))
                                  ) : (
                                    <div className="shpeito-spacing">
                                      <p>&ensp;Sorry, no internship registered for {shpeito.firstName}.</p>
                                      <p></p>
                                    </div>
                                  )}
                                </Grid.Column>
                              </Grid.Row>
                              <p></p>
                            </Grid>
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
      {console.log("I'M HERE")}
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
