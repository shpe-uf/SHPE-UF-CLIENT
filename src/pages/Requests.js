import React, { useState } from "react";
import { Container, Grid, Input } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

import { FETCH_REQUESTS_QUERY } from "../util/graphql";

import Title from "../components/Title";
import RequestsTable from "../components/RequestsTable";

function Requests() {
  const [searchTerm, setSearchTerm] = useState("");

  let requests = [];
  let { data, refetch } = useQuery(FETCH_REQUESTS_QUERY);
  if (data) {
    requests = data.getRequests;
  }

  let filteredRequests = (function () {
    if (requests) {
      if (searchTerm === "") {
        return requests;
      }
      let searchLower = searchTerm.toLowerCase();
      return requests.filter((event) => {
        return (
          event.name.toLowerCase().includes(searchLower) ||
          event.firstName.toLowerCase().includes(searchLower) ||
          event.lastName.toLowerCase().includes(searchLower) ||
          event.username.toLowerCase().includes(searchLower)
        );
      });
    } else {
      return undefined;
    }
  })();

  return (
    <>
      <Title title="Requests" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Input
                placeholder="Filter by name or event"
                onChange={(e, data) => {
                  setSearchTerm(data.value);
                }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <RequestsTable requests={filteredRequests} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Requests;
