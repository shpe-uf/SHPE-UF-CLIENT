import React from "react";
import { Container, Card, Responsive } from "semantic-ui-react";

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
        <Responsive minWidth={992}>
          <Card.Group itemsPerRow={3}>
            <EBoardCards />
          </Card.Group>
        </Responsive>
        <Responsive maxWidth={991}>
          <Card.Group itemsPerRow={1}>
            <EBoardCards />
          </Card.Group>
        </Responsive>
      </Container>
    </div>
  );
}

export default EBoard;
