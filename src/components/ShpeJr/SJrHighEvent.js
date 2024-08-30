import React from "react"
import {
  Container,
  Grid,
} from "semantic-ui-react";
import { Media } from "../../Media";
import JrEventModal from "./JrEventModal";
import JrSlideshow from "./JrSlideshow";
import { Breadcrumb } from "react-bootstrap";

const slide_1 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/shadowSHPE_slide1.JPG'
const slide_2 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/shadowSHPE_slide2.JPG'
const slide_3 = 'https://shpeuf.s3.amazonaws.com/public/shpejr/shadowSHPE_slide3.JPG'

const shadowshpe_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/shadowSHPE.JPG'
const mentorship_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/mentorship_jr.JPG'
const workshops_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/stem_workshops.JPG'
const chapters_img = 'https://shpeuf.s3.amazonaws.com/public/shpejr/chapters.JPG'

const slideDeck = [
  slide_1,
  slide_2,
  slide_3
];

const event1 = (
  <div className="SJrHighEventList">
       Annual 2-day event hosted at UF where we bring students from various different high schools across Florida
        to explore UF, its engineering programs, and learn more about SHPE. Activities Include: <br/>
       <br/>

    <ul>
       <li>UF Campus Tours</li>
       <li>Research Lab Tours and Presentation </li>
       <li>Interactive STEM Challenges </li> 
       <li>College panel with SHPE UF students to ask about advice, tips, and most important things to expect in a student’s college life </li>
       <li>Engineering Majors Fair to speak with student representatives from diffrent majors and learn about what they each do </li>
       <li>Social events to meet, interact, and learn from current SHPE UF students</li>
    </ul> <br></br>
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

const event5 = (
  <div>
    This event consists of  virtual sessions designed to provide high school students with 
    valuable information on pursuing an academic career in STEM and how to prepare for college. 
    Students will get the chance to learn about the college admission process and will receive 
    guidance on academic success and career development in STEM.
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
            {event("SHPE Region 7 Jr. Conference", event1, shadowshpe_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("MentorSHPE Jr.", event2, mentorship_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEM Workshops", event3, workshops_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("SHPE Chapters", event4, chapters_img)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("SHPE Jr. Virtual Info", event5, chapters_img)}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  )
}


const SJrHighEvent = () =>{
  return(
    <Container>
    <h1>High School Events</h1>
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