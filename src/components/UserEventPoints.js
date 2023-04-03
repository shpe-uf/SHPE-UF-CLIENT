import React from "react";
import { Table } from "semantic-ui-react";
import moment from "moment";

const UserEventPoints = ({ reversedEvents, category }) => {
 
  let eventsToDisplay = [];

  if (category === "Miscellaneous" || category === "Misc") {
    eventsToDisplay = reversedEvents.filter(event =>
        event.category !== "General Body Meeting" &&
        event.category !== "Workshop" &&
        event.category !== "Cabinet Meeting"
    );
  }
  else if (category === "GBM") {
    eventsToDisplay = reversedEvents.filter(event => event.category === "General Body Meeting")
  }
  else {
    eventsToDisplay = reversedEvents.filter(event => event.category === category);
  }

  return (
    <>
      <h1>{category === "Miscellaneous" ? "Miscellaneous" : category}</h1>
      <div className="table-responsive">
        <Table striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Event</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {eventsToDisplay.map(event => (
              <Table.Row key={event.name}>
                <Table.Cell>{event.name}</Table.Cell>
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
    </>
  );
};

export default UserEventPoints;
