import React from "react";
import { Card, Container } from "semantic-ui-react";
import { Media } from "../../Media";
import UIUXTeamCards from "./UIUXTeamCards";

const UIUXTeam = () => {
  return (
    <div className="UIUXTeam">
      <h2>UI/UX Team</h2>
      <br></br>
      <Container>
        <Media greaterThanOrEqual="computer">
          <Card.Group itemsPerRow={3} centered>
            <UIUXTeamCards />
          </Card.Group>
        </Media>
        <Media lessThan="computer">
          <Card.Group itemsPerRow={1}>
            <UIUXTeamCards />
          </Card.Group>
        </Media>
      </Container>
    </div>
  );
};

export default UIUXTeam;
