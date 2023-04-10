import React from 'react'
import {Card, Container, Responsive } from 'semantic-ui-react'
import JrSchoolCards from './JrSchoolCards';




const SJrSchools = () =>{
  return(
    <div className='SJrSchools'>
      <h2> Partner Schools</h2>
     <Container>
      <Responsive minWidth={992}>
        <Card.Group itemsPerRow={3}>
          <JrSchoolCards/>
        </Card.Group>
      </Responsive>
      <Responsive maxWidth={991}>
        <Card.Group itemsPerRow={1}>
          <JrSchoolCards/>
        </Card.Group>
      </Responsive>
     </Container>
    </div>

  );
};

export default SJrSchools;