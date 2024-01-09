import React from "react";
import { Container, Grid, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/client";

import Title from "../components/Title";
import MembersTable from "../components/MembersTable";

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

  return (
    <>
      <Title title="Members" adminPath={window.location.pathname} />
      <Container className="body">
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

export default Members;
