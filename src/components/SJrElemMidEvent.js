import React from "react"
import {
  Container,
  Grid,
  Responsive,
} from "semantic-ui-react";
import JrEventModal from "./JrEventModal";
import JrSlideshow from "./JrSlideshow";

const slide_1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/temp1.JPG'
const slide_2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/temp2.JPG'
const slide_3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/temp3.JPG'

function event(event, description, pic){
  return JrEventModal(event, description, pic);
}

function slideshow(images){
  return JrSlideshow(images, 5000);
}

const slideDeck = [
  slide_1,
  slide_2,
  slide_3
];

const event1 = (
  <div>
    Our SHPE Jr Elementary/Middle school director hand picks 
    events for each STEM day oriented towards in class topics 
    and varying engineering fields to create an interactive, 
    yet informative, environment for students. Hands-on 
    experience for each student is fostered through the 
    multiple activities administered throughout the 
    duration of the event. 
  </div>
);

const event2 = (
  <div>
    Students are paired with University of Florida SHPE 
    Engineering students to aid in class-work, discuss 
    hobbies, and join in interactive activities during lunch 
    meeting times.<br/><br/>

    Mentorship requirements and meeting days can be adjusted 
    based on school and goals the teacher would like to 
    attain through the mentorship program.
  </div>
);

const event3 = (
  <div>
    TSHPE volunteers come into existing robotics clubs at 
    school to help with design development, coding, and 
    preparation for competitions. 
  </div>
);

const event4 = (
  <div>
    STEAM Night is a yearly event hosted by CW Norton 
    Elementary school aimed at providing students a wide 
    variety of activities (4-5) to learn about multiple 
    engineering fields in a span of two hours.
  </div>
);

const event5 = (
  <div>
    Stem Carnival is an event hosted by CW Norton 
    Elementary aimed at having a fun carnival experience 
    for the students, while creating interactive activities 
    for students to enjoy a field day with their families. 
  </div>
);

function Events () {
  return (
    <>
      <Grid>
        <Grid.Column>
          <Grid.Row className="JrEventButton">
            {event("STEM Days", event1, slide_1)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("Mentorship Program", event2, slide_2)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("Robotics Program", event3, slide_3)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEAM Night", event4, slide_1)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEM Carnival", event5, slide_2)}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  )
}

const SJrElemMidEvent = () => {
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
          <Responsive minWidth={992}>
            <Grid columns={2}>
              <Grid.Column width={8}>
                {Events()}
              </Grid.Column>
              <Grid.Column width={8}>
                {slideshow(slideDeck)}
              </Grid.Column>
            </Grid>
          </Responsive>
          <Responsive maxWidth={991}>
            <Grid>
              <Grid.Column>
                {Events()}
              </Grid.Column>
            </Grid>
          </Responsive>
        </div>
      </div>
    </Container>
  );
};

export default SJrElemMidEvent;