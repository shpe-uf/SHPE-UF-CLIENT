import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import sponsors from "../../assets/images/sponsors"

function Sponsors() {
  return (
    <div className="body">
      <div className="masthead masthead-sponsors">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Sponsors</h1>
          </Container>
        </div>
      </div>

      <Container>
        {/* PLATINUM SPONSORS*/}
        <Grid stackable columns={3}>
          <h2 className="no-margin">Platinum Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.cap}
                href="https://capfla.com/"
                target="_blank"
                className="sponsor platinum chevron"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* SILVER SPONSORS */}
        <Grid stackable columns={4}>
          <h2 className="no-margin">Silver Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.kpmg}
                href="http://kpmg.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.png}
                href="https://us.pg.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.slb}
                href="https://www.slb.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.jane}
                href="https://www.janestreet.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.truist}
                href="https://www.truist.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.l3harris}
                href="https://www.l3harris.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* BRONZE SPONSORS */}
        <Grid stackable columns={5}>
          <h2 className="no-margin">Bronze Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.geAppliances}
                href="http://geappliances.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.facebook}
                href="http://facebook.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.generalmills}
                href="https://www.generalmills.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.accenture}
                href="http://accenture.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.ti}
                href="https://www.ti.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.bloomberg}
                href="https://www.bloomberg.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.southern}
                href="http://southerncompany.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.lutron}
                href="http://lutron.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.kiewit}
                href="https://www.kiewit.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.pepsico}
                href="http://pepsico.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.cummins}
                href="http://cummins.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.osiSoft}
                href="http://osisoft.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.ge}
                href="http://ge.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.micron}
                href="https://www.micron.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.amex}
                href="http://americanexpress.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.michelin}
                href="http://michelin.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.cdmsmith}
                href="https://cdmsmith.com/en/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Sponsors;
