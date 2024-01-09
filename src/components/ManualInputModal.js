import React, { useState } from 'react';
import { Modal, Grid, Button, Dropdown, Divider } from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/client';
import { FETCH_USERS_QUERY, FETCH_EVENTS_QUERY, FETCH_TASKS_QUERY } from '../util/graphql';
import gql from 'graphql-tag';

function ManualInputModal(props) {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState('');

  let users = null;
  let {data} = useQuery(FETCH_USERS_QUERY);
  if(data) {
    users = data.getUsers;
  }

  if(users) {
    users = users.map(user => {
      return (
        {
          key: user.username,
          value: user.username,
          text: user.firstName + ' ' + user.lastName,
        }
      )
    })
  }

  const [manualInput] = useMutation(MANUAL_INPUT_MUTATION, {
    update(cache, { data: { manualInput } }) {
      const {getEvents} = cache.readQuery({ query: FETCH_EVENTS_QUERY });
      cache.writeQuery({
        query: FETCH_EVENTS_QUERY,
        data: {getEvents, manualInput}
      });
      setErrors(false);
      props.setModalOpen(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    }
  });

  const [manualTaskInput] = useMutation(MANUAL_TASK_INPUT_MUTATION, {
    update(cache, { data : { manualTaskInput } }) {
      const {getTasks} = cache.readQuery({ query: FETCH_TASKS_QUERY });
      getTasks.forEach((task, pos) => {
        if(task.name === manualTaskInput.name) getTasks[pos] = manualTaskInput
      })
      cache.writeQuery({
        query: FETCH_TASKS_QUERY,
        data: { getTasks: getTasks},
      });
      setErrors(false);
      props.setModalOpen(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    }
  });

  return (
    <Modal
      open={props.open}
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
                    {Object.values(errors).map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Dropdown
                placeholder='Select User'
                options={users}
                fluid
                search
                selection
                onChange={(_,data) => setUser(data.value)}
              />
              <Divider hidden/>
              <Button
                type="reset"
                color="grey"
                onClick={() => {
                  setErrors(false)
                  props.setModalOpen(false)
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                floated="right"
                onClick={() => {
                  props.type === 'event' && manualInput({variables: {username: user, eventName: props.addObject}})
                  props.type === 'task' && manualTaskInput({variables: {username: user, taskName: props.addObject}})
                }}>
                Submit
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
  )
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

const MANUAL_TASK_INPUT_MUTATION = gql`
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
export default ManualInputModal;
