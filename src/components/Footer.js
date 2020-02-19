import React from "react";
import { Container, Grid, Icon, Responsive } from "semantic-ui-react";

function Footer() {
  return (
    <footer>
      <Responsive minWidth={992}>
        <Container>
          <Grid>
            <Grid.Row className="no-padding">
              <Grid.Column width={8}>
                <a
                  href="https://www.facebook.com/groups/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="instagram" />
                </a>
                <a
                  href="https://twitter.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="twitter" />
                </a>
              </Grid.Column>
              <Grid.Column width={8} textAlign="right">
                <p>© Copyright 2020. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>

      <Responsive maxWidth={991}>
        <Container>
          <Grid>
            <Grid.Row className="row-footer-mobile">
              <Grid.Column textAlign="center" width={16}>
                <a
                  href="https://www.facebook.com/groups/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="instagram" />
                </a>
                <a
                  href="https://twitter.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="twitter" />
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="row-footer-mobile">
              <Grid.Column textAlign="center" width={16}>
                <p>© Copyright 2020. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </footer>
  );
}

export default Footer;
