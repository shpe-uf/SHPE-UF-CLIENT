import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Media } from "../../Media"; 
import DevTeamCards from './AndroidTeamCards';

const AndroidTeam = () =>{
  return(
    <div className='AndroidTeam'>
      <h2> Android Team</h2>
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
export default AndroidTeam;