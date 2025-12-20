import React from "react";
import { Container, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./styles/Alumni.css";

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
                <h1>
                  HELLO SHPE ALUMNI 
                </h1>
                <p>
                  Thank you for your interest in helping your fellow undergraduate SHPEitos. By submitting the information on this list you approve to have your profile made public to our current members. We will use this list to connect you with us and foster a closer relationship. Our SHPEitos will be able to see the career path you chose and follow in your footsteps. We will use the Alumni Directory for networking opportunities, and as an open line of communication on both sides. As a familia we celebrate each other successes and would love to have you be a part of it too.
                </p>
                <p>
                  Welcome Back to SHPE UF.
                </p>
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
