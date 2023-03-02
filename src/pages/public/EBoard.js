import React from "react";
import { Container, Card, Segment } from "semantic-ui-react";

import EBoardCards from "../../components/EBoardCards";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
    breakpoints: {
      mobile: 320,
      computer: 992,
    }
  });
  const mediaStyles = AppMedia.createMediaStyle();
  const { Media, MediaContextProvider } = AppMedia;

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

      <style>{mediaStyles}</style>

      <Container>
        <MediaContextProvider>
          <Segment as={Media} at="computer">
          <Card.Group itemsPerRow={3}>
            <EBoardCards />
          </Card.Group>
          </Segment>
        </MediaContextProvider>
        <MediaContextProvider>
          <Segment as={Media} at="mobile">
          <Card.Group itemsPerRow={1}>
            <EBoardCards />
          </Card.Group>
          </Segment>
        </MediaContextProvider>
      </Container>
    </div>
  );
}

export default EBoard;
