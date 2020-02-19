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
  Form,
  Grid
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";
import moment from "moment";
import { CSVLink } from "react-csv";

import { FETCH_USERS_QUERY } from "../util/graphql";

function EventsTable({ events }) {
  const [errors, setErrors] = useState({});
  const [manualInputModal, setManualInputModal] = useState(false);
  const [eventInfoModal, setEventInfoModal] = useState(false);
  const [eventAttendance, setEventAttendance] = useState({});

  var users = [
    {
      username: "",
      firstName: "",
      lastName: ""
    }
  ];

  var userData = useQuery(FETCH_USERS_QUERY).data.getUsers;

  if (userData) {
    for (var i = 0; i < userData.length; i++) {
      users.push(userData[i]);
    }
  }

  const openModal = name => {
    if (name === "manualInput") {
      setManualInputModal(true);
    }

    if (name === "eventInfo") {
      setEventInfoModal(true);
    }
  };

  const closeModal = name => {
    if (name === "manualInput") {
      values.username = "";
      values.eventName = "";
      setErrors(false);
      setManualInputModal(false);
    }

    if (name === "eventInfo") {
      setEventAttendance({});
      setEventInfoModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(manualInputCallback, {
    username: "",
    eventName: ""
  });

  const [manualInput, { loading }] = useMutation(MANUAL_INPUT_MUTATION, {
    update(
      _,
      {
        data: { manualInput: eventsData }
      }
    ) {
      values.username = "";
      values.eventName = "";
      events.splice(0, events.length);
      for (var i = 0; i < eventsData.length; i++) {
        events.push(eventsData[i]);
      }
      setErrors(false);
      setManualInputModal(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  function manualInputCallback() {
    manualInput();
  }

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
                <Table.HeaderCell>Code</Table.HeaderCell>
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
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {events &&
                events.map((event, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{event.name}</Table.Cell>
                    <Table.Cell>{event.code}</Table.Cell>
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
                          openModal("manualInput");
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
                          openModal("eventInfo");
                        }}
                      >
                        <Icon name="info" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}

      <Modal
        open={manualInputModal}
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Manual Input</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {Object.keys(errors).length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map(value => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Form
                  onSubmit={onSubmit}
                  noValidate
                  className={loading ? "loading" : ""}
                >
                  <Form.Field
                    control="select"
                    label="Member"
                    name="username"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                  >
                    {users &&
                      users.map(user =>
                        user.username === "" ? (
                          <option value={user.username} key={user.username}>
                            {user.lastName + user.firstName}
                          </option>
                        ) : (
                          <option value={user.username} key={user.username}>
                            {user.lastName +
                              ", " +
                              user.firstName +
                              " (" +
                              user.username +
                              ")"}
                          </option>
                        )
                      )}
                  </Form.Field>
                  <Button
                    type="reset"
                    color="grey"
                    onClick={() => closeModal("manualInput")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" floated="right">
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>

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
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {eventAttendance.users &&
                          eventAttendance.users.map(member => (
                            <Table.Row key={member.username}>
                              <Table.Cell>
                                {member.lastName + ", " + member.firstName}
                              </Table.Cell>
                              <Table.Cell>{member.username}</Table.Cell>
                              <Table.Cell>{member.email}</Table.Cell>
                            </Table.Row>
                          ))}
                      </Table.Body>
                    </Table>
                  </div>
                )}
                <Button
                  type="reset"
                  color="grey"
                  onClick={() => closeModal("eventInfo")}
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

export default EventsTable;
