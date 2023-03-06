import React from "react";
import { Table, Segment, Header, Grid } from "semantic-ui-react";

import moment from "moment";

function UserEventsTable({ user }) {
  const reversedEvents = [];
  for (let i = user.events.length - 1; i >= 0; i--) {
    reversedEvents.push(user.events[i])
  }

  var GBMCount = 0;
  var workshopCount = 0;
  var cabinetMeetingCount = 0;
  var miscCount = 0;
  
  {user && user.events.map(event => (
    event.category === "General Body Meeting" ?
    GBMCount++ : false
  ))}
  {user && user.events.map(event => (
    event.category === "Workshop" ?
    workshopCount++ : false
  ))}
  {user && user.events.map(event => (
    event.category === "Cabinet Meeting" ?
    cabinetMeetingCount++ : false
  ))}
  {user && user.events.map(event => (
    event.category === "Miscellaneous" || event.category === "Volunteering" || event.category === "Tabling" || event.category === "Social" || event.category === "Fundraising" || event.category === "Corporate Event" ?
    miscCount++ : false
  ))}



  return (
    <Grid.Row>
      {user === undefined || GBMCount === 0 ? false :
      (
      <><h1>General Body Meetings</h1>
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
                {user &&
                  reversedEvents.map(event => (
                    event.category === "General Body Meeting" ?
                      <Table.Row key={event.name}>
                        <Table.Cell>{event.name}</Table.Cell>
                        <Table.Cell>
                          {moment(event.createdAt)
                            .local()
                            .format("MM/DD/YYYY")}
                        </Table.Cell>
                        <Table.Cell textAlign="center">{event.points}</Table.Cell>
                      </Table.Row>
                      : false))}
              </Table.Body>
            </Table>
          </div></>
      )}
      {user === undefined || workshopCount === 0 ? false :
      (
      <><h1>Workshops</h1>
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
                {user &&
                  reversedEvents.map(event => (
                    event.category === "Workshop" ?
                      <Table.Row key={event.name}>
                        <Table.Cell>{event.name}</Table.Cell>
                        <Table.Cell>
                          {moment(event.createdAt)
                            .local()
                            .format("MM/DD/YYYY")}
                        </Table.Cell>
                        <Table.Cell textAlign="center">{event.points}</Table.Cell>
                      </Table.Row>
                      : false))}
              </Table.Body>
            </Table>
          </div></>
      )}
      {user === undefined || cabinetMeetingCount === 0 ? false :
      (
      <><h1>Cabinet Meetings</h1>
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
                {user &&
                  reversedEvents.map(event => (
                    event.category === "Cabinet Meeting" ?
                      <Table.Row key={event.name}>
                        <Table.Cell>{event.name}</Table.Cell>
                        <Table.Cell>
                          {moment(event.createdAt)
                            .local()
                            .format("MM/DD/YYYY")}
                        </Table.Cell>
                        <Table.Cell textAlign="center">{event.points}</Table.Cell>
                      </Table.Row>
                      : false))}
              </Table.Body>
            </Table>
          </div></>
      )}
      {user === undefined || miscCount === 0 ? false :
      (
      <><h1>Miscellaneous</h1>
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
                {user &&
                  reversedEvents.map(event => (
                    event.category != "General Body Meeting" && event.category != "Workshop" && event.category != "Cabinet Meeting" ?
                      <Table.Row key={event.name}>
                        <Table.Cell>{event.name}</Table.Cell>
                        <Table.Cell>
                          {moment(event.createdAt)
                            .local()
                            .format("MM/DD/YYYY")}
                        </Table.Cell>
                        <Table.Cell textAlign="center">{event.points}</Table.Cell>
                      </Table.Row>
                      : false))}
              </Table.Body>
            </Table>
          </div></>
      )}
      {user === undefined || user.events.length === 0 ? (
        <><h1>Events</h1>
        <div style={{ paddingBottom: 16 }}>
          <Segment placeholder>
            <Header icon>
              <i className="far fa-frown"></i>
              <p>No events on record.</p>
            </Header>
          </Segment>
        </div></>
      ) : false
      } 
    </Grid.Row>
  );
}

export default UserEventsTable;
