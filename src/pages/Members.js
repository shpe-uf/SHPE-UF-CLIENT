import React, { useState } from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";

import Title from "../components/Title";
import MembersTable from "../components/MembersTable";
import FilterSelection from "../components/FilterSelection";

import { FETCH_USERS_QUERY } from "../util/graphql";

function Members() {
  //const {data: {getUsers: users}, refetch} = useQuery(FETCH_USERS_QUERY);
  let usersQuery = useQuery(FETCH_USERS_QUERY, {});
  let data = usersQuery.data;
  let loading = usersQuery.loading;
  let refetch = usersQuery.refetch;
  let users = [];

  if (data && data.getUsers) {
    users = data.getUsers;
  }

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

  return (
    <>
      <Title title="Members" adminPath={window.location.pathname} />
      <Container className="body">
      <FilterSelection getUsers={getUsers} />
        <Grid>
          <Grid.Row>
            <Grid.Column>
              {loading | !data ? (
                <div style={{ marginTop: "300px" }}>
                  <Loader active>Loading users, please wait...</Loader>
                </div>
              ) : (
                <MembersTable users={users} refetch={refetch} />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
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

export default Members;
