import React from "react";
import { Container, Card } from "semantic-ui-react";
import { Media } from "../../Media";
import EBoardCards from "../../components/EBoardCards";

function EBoard() {
  return (
    <div className="body">
      <div className="masthead masthead-eboard">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Executive Board</h1>
          </Container>
        </div>
      </div>

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
    </div>
  );
}

export default EBoard;
