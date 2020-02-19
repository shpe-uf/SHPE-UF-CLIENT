import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

import { FETCH_REQUESTS_QUERY } from "../util/graphql";

import Title from "../components/Title";
import RequestsTable from "../components/RequestsTable";

function Requests() {
  var requests = useQuery(FETCH_REQUESTS_QUERY).data.getRequests;

  return (
    <>
      <Title title="Requests" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <RequestsTable requests={requests} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Requests;
