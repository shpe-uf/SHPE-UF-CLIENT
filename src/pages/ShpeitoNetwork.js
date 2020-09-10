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
  Responsive,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_USERS_QUERY } from "../util/graphql";
import gql from "graphql-tag";
import { AuthContext } from "../context/auth";

import Title from "../components/Title";
import FilterSelection from "../components/FilterSelection";
import UserProfile from "../components/UserProfile";
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

  const [open, setOpen] = useState(true);

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
        (user.confirmed)&&
        (filter.major.length === 0
          ? true
          : filter.major.includes(user.major)) &&
        (filter.year.length === 0 
          ? true 
          : filter.year.includes(user.year)) &&
        (filter.graduating.length === 0
          ? true
          : filter.graduating.includes(user.graduating)) &&
        (filter.country.length === 0
          ? true
          : filter.country.includes(user.country)) &&
        (filter.classes.length === 0
          ? true
          : filter.classes.some(o => user.classes.includes(o))) &&
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

  function displayUsersCards() {
    return (
      <>
        <p></p>
        <Responsive minWidth='1200'>
          <Segment>
            <Card.Group itemsPerRow="4">
              {users.map((shpeito) => (
                <Card attached>
                  {shpeito.photo !== "" ? (
                    <Image
                      fluid
                      rounded
                      src={shpeito.photo}
                      className="image-profile"
                    />
                  ) : (
                    <Image
                      fluid
                      rounded
                      src={placeholder}
                      className="image-profile"
                    />
                  )}
                  <Card.Content>
                    <Card.Header>
                      {shpeito.firstName} {shpeito.lastName}
                    </Card.Header>
                  </Card.Content>
                  <Modal
                    trigger={
                      <Button
                        fluid
                        style={{ "text-align": "center" }}
                        content="User Information"
                        icon="user"
                        labelPosition="left"
                      />
                    }
                    size="large"
                    closeIcon
                  >
                    <UserProfile user={shpeito} isPublic={true}/>
                  </Modal>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </Responsive>
        <Responsive maxWidth='1199'>
          <Segment>
            <Card.Group itemsPerRow="1">
              {users.map((shpeito) => (
                <Card attached>
                  {shpeito.photo !== "" ? (
                    <Image
                      fluid
                      rounded
                      src={shpeito.photo}
                      className="image-profile"
                    />
                  ) : (
                    <Image
                      fluid
                      rounded
                      src={placeholder}
                      className="image-profile"
                    />
                  )}
                  <Card.Content>
                    <Card.Header>
                      {shpeito.firstName} {shpeito.lastName}
                    </Card.Header>
                  </Card.Content>
                  <Modal
                    trigger={
                      <Button
                        fluid
                        style={{ "text-align": "center" }}
                        content="User Information"
                        icon="user"
                        labelPosition="left"
                      />
                    }
                    size="large"
                    closeIcon
                  >
                    <UserProfile user={shpeito} isPublic={true}/>
                  </Modal>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </Responsive>
      </>
    );
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
                      &emsp;Please click on "Edit Profile" to edit your profile
                      and register your classes.
                    </p>
                    <p>
                      &emsp;If you have added your classes already, refresh the
                      page.
                    </p>
                  </Modal.Description>
                </Modal.Content>

                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Modal.Content>
                        <Modal.Actions>
                          <Button
                            style={{ "margin-left": "0em" }}
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
                            onClick={() => {
                              setOpen(false);
                            }}
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
          ) : users.length > 0 && ( displayUsersCards())
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
        {!open && displayUsersCards()}
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
