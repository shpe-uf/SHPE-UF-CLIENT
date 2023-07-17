import React from "react";
import { Container, Grid, Card, Responsive, Menu, MenuItem, Divider } from "semantic-ui-react";

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
        <Responsive maxWidth={991}>
          <Card.Group itemsPerRow={4} centered doubling>
            <ResourcesCards />
          </Card.Group>
        </Responsive>
        </Grid>
      <Container>
        <Responsive minWidth={992}>
          <Card.Group itemsPerRow={4} centered doubling>
            <ResourcesCards />
          </Card.Group>
        </Responsive>
      </Container>
    </div>
  );
}

export default Resources;