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
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <b>Classes:</b>
            </Table.Cell>
            {user && classArr.map((course, index) => (
              <Table.Cell key={index}>
                {course}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <b>Internships:</b>
            </Table.Cell>
            {user && internshipArr.map((internship, index) => (
              <Table.Cell key={index}>
                {internship}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <b>Social Media:</b>
            </Table.Cell>
            {user && socialMediaArr.map((handle, index) => (
              <Table.Cell key={index}>
                {handle}
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

export default MiscUserInfoTable;
