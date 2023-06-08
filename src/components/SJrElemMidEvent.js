// import React, { useState, useEffect } from 'react'
import React from 'react'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import {
  Container,
  Grid,
  Button,
  Image,
  Responsive
} from "semantic-ui-react";
import JrEventModal from './JrEventModal';

import president from "../assets/images/eboard/president.jpeg";
import graduate from "../assets/images/eboard/graduate.jpeg";
import secretary from "../assets/images/eboard/secretary.jpeg";

function event(event, description, pic){
  return JrEventModal(event, description, pic);
}

const event1 = (
  <div>
    This is filler text for event 1.
  </div>
);

const event2 = (
  <div>
    This is filler text for event 2.
  </div>
);

const event3 = (
  <div>
    This is filler text for event 3.
  </div>
);

const event4 = (
  <div>
    This is filler text for event 4.
  </div>
);

const event5 = (
  <div>
    This is filler text for event 5.
  </div>
);

function Events () {
  return (
    <>
      <Grid>
        <Grid.Column>
          <Grid.Row className="JrEventButton">
            {event("STEM DAY", event1, president)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("MENTORSHIP PROGRAM", event2, graduate)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("ROBOTICS TEAM", event3, secretary)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEAM NIGHT", event4, president)}
          </Grid.Row>
          <Grid.Row className="JrEventButton">
            {event("STEAM CARNIVAL", event5, graduate)}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  )
}
// const imagesLol = [president, graduate, secretary];

// function Slideshow ( images, interval = 5000 )  {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const slideshowInterval = setInterval(() => {
//       setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % images.length);
//     }, interval);

//     return () => clearInterval(slideshowInterval);
//   }, [images.length, interval]);

//   return (
//     <div style={{
//       width: 1rem,
//       height: 1rem,
//     }}>
//       <img src={images[currentImageIndex]} alt="slideshow" />
//     </div>
//   );
// };


const SJrElemMidEvent = () =>{
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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Responsive minWidth={992}>
            <Grid columns={2}>
              <Grid.Column width={8}>
                {Events()}
              </Grid.Column>
              <Grid.Column width={8}>
                {/* <Image src='https://via.placeholder.com/600x600' /> */}
                {/* {Slideshow(imagesLol)} */}
                <div className='JrEventSlides'>
                  <div className='slider'>
                    <div className='slides'>
                      <input type="radio" name="radio-btn" id="radio1"/>
                      <input type="radio" name="radio-btn" id="radio2"/>
                      <input type="radio" name="radio-btn" id="radio3"/>

                      <div className="firstslide">
                        <Image src={president}/>
                      </div>
                      <div className="slide">
                        <Image src={graduate}/>
                      </div>
                      <div className="slide">
                        <Image src={secretary}/>
                      </div>
                      <div className='navigation-auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                        <div className='auto-btn3'></div>
                      </div>
                    </div>
                    <div className='navigation-manual'>
                      <label for="radio1" className="manual-btn"></label>
                      <label for="radio2" className="manual-btn"></label>
                      <label for="radio3" className="manual-btn"></label>
                    </div>
                  </div>
                </div>
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