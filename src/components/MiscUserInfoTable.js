import React from "react";
import { Table } from "semantic-ui-react";

function MiscUserInfoTable({ user }) {
  return (
    <>
      <Table striped selectable unstackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <b>Classes:</b>
            </Table.Cell>
            {user && user.classes.map((course, index) => (
              <Table.Cell key={index}>
                {course}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <b>Internships:</b>
            </Table.Cell>
            {user && user.internships.map((internship, index) => (
              <Table.Cell key={index}>
                {internship}
              </Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <b>Social Media:</b>
            </Table.Cell>
            {user && user.socialMedia.map((handle, index) => (
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
