import React, { useState, useContext } from 'react';
import { Modal, Segment, Container, Step, Icon, Grid, Button, Loader, Dimmer, Image, Header, Checkbox, Divider, List } from 'semantic-ui-react';

import { AuthContext } from "../context/auth";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import checkmark from '../assets/images/checkmark.svg';
import x_icon from '../assets/images/x.svg';

function RentalModal(props) {

  const [ rentalState, setRentalState ] = useState(0);
  const [ agrees, setAgrees ] = useState(false);
  const [ numberOfItems, setNumberOfItems ] = useState(0);

  let {
    user: { id }
  } = useContext(AuthContext);

  let user = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id
    }
  }).data.getUser;

  let rentalAgreement =  require('../assets/options/rentalAgreement.js').lorem;

  let errors = [];

  function hasEnoughPoints() {
    if(user) {
      switch(props.item.level) {
        case 1:
          if(user.points > 0) {
            return true;
          }
          break;
        case 2:
          if(user.points > 0) {
            return true;
          }
          break;
        case 3:
          if(user.points > 10) {
            return true;
          }
          break;
        default:
          break;
      }
    }
    return false;
  }

  function changeNumberOfItems(val) {
    switch(val) {
      case -1:
        if(numberOfItems > 0) setNumberOfItems(numberOfItems - 1);
        break;
      case 1:
        setNumberOfItems(numberOfItems + 1);
        break;
      default:
        break;
    }
  }

  const ITEM_LIMIT = 3;
  //error checking for number of items
  if(numberOfItems > ITEM_LIMIT) errors.push('You are past the item rental limit for this item');
  if(numberOfItems > props.item.quantity - props.item.renters.length) errors.push('You are requesting more than what is available');

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
          <Segment textAlign='center'>
            { rentalState === 0 ? //POINT VALIDATION
                !user ? //loading
                  <div style={{height: '300px'}}>
                    <Dimmer active inverted>
                      <Loader inverted>Loading</Loader>
                    </Dimmer>
                  </div> 
                  :
                  hasEnoughPoints() ?
                  <Container>
                    <Image src={checkmark} centered size='small' className='checkmark'/>
                    <Header>Your point count qualifies you for this item</Header>
                  </Container>
                  :
                  <Container>
                    <Image src={x_icon} centered size='small' className='checkmark'/>
                    <Header>Your point count does not qualify you for this item</Header>
                  </Container>         
              :
              rentalState === 1 ? //RENTAL AGREEMENT
                <Container>
                  <Container>
                    {rentalAgreement}
                  </Container>
                  <Divider hidden/>
                  <Checkbox
                    label='I agree to the above terms and conditions'
                    onChange={(e,data) => setAgrees(data.checked)}
                  />
                </Container>
              :
              rentalState === 2 ? //INFORMATION
                <Container textAlign='left'>
                  <List
                    items={[
                      'The last step is to select the number of items you would like to rent',
                      'Upon pressing \"Finish\", your rent request will be submitted',
                      'An email will be sent to your ufl shortly afterwards with information on how to retrieve your item',
                    ]}
                  />
                  <Divider hidden/>
                  <Container textAlign='center'>
                    <Button 
                      circular 
                      onClick={() => changeNumberOfItems(-1)}
                      icon='minus'
                    />
                    {numberOfItems} <Divider vertical hidden/>
                    <Button 
                      circular 
                      onClick={() => changeNumberOfItems(1)}
                      icon='plus'
                    />
                  </Container>
                  {errors.length > 0 && (
                    <div className="ui error message">
                      <ul className="list">
                        {Object.values(errors).map(value => (
                          <li key={value}>{value}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Container>
              :
                null
            }
            <Grid columns={2}>
              <Grid.Column textAlign='center'>
                <Button
                  onClick={() => props.cancelRental()}
                >
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                {rentalState < 2 ? 
                  <Button
                    onClick={() => setRentalState(rentalState+1)}
                    disabled=
                      {rentalState === 0 ? 
                        !hasEnoughPoints() :
                        !agrees
                      }
                  >
                    Next
                  </Button>
                  : 
                  <Button
                    onClick={() => props.finishRental(numberOfItems, user)}
                    disabled={errors.length > 0 || numberOfItems === 0}
                  >
                    Finish
                  </Button>
                }
              </Grid.Column>
            </Grid>
          </Segment>
        </Segment>
      </Container>
    </Modal>
  );
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      username
      points
      email
    }
  }
`;

export default RentalModal;