import React from "react";
import { Container, Grid, Image, ImageGroup, Modal, Button, Icon, CardContent, CardHeader } from "semantic-ui-react";
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
      <Grid style={{width: "105%"}}>
          <h2 style={{color: "#d4af37"}}>Gold Partners</h2>
            <Grid.Row style={{gap: "30px", width: "80% !important", filter: "drop-shadow(1px 14px 20px #d4af37)"}}>
              <ImageGroup size="small">
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Capital-One.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Edwards-Lifesciences.png"/>
              </ImageGroup>
            </Grid.Row>
          <h2 style={{color: "silver"}}>Silver partners</h2>
          <Grid.Row style={{gap: "30px", filter: "drop-shadow(1px 14px 20px silver)"}}>
              <ImageGroup size="small">
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Blue-Origin.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Bank-of-America.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/CDM-Smith.jpg"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/General-Mills.jpg"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Lutron.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/kimleyHorn.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Accenture.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Bloomberg.png"/>
              <Image src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/GE-Aerospace.png"/>
              </ImageGroup>
            </Grid.Row>
          <h2 style={{color: "#CE8946"}}>Bronze partners</h2>
          <Grid.Row style={{gap: "30px", filter: "drop-shadow(1px 14px 20px #CE8946)"}}>
              <ImageGroup size="small">
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Disney.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Jane-Street.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/JP-Morgan.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/SpaceX.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Texas-Instruments.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/GE-Vernova.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Google.jpg"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/Microsoft.jpg"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/UKG.png"/>
              <Image size="medium" src="https://shpeuf.s3.us-east-1.amazonaws.com/public/sponsors/LJA.jpg"/>
              </ImageGroup>
            </Grid.Row>
      </Grid>
      <br/>
      <br/>
        <div align="center">
            <h4 className = "accent-2-text"> Interested in becoming a partner?</h4>
            <Button as={Link} to="mailto:vpcorporate.shpeuf@gmail.com">Contact us</Button>
        </div>
      </Container>
    </div>
  );
}

export default Sponsors;
