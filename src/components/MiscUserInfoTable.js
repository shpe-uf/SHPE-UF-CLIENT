import React from "react";
import { Table } from "semantic-ui-react";

function MiscUserInfoTable({ user }) {
  let classArr = user ? user.classes[0].split(",") : [];
  let internshipArr = user ? user.internships[0].split(",") : [];
  let socialMediaArr = user ? user.socialMedia[0].split(",") : [];
  if (user) {
    console.log(classArr);
    console.log(internshipArr);
    console.log(socialMediaArr);
  }
  return (
    <>
      <Table striped selectable unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Classes</Table.HeaderCell>
            <Table.HeaderCell>Internships</Table.HeaderCell>
            <Table.HeaderCell>Social Media</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
            {user &&
              classArr.map((course, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {course}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Cell>
            <Table.Cell>
            {user &&
              internshipArr.map((internship, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {internship}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Cell>
            <Table.Cell>
            {user &&
              socialMediaArr.map((handle, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {handle}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default MiscUserInfoTable;
