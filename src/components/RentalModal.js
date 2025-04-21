import React, { useState, useContext } from "react";
import {
  Modal,
  Segment,
  Container,
  Step,
  Icon,
  Grid,
  Button,
  Loader,
  Dimmer,
  Image,
  Header,
  Checkbox,
  Divider,
  List,
} from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import checkmark from "../assets/images/checkmark.svg";
import x_icon from "../assets/images/x.svg";

function RentalModal(props) {
  const [rentalState, setRentalState] = useState(0);
  const [agrees, setAgrees] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);

  let {
    user: { id },
  } = useContext(AuthContext);

  let userQuery = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id,
    },
  });
  let data = userQuery.data;
  let loadingUser = userQuery.loading;
  let user = null;

  if (data && data.getUser) {
    user = data.getUser;
  }

  let errors = [];

  function hasEnoughPoints() {
    if (user) {
      switch (props.item.level) {
        case 1:
          if (user.points > 8) {
            return true;
          }
          break;
        case 2:
          if (user.points > 15) {
            return true;
          }
          break;
        case 3:
          if (user.points > 25) {
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
    switch (val) {
      case -1:
        if (numberOfItems > 0) setNumberOfItems(numberOfItems - 1);
        break;
      case 1:
        setNumberOfItems(numberOfItems + 1);
        break;
      default:
        break;
    }
  }

  const requiredPoints =
    props.item.level === 1
      ? 8
      : props.item.level === 2
      ? 15
      : props.item.level === 3
      ? 25
      : -1;

  const ITEM_LIMIT = 3;
  //error checking for number of items
  if (numberOfItems > ITEM_LIMIT)
    errors.push("You are past the item rental limit for this item");
  if (numberOfItems > props.item.quantity - props.item.renters.length)
    errors.push("You are requesting more than what is available");

  return (
    <Modal open={props.isOpen}>
      <Container>
        <Segment>
          <Step.Group fluid>
            <Step active={rentalState === 0} completed={rentalState > 0}>
              <Icon name="user" />
              <Step.Content>
                <Step.Title>Point Validation</Step.Title>
              </Step.Content>
            </Step>

            <Step active={rentalState === 1} completed={rentalState > 1}>
              <Icon name="file alternate" />
              <Step.Content>
                <Step.Title>Rental Agreement</Step.Title>
              </Step.Content>
            </Step>

            <Step active={rentalState === 2} completed={rentalState > 2}>
              <Icon name="info" />
              <Step.Content>
                <Step.Title>Information</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Segment textAlign="center">
            {rentalState === 0 ? ( //POINT VALIDATION
              !user ? ( //loading
                <div style={{ height: "300px" }}>
                  <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                  </Dimmer>
                </div>
              ) : hasEnoughPoints() ? (
                <Container>
                  <Image
                    src={checkmark}
                    centered
                    size="small"
                    className="checkmark"
                  />
                  <Header>Your point count qualifies you for this item</Header>
                </Container>
              ) : (
                <Container>
                  <Image
                    src={x_icon}
                    centered
                    size="small"
                    className="checkmark"
                  />
                  <Header>
                    Your point count does not qualify you for this item
                  </Header>
                  <p>
                    {"A Tier " +
                      props.item.level +
                      " item requires " +
                      requiredPoints +
                      " points."}
                  </p>
                  <p>Point values are calculated from the previous semester.</p>
                </Container>
              )
            ) : rentalState === 1 ? ( //RENTAL AGREEMENT
              <Container>
                <Container>
                  <p>
                    I accept the equipment selected and accept full
                    responsibility for the equipment while it is in my
                    possession. I agree that I will only use the equipment in
                    the matter that it was intended. You shall not remove,
                    alter, disfigure or cover up any numbering, lettering, bar
                    code, or logo displayed upon the equipment. You shall see
                    that the equipment is not subjected to careless, unusually,
                    or needlessly rough usage. You must return the equipment to
                    us in the same condition as delivered, ordinary wear and
                    tear resulting from proper use thereof alone expected. By
                    renting this piece of equipment from the Society of Hispanic
                    Professional Engineers at the University of Florida, you
                    adhere to all of its rules and regulations.
                  </p>
                  <br />
                  <p>
                    1. If the equipment is lost, damaged, or not returned, you
                    will forfeit points depending on the item's tier.
                  </p>
                  <p>
                    2. You agree that if you do not pick up the equipment in the
                    timeframe given, you will lose your item and will have to
                    order it again.
                  </p>
                  <p>
                    3. You agree that if the item is not returned on time, you
                    are subject to being suspended from renting items from SHPE
                    UF at the discrepancy of the SHPE Rentals director.
                  </p>
                  <p>
                    4. If any issues or questions arise, you will contact the
                    SHPERentals director or the VP of the Tech Cabinet.
                  </p>
                </Container>
                <Divider hidden />
                <Checkbox
                  label="I agree to the above terms and conditions"
                  onChange={(e, data) => setAgrees(data.checked)}
                />
              </Container>
            ) : rentalState === 2 ? ( //INFORMATION
              <Container textAlign="left">
                <List
                  items={[
                    "The last step is to select the number of items you would like to rent",
                    'Upon pressing "Finish", your rent request will be submitted',
                    "An email will be sent to your ufl shortly afterwards with information on how to retrieve your item",
                  ]}
                />
                <Divider hidden />
                <Container textAlign="center">
                  <Button
                    circular
                    onClick={() => changeNumberOfItems(-1)}
                    icon="minus"
                  />
                  {numberOfItems} <Divider vertical hidden />
                  <Button
                    circular
                    onClick={() => changeNumberOfItems(1)}
                    icon="plus"
                  />
                </Container>
                {errors.length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Container>
            ) : null}
            <Grid columns={2}>
              <Grid.Column textAlign="center">
                <Button color="red" onClick={() => props.cancelRental()}>Cancel</Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                {rentalState < 2 ? (
                  <Button
                    onClick={() => setRentalState(rentalState + 1)}
                    disabled={rentalState === 0 ? !hasEnoughPoints() : !agrees}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={() => props.finishRental(numberOfItems, user)}
                    disabled={errors.length > 0 || numberOfItems === 0}
                  >
                    Finish
                  </Button>
                )}
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
