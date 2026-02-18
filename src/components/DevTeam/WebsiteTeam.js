import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Media } from "../../Media"; 
import DevTeamCards from './WebsiteTeamCards';

const WebsiteTeam = ({ members = [] }) =>{
  return(
    <div className='WebsiteTeam'>
      <h2 > Website Team</h2>
      <br></br>
     <Container>
     <Media greaterThanOrEqual="computer">
        <Card.Group itemsPerRow={3} centered>
          <DevTeamCards members={members}/>
        </Card.Group>
      </Media>
      <Media lessThan="computer">
        <Card.Group itemsPerRow={1}>
          <DevTeamCards members={members}/>
        </Card.Group>
      </Media>
     </Container>
    </div>
  );
};
export default WebsiteTeam;
