import React from "react";
import { Container, Grid, Image, Card } from "semantic-ui-react";
import { Media } from "../../Media";
import EBoardCards from "../../components/EBoardCards";

// import {about1, about2, about3} from "../../assets/images/about"
import "./styles/Leadership.css";

function Leadership() {
  return (
    <div className="body">
      <div className="masthead masthead-leadership">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Leadership</h1>
          </Container>
        </div>
      </div>

      <Container>
        <Grid>
        
          <Grid.Row>
            <Grid.Column width={16}>
            <Container>
              <Media greaterThanOrEqual="computer">
                <Card.Group itemsPerRow={3}>
                  <EBoardCards />
                </Card.Group>
              </Media>
              <Media lessThan="computer">
                <Card.Group itemsPerRow={1}>
                  <EBoardCards />
                </Card.Group>
              </Media>
            </Container>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={6}>
              <Card centered>
                <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/leadership/Dr.+Cruz.jpg" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Dr. Laura Cruz Castro</Card.Header>
                  <Card.Meta>SHPE UF Faculty Advisor</Card.Meta>   
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <h5 className="leadership-title">Faculty Advisor</h5>
              <p>
                Dr. Laura Cruz Castro is a faculty member at the University of Florida whose work focuses on engineering education, student success, and 
                expanding opportunities for underrepresented students in STEM. Through her teaching and mentorship, she is dedicated to supporting the 
                academic and professional development of engineering students and fostering inclusive learning environments. 
                She has served as the SHPE UF Faculty Advisor for the past two years, where she has been a strong supporter of the chapter’s growth and impact.


                <br />
                <br />
                As faculty advisor, Dr. Cruz Castro provides guidance and mentorship to the executive board and supports the chapter in achieving its 
                mission of empowering Hispanic engineers. 
                She works closely with student leadership to offer strategic insight, ensure organizational continuity, 
                and connect the chapter with university resources. Her mentorship helps strengthen the bridge between SHPE UF and the College of Engineering while supporting the leadership development and success of our members.
              </p>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Container>

    </div>
  );
}

export default Leadership;
