import React, {useState} from "react";
import { useContext} from "react";
import { Accordion, Container, Grid, Button, Card, Tab, Segment, Icon, Header, Image, Modal } from "semantic-ui-react";
import  CorporateCard  from "../components/CorporateCard";
import ModalDialog from 'react-bootstrap/ModalDialog'
import CorporationProfile from "../components/CorporationProfile";
import CorporationTable from "../components/CorporationTable";
import CabinetModal from "../components/CabinetModal";

function PresidentModal(cabinet, description, cabinetEmail, pic) {



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


export default PresidentModal
