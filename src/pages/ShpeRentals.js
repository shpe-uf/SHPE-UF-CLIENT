import React, { useState } from "react";
import gql from "graphql-tag";

import Title from "../components/Title";
import RentalCards from "../components/RentalCards";
import RentalModal from "../components/RentalModal";
import { Grid, Container, Input, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

function ShpeRentals() {

  const [ rentingItem, setRentingItem ] = useState(undefined);

  let { loading, data } = useQuery(FETCH_INVENTORY_QUERY);
  
  function rentItem(item) {
    setRentingItem(item);
  }

  function completeRental() {

  }

  function cancelRental() {
    setRentingItem(undefined);
  }

  return (
    <div className="body">
      <Title title="SHPE Rentals"/>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Input/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {loading | !data ? 
                <div style={{marginTop:'300px'}}>
                  <Loader active/>
                </div>
              :
                <RentalCards items={data.getInventory} rent={rentItem}/>
              }
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <RentalModal 
          isOpen={!(rentingItem === undefined)} 
          completeRental={completeRental}
          cancelRental={cancelRental}
        />
      </Container>
    </div>
  );
}

const FETCH_INVENTORY_QUERY = gql`
  {
    getInventory{
      item
      quantity
      level
      description
      link
      image
      renters
      category
    }
  }
`

export default ShpeRentals;