import React from "react";
import { Container, Grid, Card, Divider } from "semantic-ui-react";
import { Media } from "../../Media"
import ResourcesCards from "../../components/ResourcesCards"
import ResourcesMenu from "../../components/ResourcesMenu";

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
        <Media at="tablet">
          <Card.Group itemsPerRow={4} centered doubling>
            <ResourcesCards />
          </Card.Group>
        </Media>
        </Grid>
      <Container>
        <Media at="computer">
          <Card.Group itemsPerRow={4} centered doubling>
            <ResourcesCards />
          </Card.Group>
        </Media>
      </Container>
    </div>
  );
}

export default Resources;