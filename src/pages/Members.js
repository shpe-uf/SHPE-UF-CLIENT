import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

import Title from "../components/Title";
import MembersTable from "../components/MembersTable";

import { FETCH_USERS_QUERY } from "../util/graphql";

function Members() {
  var users = useQuery(FETCH_USERS_QUERY).data.getUsers;

  return (
    <>
      <Title title="Members" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <MembersTable users={users} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Members;
