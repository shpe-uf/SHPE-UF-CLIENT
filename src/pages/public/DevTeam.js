import React from "react";
import { Container, Card } from "semantic-ui-react";
import { Media } from "../../Media";
import DevTeamCards from "../../components/DevTeamCards";

function DevTeam() {
  return (
    <div className="body">
      <div className="masthead masthead-team">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Development Team</h1>
          </Container>
        </div>
      </div>

      <Container>
        <Media greaterThanOrEqual="computer">
          <Card.Group itemsPerRow={3}>
            <DevTeamCards />
          </Card.Group>
        </Media>
        <Media lessThan="computer">
          <Card.Group itemsPerRow={1}>
            <DevTeamCards />``
          </Card.Group>
        </Media>
      </Container>
    </div>
  );
}

export default DevTeam;
