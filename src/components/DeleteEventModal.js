import React, { useState } from "react";
import { Modal, Input, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

function DeleteEventModal(props) {
  return (
    <Modal open={props.open}>
      <Modal.Header>Delete "{props.event}" ?</Modal.Header>
      <Button
          color='grey'
          onClick={() => {
            console.log(props)
            props.close()
          }}
        >
          Cancel
        </Button>
    </Modal>
  );
}

export default DeleteEventModal;
