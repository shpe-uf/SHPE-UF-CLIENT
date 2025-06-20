import React from "react"
import {
  Container,
  Grid,
} from "semantic-ui-react";
import { Media } from "../../Media";
import JrEventModal from "./JrEventModal";
import JrSlideshow from "./JrSlideshow";

const slide_1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-slide-1.JPG'
const slide_2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-slide-2.JPG'
const slide_3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/elemid-slide-3.JPG'

const stem_days_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/stem_days.JPG'
const mentorship_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/mentorship_jrjr.jpg'
const robotics_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/robotics.JPG'
const steam_night_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/steam_night.JPG'
const stem_carnival_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/stem_carnival.jpg'

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
    Our SHPE Jr Elementary/Middle school director hand-picks 
    events for each STEM day oriented towards varying 
    engineering fields to create an interactive, 
    yet informative, environment for students. Students get
    hands-on experience in multiple engineering fields
    through activities like:
    
    <br></br><br></br>
    <li>Building Mini Catapults</li>
    <li>Thanksgiving "turkey trap"</li>
    <li>Extracting Strawberry DNA</li>
    <li>Building Mini Satellites</li>
    <li>Oil Spills Activity</li>

  </div>
);

const event2 = (
  <div>
    Year-long mentorship program at Idylwild Elementary School
     in which we pair SHPE members with an elementary school 
     student to serve as guides and role models for the children
  </div>
);

const event3 = (
  <div>
    Assist students who are part of the Robotics club at 
    Idylwild Elementary School with designing and building 
    their robotics projects
  </div>
);

const event4 = (
  <div>
    STEAM Night is a yearly event hosted by CW Norton 
    Elementary school aimed at providing students with a wide 
    variety of activities (4-5) to learn about multiple 
    engineering fields in a span of two hours.
  </div>
);

const event5 = (
  <div>
    STEM Carnival is an event hosted by Idywild Elementary aimed at having a fun carnival experience 
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
            {event("STEM Days", event1, stem_days_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("Mentorship Program", event2, mentorship_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("Robotics Program", event3, robotics_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEAM Night", event4, steam_night_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEM Carnival", event5, stem_carnival_img)}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  )
}

const SJrElemMidEvent = () => {
  return(
    <Container>
      <h1>K-8 Events</h1>
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

export default SJrElemMidEvent;
