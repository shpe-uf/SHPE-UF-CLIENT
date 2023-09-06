import React from "react";
import {
    Button,
    Modal,
    Image,
    Header,
    Grid,
} from "semantic-ui-react";

function JrEventModal(event, description, pic) {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Grid verticalAlign="middle" columns={2} centered>
            <Button fluid className="EventButton">
              {event}
            </Button>
        </Grid>
      }
    >
      <Modal.Header>{event}</Modal.Header>
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

export default JrEventModal;
