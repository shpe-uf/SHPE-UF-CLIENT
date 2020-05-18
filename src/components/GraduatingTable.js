import React from "react";
import { Dimmer, Loader, Table } from "semantic-ui-react";

function GraduatingTable({ users }) {
  return (
    <>
      <div className="table-responsive">
        <Dimmer active={users ? false : true} inverted>
          <Loader />
        </Dimmer>
        <Table striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Graduating</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users &&
              users.map((user, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {user.lastName}, {user.firstName}
                  </Table.Cell>
                  <Table.Cell>{user.graduating}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default GraduatingTable;
