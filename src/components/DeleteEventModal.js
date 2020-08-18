import React, { useState } from "react";
import { Modal, Input, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { FETCH_EVENTS_QUERY } from "../util/graphql";



function DeleteEventModal(props) {
  const [userInput, setUserInput] = useState('')

  const [deleteEventMutation] = useMutation(DELETE_EVENT, {
    update(cache, { data : { deleteEvent } }) {
      cache.writeQuery({
        query: FETCH_EVENTS_QUERY,
        data: { getEvents: deleteEvent},
      });
    }
  })

  return (
    <Modal open={props.open} basic size="small">
      <Modal.Header>Delete "{props.event}" ?</Modal.Header>
      <Modal.Content>
        <ul>
          <li>
            All users who attended this event will lose their record of it
          </li>
          <li>
            All users who attended this event will lose the points they received
            for it
          </li>
          <li>The event will be permenantly deleted</li>
        </ul>
        <p>
          To delete enter the name of the event ({props.event}) and press
          'Delete'
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Input onChange={(_, data) => setUserInput(data.value)} />
        <Button
          color="red"
          onClick={() => {
            if (props.event === userInput)
              deleteEventMutation({ variables: { eventName: props.event } });
            props.close();
          }}
        >
          Delete
        </Button>
        <Button
          color="grey"
          onClick={() => {
            props.close();
          }}
        >
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
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

export default DeleteEventModal;
