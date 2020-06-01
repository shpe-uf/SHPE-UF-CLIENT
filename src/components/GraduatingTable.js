import React from "react";
import { Dimmer, Loader, Table, Segment, Header } from "semantic-ui-react";

function GraduatingTable({ users }) {
  let graduatingUsers = [];

  if (users) {
    graduatingUsers = users.filter(
      (user) => user.graduating !== "Not Graduating"
    );
  }

  return (
    <>
      <Dimmer active={graduatingUsers ? false : true} inverted>
        <Loader />
      </Dimmer>
      {graduatingUsers === undefined || graduatingUsers.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no users graduating at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Graduating</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {graduatingUsers &&
                graduatingUsers.map((user, index) => (
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
      )}
    </>
  );
}

export default GraduatingTable;
