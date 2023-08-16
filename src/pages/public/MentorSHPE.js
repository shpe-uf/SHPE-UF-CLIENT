import React from "react";
import { Container, Grid, Image, Card, Icon } from "semantic-ui-react";

import aboutPhoto1 from "../../assets/images/about-1.jpg";
import aboutPhoto2 from "../../assets/images/about-2.jpg";

function MentorSHPE() {
  return (
    <div className="body">
      <div className="masthead masthead-about">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">MentorSHPE</h1>
          </Container>
        </div>
      </div>

      <Container>
        <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column>
              <h2>What is MentorSHPE?</h2>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum.
              </p>
            </Grid.Column>
            <Grid.Column>
                <Image bordered src={aboutPhoto1} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column>
                <Image bordered src={aboutPhoto2} />
            </Grid.Column>
            <Grid.Column>
              <h2>Getting Started</h2>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
               commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
               est laborum.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Container>
        <Grid>
            <Grid.Row centered>
                <h2>Past Winner's Testimonies</h2>
            </Grid.Row>
            <Grid.Row centered>
              <Card.Group itemsPerRow={3}>
              <Card>
                  <Card.Content textAlign="left">
                    <div>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" size="mini" circular verticalAlign="middle" floated="left"/>
                      <Image src="https://cdn1.iconfinder.com/data/icons/education-vol-1-32/32/7-512.png" size="mini" circular verticalAlign="middle" floated="right"/>
                      <Card.Header>Joe Doe</Card.Header>
                      <Card.Meta>Sophomore - July 2023</Card.Meta>
                    </div>
                    
                    <Card.Description>
                      <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.<span>"</span>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content textAlign="left">
                    <div>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" size="mini" circular verticalAlign="middle" floated="left"/>
                      <Image src="https://cdn1.iconfinder.com/data/icons/education-vol-1-32/32/7-512.png" size="mini" circular verticalAlign="middle" floated="right"/>
                      <Card.Header>Joe Doe</Card.Header>
                      <Card.Meta>Sophomore - July 2023</Card.Meta>
                    </div>
                    
                    <Card.Description>
                      <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.<span>"</span>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content textAlign="left">
                    <div>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" size="mini" circular verticalAlign="middle" floated="left"/>
                      <Image src="https://cdn1.iconfinder.com/data/icons/education-vol-1-32/32/7-512.png" size="mini" circular verticalAlign="middle" floated="right"/>
                      <Card.Header>Joe Doe</Card.Header>
                      <Card.Meta>Sophomore - July 2023</Card.Meta>
                    </div>
                    
                    <Card.Description>
                      <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat.<span>"</span>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
        </Grid>
      </Container>

      <Container>
        <Grid>
            <Grid.Row centered>
                <h2>2023 Podium</h2>
            </Grid.Row>
            <Grid.Row centered>
              <Image src="https://img.freepik.com/premium-vector/winners-podium-with-gold-silver-bronze-cups-flat-cartoon-style_163786-344.jpg" />
            </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default MentorSHPE;
