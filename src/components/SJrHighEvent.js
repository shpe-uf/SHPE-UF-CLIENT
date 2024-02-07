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
    SHPE Region 7 Jr Conference is a two-day event hosted by SHPE UF where students across Florida and SHPE Region 7 Jr chapters can attend to learn about:<br/>
       <li>UF Campus<br/></li>
       <li> Lab Research opportunities during undergraduate career<br/> </li>
      <li>Interactive STEM Challenge <br/></li>
       <li>College panel with SHPE UF students to ask about advice, tips, and most important things to expect in a student’s college life. <br/></li>
       <li>Photo opportunities<br/></li>
       <li>How to apply to college, scholarships, and tips to succeed during the application process. <br/></li>
       <li>Interactive bowling social to meet other students and current SHPE UF members <br/></li><br/>
    Students have to pay an attendance fee for the conference, but have transportation, boarding, and meals covered for during their visit. 





  </div>
);

const event2 = (
  <div>
    Students are paired with University of Florida SHPE Engineering students to aid in class-work,
    discuss hobbies, and join in interactive activities during lunch meeting times.<br/><br/>

    Mentorship requirements and meeting days can be adjusted based on school and goals the teacher
    would like to attain through the mentorship program. <br/><br/>

    Mentorship program will also have bi-weekly challenges for the mentor-mentee pairs to complete 
    and win points for an end of semester prize! 
  </div>
);

const event3 = (
  <div>
    Our SHPE High School directors hand pick events for each STEM day oriented towards in class topics 
    and varying engineering fields to create an interactive, yet informative, environment for students. 
    Hands-on experience for each student is fostered through the multiple activities administered throughout 
    the duration of the event. 
  </div>
);

const event4 = (
  <div>
    STEM Fair is a yearly event aimed at providing students with a wide variety of activities to learn about 
    multiple engineering fields in a span of two hours while conducting an engineering challenge. 

  </div>
);

const event5 = (
  <div>
    STEM Carnival is an event hosted by CW Norton 
    Elementary aimed at having a fun carnival experience 
    for the students, while creating interactive activities 
    for students to enjoy a field day with their families. 
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
            {event("SHPE Region 7 Junior Conference", event1, modal_1)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("Mentorship", event2, modal_2)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEM Activities", event3, modal_3)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEM Fairs", event4, modal_4)}
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