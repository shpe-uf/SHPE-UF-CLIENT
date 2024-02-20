import React from "react"
import {
  Container,
  Grid,
} from "semantic-ui-react";
import { Media } from "../Media";
import JrEventModal from "./JrEventModal";
import JrSlideshow from "./JrSlideshow";
import { Breadcrumb } from "react-bootstrap";

const slide_1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-slide-1.JPG'
const slide_2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-slide-2.JPG'
const slide_3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-slide-3.JPG'
const modal_1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-modal-1.JPG'
const modal_2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-modal-2.JPG'
const modal_3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-modal-3.JPG'
const modal_4 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-modal-4.JPG'
const modal_5 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-modal-5.JPG'
const slideDeck = [
  slide_1,
  slide_2,
  slide_3
];

const event1 = (
  <div>
       Annual 2-day event hosted at UF where we bring students from various different high schools across Florida
        to explore UF, its engineering programs, and learn more about SHPE. Activities Include: <br/>
       <br/>
       <li>UF Campus Tours<br/></li>
       <li>Research Lab Tours and Presentation<br/> </li>
       <li>Interactive STEM Challenges <br/></li>
       <li>College panel with SHPE UF students to ask about advice, tips, and most important things to expect in a student’s college life. <br/></li>
       <li>Engineering Majors Fair to speak with student representatives from diffrent majors and learn about what they each do <br/></li>
       <li>Social events to meet, interact, and learn from current SHPE UF students<br/></li><br/>
    Students have to pay an attendance fee for the conference, but have transportation, boarding, and meals covered for during their visit. 
  </div>
);

const event2 = (
  <div>
    Mentorship program established between SHPE UF and CBHS in which SHPE members are paired with 
    CBHS students to help them navigate college planning and college apps<br/><br/>
  </div>
);

const event3 = (
  <div>
    Workshops designed by SHPE UF Jr. alongside the SHPE Jr. chapters aimed to get students more
    involved in STEM through interactive activities such as: <br/>
    <br/>
    <li>Building Bottle Rocket Launchers</li>
    <li>Scratch Programming Workshops</li>
    <li>Making Mini-Catapults</li>
  </div>
);

const event4 = (
  <div>
    <li>Assist CBHS with running their SHPE Jr. chapter by themselves</li>
    <li>Provide resources for students’ professional development such as FinanceSHPE workshops</li>
  </div>
);

function event(event, description, pic){
  return JrEventModal(event, description, pic);
}

function slideshow(images){
  return JrSlideshow(images, 5000);
}
function Events () {
  return (
    <>
      <Grid>
        <Grid.Column>
          <Grid.Row className="JrEventButton">
            {event("SHPE Region 7 Jr. Conference", event1, modal_1)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("MentorSHPE Jr.", event2, modal_2)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEM Workshops", event3, modal_3)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("SHPE Chapters", event4, modal_4)}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  )
}


const SJrHighEvent = () =>{
  return(
    <Container>
    <h1>Events</h1>
    <p>
      SHPE JR is a subset of our university
      organization that does the following loren
      ipsum dolor sit amet consecteur We host this, 
      that, that , that etc. etc. need someone to write
      an about statement
    </p>
    <div className='SJrElemMidEvent'>
      <div>
        <Media greaterThanOrEqual="computer">
          <Grid columns={2}>
            <Grid.Column width={8}>
              {Events()}
            </Grid.Column>
            <Grid.Column width={8}>
              {slideshow(slideDeck)}
            </Grid.Column>
          </Grid>
        </Media>
        <Media lessThan="computer">
          <Grid>
            <Grid.Column>
              {Events()}
            </Grid.Column>
          </Grid>
        </Media>
      </div>
    </div>
  </Container>
  );
};

export default SJrHighEvent;