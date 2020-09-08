import React, { useState } from "react";
import {
  Table,
  Icon,
  Dimmer,
  Loader,
  Segment,
  Header,
  Button,
  Modal,
  Grid,
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";
import moment from "moment";
import { CSVLink } from "react-csv";

import { FETCH_USERS_QUERY, FETCH_EVENTS_QUERY } from "../util/graphql";
import DeleteModal from "./DeleteModal";
import ManualInputModal from "./ManualInputModal";

function EventsTable({ events }) {
  const [manualInputModal, setManualInputModal] = useState(false);
  const [eventInfoModal, setEventInfoModal] = useState(false);
  const [deleteEventModal, setDeleteEventModal] = useState(false)
  const [eventAttendance, setEventAttendance] = useState({});

  const closeModal = (name) => {
    if (name === "manualInput") {
      setErrors(false);
      setManualInputModal(false);
    }

    if (name === "eventInfo") {
      setEventAttendance({});
      setEventInfoModal(false);
    }
  };

  const [removeUserFromEvent] = useMutation(REMOVE_USER_MUTATION, {

    update(cache, { data : { removeUserFromEvent } }) {
      const {getEvents} = cache.readQuery({ query: FETCH_EVENTS_QUERY });
      getEvents.forEach((event, pos) => {
        if(event.name === removeUserFromEvent.name) getEvents[pos] = removeUserFromEvent
      })
      cache.writeQuery({
        query: FETCH_EVENTS_QUERY,
        data: { getEvents: getEvents},
      });
      setEventNameValue(removeUserFromEvent.name);
    }
  });

  function setEventNameValue(eventName) {
    values.eventName = eventName;
  }

  function getEventAttendance(eventInfo) {
    setEventAttendance(eventInfo);
  }

  return (
    <>
      <Dimmer active={events ? false : true} inverted>
        <Loader />
      </Dimmer>
      {events === undefined || events.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no events at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Expiration</Table.HeaderCell>
                <Table.HeaderCell>Semester</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Request</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Attendance
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Manual Input
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Info</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {events &&
                events.map((event, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{event.name}</Table.Cell>
                    <Table.Cell>{event.category}</Table.Cell>
                    <Table.Cell>
                      {moment(event.expiration)
                        .local()
                        .format("MM/DD/YYYY @ hh:mm A")}
                    </Table.Cell>
                    <Table.Cell>{event.semester}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {event.request === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {event.attendance}
                    </Table.Cell>
                    <Table.Cell textAlign="center">{event.points}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setEventNameValue(event.name);
                          setManualInputModal(true);
                        }}
                      >
                        <Icon name="i cursor" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          getEventAttendance(event);
                          setEventInfoModal(true);
                        }}
                      >
                        <Icon name="info" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setEventNameValue(event.name);
                          setDeleteEventModal(true);
                        }}
                        color="red"
                      >
                        <Icon name="x" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}

      <ManualInputModal
        open={manualInputModal}
        users={users}
        errors={errors}
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}
        closeModal={() => setManualInputModal(false)}
      />

      <Modal
        open={eventInfoModal}
        size="small"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Event Information</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                Code: {eventAttendance.code}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h3>{eventAttendance.name}</h3>
                <p>Attendance: {eventAttendance.attendance}</p>
                {eventAttendance.attendance === 0 ? (
                  <Segment placeholder>
                    <Header icon>
                      <i className="fas fa-exclamation-circle"></i>
                      <p>This event has no attendance records.</p>
                    </Header>
                  </Segment>
                ) : (
                  <div
                    className="table-responsive"
                    style={{ marginBottom: 16 }}
                  >
                    <Table striped selectable unstackable>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Name</Table.HeaderCell>
                          <Table.HeaderCell>Username</Table.HeaderCell>
                          <Table.HeaderCell>Email</Table.HeaderCell>
                          <Table.HeaderCell>Remove</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {eventAttendance.users &&
                          eventAttendance.users.map((member) => (
                            <Table.Row key={member.username}>
                              <Table.Cell>
                                {member.lastName + ", " + member.firstName}
                              </Table.Cell>
                              <Table.Cell>{member.username}</Table.Cell>
                              <Table.Cell>{member.email}</Table.Cell>
                              <Table.Cell textAlign='center'>
                                <Button
                                  icon
                                  color='red'
                                  onClick={() => {
                                    removeUserFromEvent({variables: {
                                      username: member.username,
                                      eventName: eventAttendance.name
                                    }})
                                  }}
                                 
                                >
                                  <Icon name='x'/>
                                </Button>
                              </Table.Cell>
                            </Table.Row>
                          ))}
                      </Table.Body>
                    </Table>
                  </div>
                )}
                <Button
                  type="reset"
                  color="grey"
                  onClick={() => setEventInfoModal(false)}
                >
                  Cancel
                </Button>
                <CSVLink
                  data={eventAttendance.users}
                  filename={eventAttendance.name + ".csv"}
                >
                  <Button color="green" floated="right">
                    Download as CSV
                  </Button>
                </CSVLink>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
      <DeleteModal
        open={deleteEventModal}
        close={() => setDeleteEventModal(false)}
        deleteItem={values.eventName}
        type='event'
      />
    </>
  );
}

const MANUAL_INPUT_MUTATION = gql`
  mutation manualInput($username: String!, $eventName: String!) {
    manualInput(
      manualInputInput: { username: $username, eventName: $eventName }
    ) {
      name
      code
      category
      expiration
      semester
      request
      attendance
      points
      users {
        firstName
        lastName
        username
        email
      }
    }
  }
`;
const REMOVE_USER_MUTATION = gql`
  mutation removeUserFromEvent($username: String!, $eventName: String!) {
    removeUserFromEvent(
      manualInputInput: { username: $username, eventName: $eventName }
    ) {
      id
      name
      code
      category
      expiration
      request
      points
      attendance
      semester
      createdAt
      users {
        email
        username
        firstName
        lastName
      }
    }
  }
`;
export default EventsTable;
