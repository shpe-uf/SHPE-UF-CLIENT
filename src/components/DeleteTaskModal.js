import React, { useState } from 'react';
import { Modal, Input, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { FETCH_TASKS_QUERY } from '../util/graphql';

function DeleteTaskModal(props){
  const [userInput, setUserInput] = useState('')

  const [deleteTaskMutation] = useMutation(DELETE_TASK, {
    update(cache, { data : { deleteTask } }) {
      cache.writeQuery({
        query: FETCH_TASKS_QUERY,
        data: { getTasks: deleteTask},
      });
    }
  })

  return (
    <Modal open={props.open} basic size='small'>
      <Modal.Header>
        Delete "{props.task.name}"?
      </Modal.Header>
      <Modal.Content>
        <ul>
          <li>
            All users who completed this task will lose their record of it
          </li>
          <li>
            All users who completed this task will lose the points they received for it
          </li>
          <li>
            The task will be permenantly deleted
          </li>
        </ul>
        <p>
          To delete enter the name of the task ({props.task.name}) and press 'Delete'
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Input
          onChange={(_,data) => setUserInput(data.value)}
        />
        <Button
          color='red'
          onClick={() => {
            if(props.task.name === userInput) deleteTaskMutation({variables:{taskName: props.task.name}})
            props.close()
          }}
        >
          Delete
        </Button>
        <Button
          color='grey'
          onClick={() => {
            props.close()
          }}
        >
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
const DELETE_TASK = gql`
  mutation deleteTask($taskName: String!) {
    deleteTask(taskName: $taskName) {
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

export default DeleteTaskModal