import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

import accenture from "../../assets/images/sponsors/accenture-min.png";
import amex from "../../assets/images/sponsors/amex-min.png";
import busch from "../../assets/images/sponsors/busch-min.jpg";
import capitalOne from "../../assets/images/sponsors/capitalOne-min.jpg";
import ch2m from "../../assets/images/sponsors/ch2m-min.png";
import chevron from "../../assets/images/sponsors/chevron-min.png";
import cummins from "../../assets/images/sponsors/cummins-min.jpg";
import deloitte from "../../assets/images/sponsors/deloitte-min.jpg";
import edwards from "../../assets/images/sponsors/edwards-min.jpg";
import exxon from "../../assets/images/sponsors/exxon-min.png";
import facebook from "../../assets/images/sponsors/facebook-min.png";
import ge from "../../assets/images/sponsors/ge-min.png";
import geAppliances from "../../assets/images/sponsors/geAppliances-min.png";
import google from "../../assets/images/sponsors/google-min.jpg";
import harris from "../../assets/images/sponsors/harris-min.png";
import ibm from "../../assets/images/sponsors/ibm-min.png";
import intel from "../../assets/images/sponsors/intel-min.jpg";
import kpmg from "../../assets/images/sponsors/kpmg-min.png";
import lincoln from "../../assets/images/sponsors/lincoln-min.png";
import lutron from "../../assets/images/sponsors/lutron-min.png";
import michelin from "../../assets/images/sponsors/michelin-min.jpg";
import micron from "../../assets/images/sponsors/micron-min.jpg";
import mosaic from "../../assets/images/sponsors/mosaic-min.png";
import oneSubSea from "../../assets/images/sponsors/oneSubSea-min.png";
import osiSoft from "../../assets/images/sponsors/osiSoft-min.png";
import png from "../../assets/images/sponsors/png-min.png";
import pepsico from "../../assets/images/sponsors/pepsico-min.jpg";
import southern from "../../assets/images/sponsors/southern-min.jpg";
import trinity from "../../assets/images/sponsors/trinity-min.jpg";
import visa from "../../assets/images/sponsors/visa-min.png";

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
        {/* PLATINUM SPONSORS */}
        <Grid stackable columns={3}>
          <h2 className="no-margin">Platinum Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                src={chevron}
                href="http://chevron.com"
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
                src={exxon}
                href="https://corporate.exxonmobil.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={facebook}
                href="http://facebook.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={google}
                href="http://google.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={harris}
                href="http://harris.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={micron}
                href="http://micron.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={mosaic}
                href="http://www.mosaicco.com"
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
                src={visa}
                href="http://visa.com"
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
                src={accenture}
                href="http://accenture.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
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
                src={busch}
                href="http://anheuser-busch.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={capitalOne}
                href="http://capitalone.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={ch2m}
                href="http://www.jacobs.com"
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
                src={deloitte}
                href="https://www2.deloitte.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={edwards}
                href="http://edwards.com"
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
                src={ibm}
                href="http://ibm.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={intel}
                href="http://intel.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={kpmg}
                href="http://kpmg.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={lincoln}
                href="https://www.lincolnelectric.com/"
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
            <Grid.Column className="card-team">
              <Image
                fluid
                src={michelin}
                href="http://michelin.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={oneSubSea}
                href="http://onesubsea.com"
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
                src={pepsico}
                href="http://pepsico.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
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
                src={trinity}
                href="http://trinityconsultants.com"
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
