import React from "react";
import { Container, Grid, Image, Card, Modal, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";


import sponsors from "../../assets/images/sponsors"

function Sponsors() {
  return (
    <div className="body">
      <div className="masthead masthead-sponsors">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">Partners</h1>
          </Container>
        </div>
      </div>

      {/* Temporary while partner list updates for 24-25 school year */}

      <Container>
      <Grid>
          <Grid.Row>
            <Grid.Column>
                <div align="center">

                <h2 className="no-margin">24-25 Partners Coming Soon</h2>

                <h4 className = "accent-2-text"> Interested in becoming a partner?</h4>

                <Button as={Link} to="mailto:vpcorporate.shpeuf@gmail.com">Contact us</Button>
                
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
        
        {/*
        <Grid stackable columns={3}>
          <h2 className="no-margin">Platinum Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                style={{width: '960px', height: 'auto'}}
                src={sponsors.capitalOne}
                href="https://www.capitalone.com/"
                target="_blank"
                className="sponsor platinum capitalOne"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        

        
        <Grid stackable columns={3}>
          <h2 className="no-margin">Gold Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.bankOfAmerica}
                href="https://www.bankofamerica.com/"
                target="_blank"
                className="sponsor gold bofa"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
        <Grid stackable columns={4}>
          <h2 className="no-margin">Silver Level</h2>
          <Grid.Row className="sponsor-padding">
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.accenture}
                href="http://accenture.com"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.cap}
                href="https://www.capfla.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.northrop}
                href="https://www.northropgrumman.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.lockheed}
                href="https://www.lockheedmartin.com/"
                target="_blank"
                className="sponsor silver"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
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
                src={sponsors.geAviation}
                href="http://geaerospace.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.geHealthcare}
                href="http://gehealthcare.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.geVernova}
                href="http://gevernova.com"
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
                src={sponsors.disney}
                href="http://disney.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.exxonMobil}
                href="https://www.exxonmobil.com/"
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
                src={sponsors.micron}
                href="https://www.micron.com/"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.edwardsLifesciences}
                href="http://edwards.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.jane}
                href="http://janestreet.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.johnDeere}
                href="http://johndeere.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.kimleyHorn}
                href="http://kimleyhorn.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.kpmg}
                href="http://kpmg.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.l3harris}
                href="http://l3harris.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.png}
                href="http://us.pg.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.medtronic}
                href="http://medtronic.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.trinity}
                href="http://trinityconsultants.com"
                target="_blank"
                className="sponsor bronze"
              />
            </Grid.Column>
            <Grid.Column className="card-team">
              <Image
                fluid
                src={sponsors.turner}
                href="http://turnerconstruction.com"
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
        
        */}
      </Container>
    </div>
  );
}

export default Sponsors;
