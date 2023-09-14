import React from 'react'
import { Card, Modal, Grid, Button, Icon} from "semantic-ui-react";

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
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column style={{ display:'flex', alignItems:'center'}}>
            <div>
              <h5>Have questions about outreach and STEM opportunities?</h5>
              <h5>To have Elementary/Middle school STEM events, mentorships, and program:</h5>
              <h5>To become a partnered high school chapter:</h5>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Card.Group centered itemsPerRow={1.1}>
              <Card
                image={"https://shpeuf.s3.amazonaws.com/public/eboard/VPExternal"}
                header="Malena Gonzales Fernandez"
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
                image={"https://shpeuf.s3.amazonaws.com/public/shpejr/shpeJrChair.jpeg"}
                header="Camille Grimaldi"
                meta="SHPE JR Chair"
                extra={contact("jrchair.shpeuf@gmail.com")}   
              />
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default SJrContact;