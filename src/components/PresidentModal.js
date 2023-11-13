import React, { useState } from "react";
import { Grid, Button, Icon, Header, Image, Modal } from "semantic-ui-react";

function PresidentModal(cabinet, description, cabinetEmail, pic) {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Grid verticalAlign="middle" columns={2} centered>
          <Button fluid>Learn more</Button>
        </Grid>
      }
    >
      <Modal.Header>{cabinet}</Modal.Header>
      <Modal.Content image>
        <Grid>
          <Grid.Column width={5}>
            <Image size="medium" src={pic} wrapped />
          </Grid.Column>
          <Grid.Column width={11}>
            <Header>Description</Header>
            <p>{description}</p>
          </Grid.Column>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        {
          <a href={"mailto:" + cabinetEmail} className="link-email">
            <Icon name="mail" />
            Contact via email
          </a>
        }
        <Button
          content="Close"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default PresidentModal;
