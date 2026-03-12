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
                Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                In id cursus mi pretium tellus duis convallis. Tempus leo eu 
                aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus 
                nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia 
                integer nunc posuere. Ut hendrerit semper vel class aptent taciti 
                sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque 
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus 
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam 
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum 
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora 
                torquent per conubia nostra inceptos himenaeos.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque 
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus 
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam 
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum 
                egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. 
                Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora 
                torquent per conubia nostra inceptos himenaeos.
              </p>
            </Grid.Column>
          </Grid.Row>
        
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
        </Grid>
      </Container>

    </div>
  );
}

export default Leadership;
