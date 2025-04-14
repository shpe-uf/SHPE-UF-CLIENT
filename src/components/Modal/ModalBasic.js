import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ModalBasic = props => (
  <Modal open={props.open} basic size="small">
    <Header icon="mail" content="Confirm Email" />
    <Modal.Content>
      <p>{props.message}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={props.handleClose} inverted>
        <Icon name="checkmark" /> Got it
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalBasic;
