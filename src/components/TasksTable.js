import React, { useState } from "react";
import {
  Button,
  Dimmer,
  Form,
  Grid,
  Header,
  Icon,
  Loader,
  Modal,
  Segment,
  Table
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";
import { CSVLink } from "react-csv";

import { FETCH_USERS_QUERY, FETCH_TASKS_QUERY } from "../util/graphql";
import DeleteModal from "./DeleteModal";

function TasksTable({tasks}) {
  const [errors, setErrors] = useState({});
  const [manualTaskInputModal, setManualTaskInputModal] = useState(false);
  const [taskInfoModal, setTaskInfoModal] = useState(false);
  const [deleteTaskModal, setDeleteTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  let users = useQuery(FETCH_USERS_QUERY).data.getUsers;

  const openModal = name => {
    if (name === "manualTaskInput") {
      setManualTaskInputModal(true);
    }

    if (name === "taskInfo") {
      setTaskInfoModal(true);
    }
  };

  const closeModal = name => {
    if (name === "manualTaskInput") {
      values.username = "";
      values.taskName = "";
      setErrors(false);
      setManualTaskInputModal(false);
    }

    if (name === "taskInfo") {
      setTaskInfoModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(manualTaskInputCallback, {
    username: "",
    taskName: ""
  });

  const [manualTaskInput, { loading }] = useMutation(MANUAL_INPUT_MUTATION, {

    update(cache, { data : { manualTaskInput } }) {
      const {getTasks} = cache.readQuery({ query: FETCH_TASKS_QUERY });
      getTasks.forEach((task, pos) => {
        if(task.name === manualTaskInput.name) getTasks[pos] = manualTaskInput
      })
      cache.writeQuery({
        query: FETCH_TASKS_QUERY,
        data: { getTasks: getTasks},
      });
      closeModal('manualTaskInput')
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  const [removeUserFromTask] = useMutation(REMOVE_USER_MUTATION, {

    update(cache, { data : { removeUserFromTask } }) {
      const {getTasks} = cache.readQuery({ query: FETCH_TASKS_QUERY });
      getTasks.forEach((task, pos) => {
        if(task.name === removeUserFromTask.name) getTasks[pos] = removeUserFromTask
      })
      cache.writeQuery({
        query: FETCH_TASKS_QUERY,
        data: { getTasks: getTasks},
      });
      setSelectedTask(removeUserFromTask);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    }
  });

  function manualTaskInputCallback() {
    manualTaskInput();
  }

  function setTaskNameValue(taskName) {
    values.username = users ? users[0].username : ''
    values.taskName = taskName;
  }

  return (
    <>
      <Dimmer active={tasks ? false : true} inverted>
        <Loader />
      </Dimmer>
      {tasks === undefined || tasks.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no tasks at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Start Date</Table.HeaderCell>
                <Table.HeaderCell>End Date</Table.HeaderCell>
                <Table.HeaderCell>Semester</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  Attendance
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Add User</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Info</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tasks &&
                tasks.map((task, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{task.name}</Table.Cell>
                    <Table.Cell>{task.startDate}</Table.Cell>
                    <Table.Cell>{task.endDate}</Table.Cell>
                    <Table.Cell>{task.semester}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {task.attendance}
                    </Table.Cell>
                    <Table.Cell textAlign="center">{task.points}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setTaskNameValue(task.name);
                          openModal("manualTaskInput");
                        }}
                      >
                        <Icon name="i cursor" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setSelectedTask(task);
                          openModal("taskInfo");
                        }}
                      >
                        <Icon name="info" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setSelectedTask(task);
                          setDeleteTaskModal(true);
                        }}
                        color='red'
                      >
                        <Icon name='x' />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}

      <Modal
        open={manualTaskInputModal}
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
                    onClick={() => closeModal("manualTaskInput")}
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
        open={taskInfoModal}
        size="small"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Task Information</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h3>{selectedTask.name}</h3>
                <p>{selectedTask.description}</p>
                <p>Attendance: {selectedTask.attendance}</p>
                {selectedTask.attendance === 0 ? (
                  <Segment placeholder>
                    <Header icon>
                      <i className="fas fa-exclamation-circle"></i>
                      <p>This task has no attendance records.</p>
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
                        {selectedTask.users &&
                          selectedTask.users.map(member => (
                            <Table.Row key={member.username}>
                              <Table.Cell>
                                {member.lastName + "," + member.firstName}
                              </Table.Cell>
                              <Table.Cell>{member.username}</Table.Cell>
                              <Table.Cell>{member.email}</Table.Cell>
                              <Table.Cell textAlign='center'>
                                <Button
                                  icon
                                  color='red'
                                  onClick={() => {
                                    removeUserFromTask({variables: {
                                      username: member.username,
                                      taskName: selectedTask.name
                                    }})
                                  }}
                                >
                                  <Icon name='x' />
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
                  onClick={() => closeModal("taskInfo")}
                >
                  Cancel
                </Button>
                <CSVLink
                  data={selectedTask.users}
                  filename={selectedTask.name + ".csv"}
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
        open={deleteTaskModal}
        close={() => setDeleteTaskModal(false)}
        deleteItem={selectedTask.name}
        deleteId={selectedTask.id}
        type='task'
      />
    </>
  );
}

const MANUAL_INPUT_MUTATION = gql`
  mutation manualTaskInput($username: String!, $taskName: String!) {
    manualTaskInput(
      manualTaskInputInput: { username: $username, taskName: $taskName }
    ) {
      name
      startDate
      endDate
      description
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

const REMOVE_USER_MUTATION = gql`
  mutation removeUserFromTask($username: String!, $taskName: String!) {
    removeUserFromTask(
      manualTaskInputInput: { username: $username, taskName: $taskName }
    ) {
      name
      startDate
      endDate
      description
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
export default TasksTable;
