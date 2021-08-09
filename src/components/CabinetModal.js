import React from 'react'
import { Accordion, Icon, Button, Modal, Image, Header, Grid } from 'semantic-ui-react'
import president from "../assets/images/eboard/president.jpeg";
import graduate from "../assets/images/eboard/graduate.jpeg";
import secretary from "../assets/images/eboard/secretary.jpg";
import treasurer from "../assets/images/eboard/treasurer.jpeg";
import marketing from "../assets/images/eboard/marketing.jpeg";
import corporate from "../assets/images/eboard/corporate.jpeg";
import technology from "../assets/images/eboard/technology.jpeg";
import external from "../assets/images/eboard/external.jpeg";
import internal from "../assets/images/eboard/internal.jpeg";


function CabinetModal(cabinet, description, cabinetEmail, pic, panels) {

  const [open, setOpen] = React.useState(false)

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Grid verticalAlign='middle' columns={2} centered>

          <Button>Learn more</Button>

        </Grid>}
      >
        <Modal.Header>{cabinet}</Modal.Header>
        <Modal.Content image>
        <Grid>
        <Grid.Column width = {5}>
         <Image size='medium' src={pic} wrapped />
         </Grid.Column>




         <Grid.Column width = {11}>
            <Header>Description</Header>

          <p>
            {description}
          </p>
          </Grid.Column>

          <Grid.Column width = {16}>
            <Header>Director Positions</Header>
            <Accordion defaultActiveIndex={0} panels={panels} />

            <p></p>
            </Grid.Column>

            </Grid>
        </Modal.Content>
        <Modal.Actions>
        {  <a href={"mailto:" + cabinetEmail} className="link-email">
            <Icon name="mail" />
            Contact via email
          </a>}

          <Button
            content="Close"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    )
}


export default CabinetModal
