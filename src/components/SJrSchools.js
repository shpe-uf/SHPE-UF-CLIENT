import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Media } from "../Media"; 
import JrSchoolCards from './JrSchoolCards';

const SJrSchools = () =>{
  return(
    <div className='SJrSchools'>
      <h2> Partner Schools</h2>
      <br></br>
     <Container>
      <Media greaterThanOrEqual="computer">
        <Card.Group itemsPerRow={3}>
          <JrSchoolCards/>
        </Card.Group>
      </Media>
      <Media lessThan="computer">
        <Card.Group itemsPerRow={1}>
          <JrSchoolCards/>
        </Card.Group>
      </Media>
     </Container>
    </div>
  );
};
export default SJrSchools;