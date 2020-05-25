import React, { useState, useContext } from 'react';
import { Modal, Segment, Container, Step, Icon, Grid, Button, Loader } from 'semantic-ui-react';

import { AuthContext } from "../context/auth";
import { useQuery } from '@apollo/react-hooks';
import { FETCH_USERS_QUERY } from '../util/graphql';

function RentalModal(props) {

  const [ rentalState, setRentalState ] = useState(0);

  let {
    user: { id }
  } = useContext(AuthContext);

  let user = useQuery(FETCH_USERS_QUERY, {
    variables: {
      userId: id
    }
  })

  let canProceed = false;
  let fakeDoneLoading = false;

  setTimeout(() => fakeDoneLoading = true, 3000);

  function hasEnoughPoints(itemTier) {
    switch(itemTier) {
      case 1:
        if(user.points > 5) {
          canProceed = true;
          return true;
        }
        break;
      case 2:
        if(user.points > 15) {
          canProceed = true;
          return true;
        }
        break;
      case 3:
        if(user.points > 30) {
          canProceed = true;
          return true;
        }
        break;
      default:
        return false;
        break;
    }
    return false;
  }

  function handleClose(type) {
    switch(type) {
      case 'next':
        setRentalState(rentalState+1);
        break;
      case 'cancel':
        props.cancelRental;
        setRentalState(0);
        break;
      case 'finish':
        props.finishRental;
        setRentalState(0);
        break;
      default:
        break;
    }
  }

  return (
    <Modal
      open={props.isOpen}
    >
      <Container>
        <Segment>
          <Step.Group fluid>
            <Step active={rentalState === 0} completed={rentalState > 0}>
              <Icon name='user'/>
              <Step.Content>
                <Step.Title>Point Validation</Step.Title>
              </Step.Content>
            </Step>

            <Step active={rentalState === 1} completed={rentalState > 1}>
              <Icon name='file alternate'/>
              <Step.Content>
                <Step.Title>Rental Agreement</Step.Title>
              </Step.Content>
            </Step>

            <Step active={rentalState === 2} completed={rentalState > 2}>
              <Icon name='info'/>
              <Step.Content>
                <Step.Title>Information</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Segment>
            { rentalState === 0 ? //POINT VALIDATION
                <div>
                <Loader active={!fakeDoneLoading}>
                  Checking your points, please wait
                </Loader>
                {
                  hasEnoughPoints && fakeDoneLoading ?
                  <Icon name='check' color='green' size='massive'/>
                  : <div/>
                }
                </div>
              :
              rentalState === 1 ? //RENTAL AGREEMENT
                <div/> 
              :
              rentalState === 2 ? //INFORMATION
                <div/> 
              :                   //DONE
                <div/>
            }
            <Grid columns={2}>
              <Grid.Column textAlign='center'>
                <Button
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Button
                  onClick={handleClose}
                  disabled={canProceed}
                >
                  {rentalState < 2 ? 'Next': 'Finish'}
                </Button>
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    </Modal>
  );
}

export default RentalModal;