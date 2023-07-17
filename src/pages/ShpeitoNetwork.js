import React, { useState } from "react";
import {
  Header,
  Segment,
  Container,
  Card,
  Image,
  Button,
  Modal,
  Loader,
  Responsive,
} from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_USERS_QUERY } from "../util/graphql";

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
      internships: [],
    })
  );

  let usersQuery = useQuery(FETCH_USERS_QUERY, {});
  let data = usersQuery.data;
  let loading = usersQuery.loading;
  let users = [];

  if (data && data.getUsers) {
    users = data.getUsers;
  }

  if (!loading && data) {
    users = data.getUsers.filter(function (user) {
      let fullName = user.firstName.concat(" ").concat(user.lastName);
      let allInternships = user.internships.toString();
      let allClasses = user.classes.toString();
      return (
        user.confirmed &&
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
        (filter.internships.length === 0
          ? true
          : filter.internships
              .map((n) =>
                allInternships.toLowerCase().includes(n.toLowerCase())
              )
              .includes(true)) &&
        (filter.classes.length === 0
          ? true
          : filter.classes
              .map((n) => allClasses.toLowerCase().includes(n.toLowerCase()))
              .includes(true)) &&
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
        <Responsive minWidth="1200">
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
                    <UserProfile user={shpeito} isPublic={true} />
                  </Modal>
                </Card>
              ))}
            </Card.Group>
          </Segment>
        </Responsive>
        <Responsive maxWidth="1199">
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
                    <UserProfile user={shpeito} isPublic={true} />
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
        {loading | !data ? (
          <div style={{ marginTop: "300px" }}>
            <Loader active>
              Wow! That's a lot of shpeitos! This might take a while...
            </Loader>
          </div>
        ) : users.length < 0 ? (
          <div style={{ paddingBottom: 16 }}>
            <p></p>
            <Segment placeholder>
              <Header icon>
                <i className="far fa-frown"></i>
                <p>No results found.</p>
              </Header>
            </Segment>
          </div>
        ) : (
          displayUsersCards()
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
    this.internships = filter.internships;
  }
}

export default ShpeitoNetwork;