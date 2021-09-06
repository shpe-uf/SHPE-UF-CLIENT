import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import accenture from "../../assets/images/sponsors/accenture-min.png";
import amex from "../../assets/images/sponsors/amex-min.png";
import cap from "../../assets/images/sponsors/cap.png";
import cummins from "../../assets/images/sponsors/cummins-min.jpg";
import facebook from "../../assets/images/sponsors/facebook-min.png";
import ge from "../../assets/images/sponsors/ge-min.png";
import geAppliances from "../../assets/images/sponsors/geAppliances-min.png";
import jane from "../../assets/images/sponsors/janestreet.png";
import kpmg from "../../assets/images/sponsors/kpmg-min.png";
import l3harris from "../../assets/images/sponsors/l3harris.png";
import lutron from "../../assets/images/sponsors/lutron-min.png";
import michelin from "../../assets/images/sponsors/michelin-min.jpg";
import osiSoft from "../../assets/images/sponsors/osiSoft-min.png";
import png from "../../assets/images/sponsors/png-min.png";
import pepsico from "../../assets/images/sponsors/pepsico-min.jpg";
import southern from "../../assets/images/sponsors/southern-min.jpg";
import slb from "../../assets/images/sponsors/schlumberger.jpg";
import truist from "../../assets/images/sponsors/truist.png";

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
                src={cap}
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
                src={kpmg}
                href="http://kpmg.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={png}
                href="https://us.pg.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={slb}
                href="https://www.slb.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={jane}
                href="https://www.janestreet.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={truist}
                href="https://www.truist.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={l3harris}
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
                src={geAppliances}
                href="http://geappliances.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={facebook}
                href="http://facebook.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            {/*general mills*/}
            <Grid.Column className="card-team">
              <Image
                fluid
                src={accenture}
                href="http://accenture.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            {/*texas instruments*/}
            {/*bloomberg*/}
            <Grid.Column className="card-team">
              <Image
                fluid
                src={southern}
                href="http://southerncompany.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={lutron}
                href="http://lutron.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            {/*kiewit*/}
            <Grid.Column className="card-team">
              <Image
                fluid
                src={pepsico}
                href="http://pepsico.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={cummins}
                href="http://cummins.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={osiSoft}
                href="http://osisoft.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={ge}
                href="http://ge.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            {/*micron*/}
            <Grid.Column className="card-team">
              <Image
                fluid
                src={amex}
                href="http://americanexpress.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={michelin}
                href="http://michelin.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            {/*CDMSmith*/}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Sponsors;
