import React from "react";
import { Grid, Image, Button, List, Divider, Container, Header, Responsive, Icon } from "semantic-ui-react";

function CorporationProfile({corporation}) {
    return(
      <>
        <Grid columns={2} stackable>
          <Grid.Row>
            {/* Left Column */}
            <Grid.Column width={6} stretched>
              <h3>{corporation.name}</h3>
              <p>"{corporation.slogan}"</p>
              <Image src={corporation.logo}></Image>
              <Divider/>
              <Responsive
                minWidth={768}
                maxWidth={999}
                as={Container}
              >
                  <Button
                    href={corporation.applyLink}
                    positive
                    floated='left'
                  >
                    <Icon name='paper plane' size='massive'/>
                  </Button>

                  <Button
                    href={corporation.newsLink}
                    color='blue'
                    floated='right'
                  >
                    <Icon name='newspaper outline' size='massive'/>
                  </Button>
              </Responsive>
              <Responsive
                minWidth={360}
                maxWidth={766}
              >
                <Button
                href={corporation.applyLink}
                icon='paper plane'
                labelPosition='right'
                positive
                content='Apply'
                // floated='left'
              />
              <Button
                href={corporation.newsLink}
                color="blue"
                icon='newspaper outline'
                labelPosition='right'
                content='News'
                floated='right'
              />                
              </Responsive>
              <Responsive
                minWidth={1000}
              >
                <Button
                href={corporation.applyLink}
                icon='paper plane'
                labelPosition='right'
                positive
                content='Apply'
                // floated='left'
              />
              <Button
                href={corporation.newsLink}
                color="blue"
                icon='newspaper outline'
                labelPosition='right'
                content='News'
                floated='right'
              />                
              </Responsive>
              {/* <Responsive
                minWidth={768}
                maxWidth={812}
                as={Button}
                color='blue'
                icon='newspaper outline'
                floated='left
                // labelPosition='left'
              /> */}
                {/* <div>
                <Button
                href={corporation.applyLink}
                icon='paper plane'
                labelPosition='right'
                positive
                content='Apply'
                // floated='left'
              />
              <Button
                href={corporation.newsLink}
                color="blue"
                icon='newspaper outline'
                labelPosition='right'
                content='News'
                floated='right'
              />
                </div> */}
              <h4>Majors</h4>
              <p>
              {
                corporation.majors &&
                corporation.majors.map((major) => (
                  major+","
                ))
              }
              </p>
              <h4>Industries</h4>
              <p>
              {
                corporation.industries &&
                corporation.industries.map((industry) => (
                  industry+","
                ))
              }
              </p>
              <h4>Additional Information</h4>
              <List>
                <List.Item>
                  <List.Icon name={corporation.academia ? "check" : "cancel"} color={corporation.academia ? "green" : "red"}/>
                  <List.Content>Academia</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.govContractor ? "check" : "cancel"} color={corporation.govContractor ? "green" : "red"} />
                  <List.Content>Government Department/Contractor</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.nonProfit ? "check" : "cancel"} color={corporation.nonProfit ? "green" : "red"}/>
                  <List.Content>Non-profit Organization</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.visaSponsor ? "check" : "cancel"} color={corporation.visaSponsor ? "green" : "red"}/>
                  <List.Content> Providing Visa Sponsorship</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.shpeSponsor ? "check" : "cancel"} color={corporation.shpeSponsor ? "green" : "red"}/>
                  <List.Content>SHPE UF Sponsor</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.industryPartnership ? "check" : "cancel"} color={corporation.industryPartnership ? "green" : "red"}/>
                  <List.Content>Industry Partnership Council</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.fallBBQ ? "check" : "cancel"} color={corporation.fallBBQ ? "green" : "red"}/>
                  <List.Content>Attending Fall BBQ with Industry</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.springBBQ ? "check" : "cancel"} color={corporation.springBBQ ? "green" : "red"}/>
                  <List.Content>Attending Spring BBQ with Industry</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name={corporation.nationalConvention ? "check" : "cancel"} color={corporation.nationalConvention ? "green" : "red"}/>
                  <List.Content> Attending SHPE National Convention</List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            
            {/* Right Column */}
            <Grid.Column width={10} textAlign="left">
              <Grid.Row></Grid.Row>
              <h4>Overview</h4>
                <p>{corporation.overview}</p>
              <h4>Mission</h4>
                <p>{corporation.mission}</p>
              <h4>Goals</h4>
                <p>{corporation.goals}</p>
              <h4>Business Model/Operations Highlight</h4>
                <p>{corporation.businessModel}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
}

export default CorporationProfile;