import React, { useState } from 'react';
import { Modal, Input, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { FETCH_TASKS_QUERY, FETCH_CORPORATIONS_QUERY, FETCH_EVENTS_QUERY } from '../util/graphql';



function DeleteModal(props){
  const [userInput, setUserInput] = useState('');
  console.log(props.deleteId)

  const [deleteTaskMutation] = useMutation(DELETE_TASK, {
    update(cache, { data : { deleteTask } }) {
      cache.writeQuery({
        query: FETCH_TASKS_QUERY,
        data: { getTasks: deleteTask},
      });
    }
  })

  const [deleteCorporationMutation] = useMutation(DELETE_CORPORATION_MUTATION, {
    update(cache, { data : { deleteCorporation } }) {
      cache.writeQuery({
        query: FETCH_CORPORATIONS_QUERY,
        data: { getCorporations: deleteCorporation},
      });
    }
  })

  const [deleteEventMutation] = useMutation(DELETE_EVENT, {
    update(cache, { data : { deleteEvent } }) {
      cache.writeQuery({
        query: FETCH_EVENTS_QUERY,
        data: { getEvents: deleteEvent},
      });
    }
  })

  function deleteItem() {
    switch(props.type) {
      case "task":
        deleteTaskMutation({variables: {taskId: props.deleteId}})
        break;
      case "corporation":
        deleteCorporationMutation({variables: {corporationId: props.deleteId}})
        break;
      case "event":
        deleteEventMutation({variables: {eventName: props.deleteItem}})
        break;
      default:
        break;
    }


  return (
    <Modal open={props.open} basic size='small'>
      <Modal.Header>
        Delete "{props.deleteItem}"?
      </Modal.Header>
      <Modal.Content>
        <ul>
          <li>
            All users who completed this will lose their record of it
          </li>
          <li>
            All users who completed this will lose the points they received for it
          </li>
          <li>
            This item will be permenantly deleted
          </li>
        </ul>
        <p>
          To delete enter the name of the {props.type} ({props.deleteItem}) and press 'Delete'
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Input
          onChange={(_,data) => setUserInput(data.value)}
        />
        <Button
          color='red'
          onClick={() => {
            if(props.deleteItem === userInput) deleteItem()
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
  mutation deleteTask($taskId: ID!) {
    deleteTask(taskId: $taskId) {
      id
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

const DELETE_CORPORATION_MUTATION = gql`
 mutation deleteCorporation ($corporationId: ID!) {
    deleteCorporation(corporationId: $corporationId){
      id
      name
      logo
      slogan
      majors
      industries
      overview
      mission
      goals
      businessModel
      newsLink
      applyLink
      academia
      govContractor
      nonProfit
      visaSponsor
      shpeSponsor
      industryPartnership
      fallBBQ
      springBBQ
      nationalConvention
   }
 }
`;

const DELETE_EVENT = gql`
  mutation deleteEvent($eventName: String!) {
    deleteEvent(eventName: $eventName) {
      id
      name
      code
      category
      points
      attendance
      expiration
      request
      semester
      createdAt
      users{
        firstName
        lastName
        username
      }
    }
}
`;
};

export default DeleteModal
