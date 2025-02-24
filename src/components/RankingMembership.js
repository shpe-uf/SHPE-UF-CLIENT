import React from "react";
import { Dimmer, Loader, Table, Segment, Header, PaginationItem } from "semantic-ui-react";

function MembershipTable({ users, points }) {
    const sortedUsers = [...users].sort((a, b) => {
        return b[points + "Points"] - a[points + "Points"]; 
      });  
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
            <h1>{points} Points</h1>
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell>Rank</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Year</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users &&
                sortedUsers.map((user, index) => (
                <>
                    {user[points+"Points"] > 0 &&
                        <Table.Row key={index}>
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell> {user.firstName + " " + user.lastName}</Table.Cell>
                            <Table.Cell>{user.year}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user[points+"Points"]}</Table.Cell>
                        </Table.Row>
                    }
                </>        
                ))}
            </Table.Body>
          </Table>
        </div>
      )}    
    </>
  );
}

export default MembershipTable;
