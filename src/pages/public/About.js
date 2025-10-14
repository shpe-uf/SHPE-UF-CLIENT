import React, {useEffect} from "react";
import { Container, Grid, Image, Segment, Header } from "semantic-ui-react";

import polygonImage from '../../assets/images/Polygon-image.png';
import introGears from '../../assets/images/intro-panel-gears.svg';
import wavyMaskGroup from '../../assets/images/Wavy Mask group.svg';
import image6 from '../../assets/images/image 6.png';
import rectangle124 from '../../assets/images/Rectangle 124.png';
import rectangle125 from '../../assets/images/Rectangle 125.png';
import rectangle126 from '../../assets/images/Rectangle 126.png';

const About = () => {
  const numberOfHexagons = 17;
  const hexagonItems = Array.from({ length: numberOfHexagons });

  return (
    <Container fluid className="about-us-container">
      <Segment basic className="intro-section">
        <Segment basic className="main">
          <Segment basic className="hex-container">
            {hexagonItems.map((_, index) => (
              <div
                key={`hex-${index}`}
                className="hex"
                style={{ backgroundImage: `url(${polygonImage})` }}
              ></div>
            ))}
          </Segment>
        </Segment>
        <Segment basic className="intro-text">
          <Segment basic className="intro-header">
            <h1 style={{ color: 'black' }}>
              Empowering Hispanic<br/>
              Students to Thrive in<br/>
              <span style={{ color: '#FD652F' }}>STEM</span>
            </h1>
          </Segment>
          <Segment basic className="intro-blurb">
            <p>SHPE UF supports and empowers <br /> Hispanic students in STEM
              <br /> through resources, mentorship, <br /> and opportunities to reach their <br /> full potential.</p>
          </Segment>
        </Segment>
      </Segment>

      <Segment basic className="mission-section">
        <Segment basic className="mission-header-container">
          <h1><i>OUR MISSION</i></h1>
        </Segment>
        <Grid className="mission-wrapper" stackable verticalAlign="middle">
          <Grid.Column width={7} className="mission-image-layer">
            <Image
              className="h-image"
              id="img-5"
              src={wavyMaskGroup}
              alt="Abstract wavy graphic"
              fluid
            />
            <Image
              className="h-image"
              id="img-4"
              src={image6}
              alt="Group of students or professionals"
              fluid
            />
          </Grid.Column>

          <Grid.Column width={9} className="mission-container">
            <Container fluid style={{ padding: '2rem' }}>
              <p className="desc">
                At SHPE, our mission is to empower the Hispanic community by providing
                the tools and support needed to succeed in STEM. We foster growth,
                connection, and leadership that help our members make an impact in their
                careers and the world.
              </p>
            </Container>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment basic className="history-section">
        <Segment basic className="header-container">
          <h1><i>OUR HISTORY</i></h1>
        </Segment>
        <Segment basic className="about-section">
          <Segment basic className="about-container">
            <p className="desc">
              Founded in 1974 by a group of engineers in Los Angeles, SHPE aimed to create a national
              network of Hispanic engineers who could serve as role models and mentors for the community.
              <br /><br />
              What started with two student chapters has grown into a nationwide network, with chapters
              across the U.S. and internationally, including our own here at UF. SHPE continues to empower future
              generations of Hispanic leaders in STEM.
            </p>
          </Segment>
          <Segment basic className="image-container">
            <img className="h-image" id="img-1" src={rectangle124} alt="Historical SHPE event or members 1" />
            <img className="h-image" id="img-2" src={rectangle125} alt="Historical SHPE event or members 2" />
            <img className="h-image" id="img-3" src={rectangle126} alt="Historical SHPE event or members 3" />
          </Segment>
        </Segment>
      </Segment>

      <Segment className="vision-container">
        <Segment basic className="vision-header-container">
          <h1><i>OUR VISION</i></h1>
        </Segment>
        <Segment basic text className="vision-section-blurb">
          <p className="desc">
            At SHPE UF, we strive to cultivate the next generation of Hispanic
            STEM professionals. Our vision is to create an inclusive environment
            where students can thrive academically, professionally, and personally.
            By offering leadership opportunities, mentorship, and community support,
            we are shaping the future of Hispanic leaders in STEM at the University
            of Florida and beyond.
          </p>
        </Segment>
      </Segment>

      <Segment basic className="join-section">
        <Segment basic className="join-header-container">
          <h1><i>JOIN THE FAMILIA</i></h1>
        </Segment>
        <Segment basic text className="join-section-blurb">
          <p className="desc">
            At SHPE UF, we’re more than just a student
            organization—we’re a family. By joining, you'll gain
            access to mentorship, leadership development,
            networking, and the resources needed to succeed in
            STEM. We're here to support your growth and guide
            you every step of the way.
          </p>
        </Segment>
      </Segment>
    </Container>
  );
};

export default About;