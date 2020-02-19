import React, { useState } from "react";
import { Grid, Button, Form, Modal } from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";

import TasksTable from "../components/TasksTable";

import { FETCH_TASKS_QUERY } from "../util/graphql";

function Tasks() {
  const [errors, setErrors] = useState({});
  var tasks = useQuery(FETCH_TASKS_QUERY).data.getTasks;

  const openModal = name => {
    if (name === "createTask") {
      setCreateTaskModal(true);
    }
  };

  const closeModal = name => {
    if (name === "createTask") {
      values.name = "";
      values.description = "";
      values.startDate = "";
      values.endDate = "";
      values.points = "";
      setErrors(false);
      setCreateTaskModal(false);
    }
  };

  const [createTaskModal, setCreateTaskModal] = useState(false);

  const { values, onChange, onSubmit } = useForm(createTaskCallback, {
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    points: ""
  });

  const [createTask, { loading }] = useMutation(CREATE_TASK_MUTATION, {
    update(
      _,
      {
        data: { createTask: tasksData }
      }
    ) {
      values.name = "";
      values.description = "";
      values.startDate = "";
      values.endDate = "";
      values.points = "";
      tasks.splice(0, tasks.length);
      for (var i = 0; i < tasksData.length; i++) {
        tasks.push(tasksData[i]);
      }
      setErrors(false);
      setCreateTaskModal(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  function createTaskCallback() {
    createTask();
  }

  return (
    <>
      <Title title="Tasks" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button
                content="Create Task"
                icon="pencil"
                labelPosition="left"
                onClick={() => openModal("createTask")}
                floated="right"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <TasksTable tasks={tasks} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Modal
        open={createTaskModal}
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Create Task</h2>
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
                  <Form.Input
                    type="text"
                    label="Name"
                    name="name"
                    value={values.name}
                    error={errors.name ? true : false}
                    onChange={onChange}
                  />
                  <Form.TextArea
                    type="text"
                    label="Description"
                    name="description"
                    value={values.description}
                    error={errors.description ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Points"
                    name="points"
                    value={values.points}
                    error={errors.points ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Start Date"
                    name="startDate"
                    value={values.startDate}
                    error={errors.startDate ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="End Date"
                    name="endDate"
                    value={values.endDate}
                    error={errors.endDate ? true : false}
                    onChange={onChange}
                  />
                  <Button
                    type="reset"
                    color="grey"
                    onClick={() => closeModal("createTask")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" floated="right">
                    Create
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
  }

const CREATE_TASK_MUTATION = gql`
  mutation createTask(
    $name: String!
    $startDate: String!
    $endDate: String!
    $description: String!
    $points: String!
  ) {
    createTask(
      createTaskInput: {
        name: $name
        startDate: $startDate
        endDate: $endDate
        description: $description
        points: $points
      }
    ) {
      name
      description
      startDate
      endDate
      semester
      points
      createdAt
      attendance
      users {
        email
        firstName
        lastName
        username
      }
    }
  }
`;

export default Tasks;
