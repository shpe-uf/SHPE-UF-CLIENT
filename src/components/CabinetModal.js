import React from "react";
import {
  Accordion,
  Icon,
  Button,
  Modal,
  Image,
  Header,
  Grid,
} from "semantic-ui-react";

function CabinetModal(cabinet, description, cabinetEmail, pic, json) {
  const [open, setOpen] = React.useState(false);
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
      <Modal.Header>
        {cabinet}
        
        <Icon 
        name="close" 
        className="closeButton"
        color="red"
        onClick={() => setOpen(false)} />
        
        </Modal.Header>
      <Modal.Content image>
        <Grid>
          <Grid.Column width={5}>
            <Image size="medium" src={pic} wrapped />
          </Grid.Column>

          <Grid.Column width={11}>
            <Header>Description</Header>

            <p>{description}</p>
          </Grid.Column>

          <Grid.Column width={16}>
            <Header>Director Positions</Header>
            <Accordion defaultActiveIndex={0} panels={json} />
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

        {/* <Button
          content="Close"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
  );
}

export default CabinetModal;
