import React from "react";
import { Container, Grid, Card, Divider } from "semantic-ui-react";
import { Media } from "../../Media"
import ResourcesCards from "../../components/ResourcesCards"
import ResourcesMenu from "../../components/ResourcesMenu";
import "./styles/Resources.css";

function Resources() {

  return (
    <div className="body">
      <div className="masthead masthead-resources">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Resources</h1>
          </Container>
        </div>
      </div>
      <Grid>
            <Grid.Row centered>
              <ResourcesMenu/>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
            <Divider horizontal><h2>Additional Resources</h2></Divider>
            </Grid.Column>
            </Grid.Row>
          <Card.Group itemsPerRow={4} centered doubling>
            <ResourcesCards />
          </Card.Group>
        </Grid>
    </div>
  );
}

export default Resources;