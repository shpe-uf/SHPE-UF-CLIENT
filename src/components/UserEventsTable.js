import React from "react";
import { Table, Segment, Header, Grid } from "semantic-ui-react";

import moment from "moment";

function UserEventsTable({ user }) {
  return (
    <Grid.Row>
      <h1>Events</h1>
      {user === undefined || user.events.length === 0 ? (
        <div style={{ paddingBottom: 16 }}>
          <Segment placeholder>
            <Header icon>
              <i className="far fa-frown"></i>
              <p>No events on record.</p>
            </Header>
          </Segment>
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {user &&
                user.events.map(event => (
                  <Table.Row key={event.name}>
                    <Table.Cell>{event.name}</Table.Cell>
                    <Table.Cell>{event.category}</Table.Cell>
                    <Table.Cell>
                      {moment(event.createdAt)
                        .local()
                        .format("MM/DD/YYYY")}
                    </Table.Cell>
                    <Table.Cell textAlign="center">{event.points}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </Grid.Row>
  );
}

export default UserEventsTable;
