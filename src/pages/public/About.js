
import React, {useEffect} from "react";
import { Container, Grid, Image } from "semantic-ui-react";


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
    <div className="about-us-container">
      <div className="intro-section">
        <div className="main">
          <div className="hex-container">
            {hexagonItems.map((_, index) => (
              <div
                key={`hex-${index}`}
                className="hex"
                style={{ backgroundImage: `url(${polygonImage})` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="intro-text">
          <div className="intro-section-header">
            <h1 className="intro-header">Empowering Hispanic <br /> Students to Thrive in <br /> <span style={{ color: '#FD652F' }}>STEM</span></h1>
          </div>
          <div className="intro-blurb">
            <p>SHPE UF supports and empowers <br /> Hispanic students in STEM
              <br /> through resources, mentorship, <br /> and opportunities to reach their <br /> full potential.</p>
          </div>
        </div>
      </div>

      {/*  <img id="intro-gears" src={introGears} alt="Decorative gears graphic" /> */}

      <div className="mission-section">
        <div className="mission-header-container">
          <h1><i>OUR MISSION</i></h1>
        </div>
        <div className="mission-wrapper">
          <div className="mission-image-layer">
            <img className="h-image" id="img-5" src={wavyMaskGroup} alt="Abstract wavy graphic" />
            <img className="h-image" id="img-4" src={image6} alt="Group of students or professionals" />
          </div>
          <div className="mission-container">
            <p className="desc">
              At SHPE, our mission is to empower the Hispanic community by providing
              the tools and support needed to succeed in STEM. We foster growth, connection,
              and leadership that help our members make an impact in their careers and the world.
            </p>
          </div>
        </div>
      </div>

      <div className="history-section">
        <div className="header-container">
          <div style={{ position: 'relative' }}>
            <h1><i>OUR HISTORY</i></h1>
          </div>
        </div>
        <div className="about-section">
          <div className="about-container">
            <p className="desc">
              Founded in 1974 by a group of engineers in Los Angeles, SHPE aimed to create a national
              network of Hispanic engineers who could serve as role models and mentors for the community.
              <br /><br />
              What started with two student chapters has grown into a nationwide network, with chapters
              across the U.S. and internationally, including our own here at UF. SHPE continues to empower future
              generations of Hispanic leaders in STEM.
            </p>
          </div>
          <div className="image-container">
            <img className="h-image" id="img-1" src={rectangle124} alt="Historical SHPE event or members 1" />
            <img className="h-image" id="img-2" src={rectangle125} alt="Historical SHPE event or members 2" />
            <img className="h-image" id="img-3" src={rectangle126} alt="Historical SHPE event or members 3" />
          </div>
        </div>
      </div>

      <div className="vision-container">
        <div className="vision-header-container">
          <h1><i>OUR VISION</i></h1>
        </div>
        <div className="centering-vision">
          <div className="vision-section-blurb">
            <p className="desc">
              At SHPE UF, we strive to cultivate the next generation of Hispanic
              STEM professionals. Our vision is to create an inclusive
              environment where students can thrive academically,
              professionally, and personally. By offering leadership
              opportunities, mentorship, and community support, we are
              shaping the future of Hispanic leaders in STEM at the University
              of Florida and beyond.
            </p>
          </div>
        </div>
      </div>

      <div className="join-section">
        <div className="join-header-container">
          <h1><i>JOIN THE FAMILIA</i></h1>
        </div>
        <div className="center-join">
          <div className="join-section-blurb">
            <p className="desc">
              At SHPE UF, we’re more than just a student
              organization—we’re a family. By joining, you'll gain
              access to mentorship, leadership development,
              networking, and the resources needed to succeed in
              STEM. We're here to support your growth and guide
              you every step of the way.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
