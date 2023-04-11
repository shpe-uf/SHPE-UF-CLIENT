import React from 'react'
import { Card, Modal, Grid, Button, Icon, Segment } from "semantic-ui-react";
import external from "../assets/images/eboard/external.jpeg";


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
      <div className='contact-info'>
        <div className='left-align'>
          <p>Interested in becoming a SHPE UF jr chapter?</p>
        </div>
        <div className='right-align'>
          <p><strong style={{fontSize: 'larger', color: 'black'}}>Contact SHPE JR Chair</strong></p>
        </div>
      </div>
      <div className='contact-info'>
        <div className='left-align'>
          <p>Have questions about outreach and STEM opportunities?</p>
          <p>To have Elementary/Middle school STEM events, mentorships, and program:</p>
          <p>To become a partnered high school chapter:</p>
        </div>
        <div className='right-align'>
          <p><strong style={{fontSize: 'larger', color: 'black'}}>Contact VP of External Affairs</strong></p>
        </div>
      </div>
      <>
      <Card.Group centered itemsPerRow={3}>
      <Card
        image={"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU="}
        header="Malena Gonzales Fernandez"
        meta="SHPE JR Chair"
        extra={contact("jrchair.shpeuf@gmail.com")}  
      />
      <Card
        image={external}
        header="Isabella Eby"
        meta="VP of External Affairs"
        extra={contact("vpexternal.shpeuf@gmail.com")}  
      />
      </Card.Group>
      </>
    </div>
  );
};


export default SJrContact;