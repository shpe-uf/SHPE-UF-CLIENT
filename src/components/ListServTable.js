import React from "react";
import { Dimmer, Loader, Table, Segment, Header } from "semantic-ui-react";

function ListServTable({ users }) {
  let listServUsers = [];

  if (users) {
    listServUsers = users.filter((user) => user.listServ === true);
  }
  
  return (
    <>
      <Dimmer active={listServUsers ? false : true} inverted>
        <Loader />
      </Dimmer>
      {listServUsers === undefined || listServUsers.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no users in the ListServ at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>ListServ</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {listServUsers &&
                listServUsers.map((user, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      {user.lastName}, {user.firstName}
                    </Table.Cell>
                    <Table.Cell>Yes</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
}

export default ListServTable;
