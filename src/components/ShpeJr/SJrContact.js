import React from 'react'
import { Card, Modal, Grid, Button, Icon } from "semantic-ui-react";
import { Media } from "../../Media";

function contact(email) {
  return JRModal(contact, email);
}

function JRModal(cabinet, email){
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Grid verticalAlign="middle" columns={2} centered>
          <Button fluid>
            <Modal.Actions>
            {
              <a href={"mailto:" + email} className="link-email">
              <Icon name="mail" />
              Contact via email
              </a>
            }
            </Modal.Actions>
          </Button>
        </Grid>
      }
    ></Modal>
  );
}

const SJrContact = () =>{
  return(
    <div className='SJrContact'>
      <h1>
        Contact Us
      </h1>
      <Media greaterThanOrEqual="computer">
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column style={{ display:'flex', alignItems:'center'}}>
            <div>
              <h5>Have questions about our SHPE JR Outreach and K-12 STEM Opportunities?</h5>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Card.Group centered itemsPerRow={1.1}>
              <Card
                image={"https://shpeuf.s3.amazonaws.com/public/eboard/VPExternal"}
                header="Sebastian Sobrino"
                meta="VP of External Affairs"
                extra={contact("vpexternal.shpeuf@gmail.com")}    
              />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column style={{ display: 'flex', alignItems:'center'}}>
            <div>
              <h5>Interested in becoming a SHPE UF jr chapter?</h5>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Card.Group centered itemsPerRow={1.1}>
              <Card
                image={"https://shpeuf.s3.amazonaws.com/public/shpejr/shpeJrChair.jpg"}
                header="Maria Isabel Herreros"
                meta="SHPE JR Chair"
                extra={contact("shpejrchair.shpeuf@gmail.com")}   
              />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Media>

      <Media lessThan="computer">
      <Grid divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column style={{ display:'flex', alignItems:'center'}}>
            <div>
              <h5>Have questions about our SHPE JR Outreach and K-12 STEM Opportunities?</h5>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Card.Group centered itemsPerRow={1.1}>
              <Card
                image={"https://shpeuf.s3.amazonaws.com/public/eboard/VPExternal"}
                header="Sebastian Sobrino"
                meta="VP of External Affairs"
                extra={contact("vpexternal.shpeuf@gmail.com")}    
              />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column style={{ display: 'flex', alignItems:'center'}}>
            <div>
              <h5>Interested in becoming a SHPE UF jr chapter?</h5>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Card.Group centered itemsPerRow={1.1}>
              <Card
                image={"https://shpeuf.s3.amazonaws.com/public/shpejr/shpeJrChair.jpg"}
                header="Maria Isabel Herreros"
                meta="SHPE JR Chair"
                extra={contact("jrchair.shpeuf@gmail.com")}   
              />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Media>
    </div>
  );
};
export default SJrContact;