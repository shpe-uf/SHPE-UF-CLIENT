import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Media } from "../../Media"; 
import DevTeamCards from './IOSTeamCards';

const IOSTeam = () =>{  //ios written as IOS because iOS would not work :(
  return(
    <div id='iOSTeam'>
      <h2 id="IOSTeam" text-transform="none"> iOS TEAM</h2>
      <br></br>
     <Container>
      <Media greaterThanOrEqual="computer">
        <Card.Group itemsPerRow={3} centered>
          <DevTeamCards/>
        </Card.Group>
      </Media>
      <Media lessThan="computer">
        <Card.Group itemsPerRow={1}>
          <DevTeamCards/>
        </Card.Group>
      </Media>
     </Container>
    </div>
  );
};
export default IOSTeam;