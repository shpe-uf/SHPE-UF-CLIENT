import React from "react";
import { Dimmer, Loader, Table, Segment, Header } from "semantic-ui-react";

function MembershipTable({ users }) {
  return (
    <>
      <Dimmer active={users ? false : true} inverted>
        <Loader />
      </Dimmer>
      {users === undefined || users.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no users at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Membership</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users &&
                users.map((user, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      {user.lastName}, {user.firstName}
                    </Table.Cell>
                    <Table.Cell>{user.permission}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
}

export default MembershipTable;
