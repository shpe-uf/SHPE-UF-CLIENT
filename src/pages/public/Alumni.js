import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Alumni() {
  return (
    <div className="body">
      <div className="masthead masthead-alumni">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Alumni</h1>
          </Container>
        </div>
      </div>

      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div align="center">
                <Button as={Link} to="/register/alumni">Join our Alumni ListServ</Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Alumni;
