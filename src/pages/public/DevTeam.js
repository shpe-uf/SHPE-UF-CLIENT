import React from "react";
import { Container, Card, Responsive } from "semantic-ui-react";

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
        <Responsive {...Responsive.onlyComputer}>
          <Card.Group itemsPerRow={5}>
            <DevTeamCards />
          </Card.Group>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Card.Group itemsPerRow={3}>
            <DevTeamCards />
          </Card.Group>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Card.Group itemsPerRow={1}>
            <DevTeamCards />
          </Card.Group>
        </Responsive>
      </Container>
    </div>
  );
}

export default DevTeam;
