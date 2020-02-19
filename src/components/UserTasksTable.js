import React from "react";
import { Grid, Table, Segment, Header } from "semantic-ui-react";

import moment from "moment";


function UserTasksTable({ user }) {
  return (
    <Grid.Row>
      <h1>Tasks</h1>
      {user === undefined ||
      user.tasks.length === 0 ? (
        <div style={{ paddingBottom: 16 }}>
          <Segment placeholder>
            <Header icon>
              <i className="far fa-frown"></i>
              <p>No tasks on record</p>
            </Header>
          </Segment>
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Task</Table.HeaderCell>
                <Table.HeaderCell>Start Date</Table.HeaderCell>
                <Table.HeaderCell>End Date</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {user &&
                user.tasks.map(task => (
                  <Table.Row key={task.name}>
                    <Table.Cell>{task.name}</Table.Cell>
                    <Table.Cell>{task.startDate}</Table.Cell>
                    <Table.Cell>{task.endDate}</Table.Cell>
                    <Table.Cell textAlign="center">{task.points}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </Grid.Row>
  );
}

export default UserTasksTable;
