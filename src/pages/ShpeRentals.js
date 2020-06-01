import React, { useState } from "react";
import gql from "graphql-tag";

import Title from "../components/Title";
import RentalCards from "../components/RentalCards";
import RentalModal from "../components/RentalModal";
import { Grid, Container, Input, Loader, Dropdown, Divider, Segment } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import rentalCategories from "../assets/options/rentalCategories.json";

function ShpeRentals() {

  const [ rentingItem, setRentingItem ] = useState(undefined);
  const [ category, setCategory ] = useState('All Inventory');
  const [ filter, setFilter ] = useState('');

  const [checkOut] = useMutation(CHECKOUT_ITEM, 
    {onCompleted: () => {
      refetch();
    }}
  );

  let { loading, data, refetch, networkStatus } = useQuery(FETCH_INVENTORY_QUERY, {
    notifyOnNetworkStatusChange: true
  });
  let items = [];

  let categories = rentalCategories.categories.map(({name}) => ({text: name, key: name, value: name === 'Miscellaneous' ? 'Misc' : name}))
  
  function rentItem(item) {
    setRentingItem(item);
  }

  function finishRental(numItems, user) {
    checkOut({ variables: {
      item: rentingItem.item,
      username: user.username,
      numberOfItems: numItems,
      email: user.email,
    }})
    setRentingItem(undefined);
  }

  function cancelRental() {
    setRentingItem(undefined);
  }

  if(data.getInventory) {
    category !== 'All Inventory' ?
    items = data.getInventory.filter((item) => item.category === category) : items = data.getInventory;

    filter !== '' ?
    items = items.filter((item) => item.item.includes(filter)) : items = items;
  }

  return (
    <div className="body">
      <Title title="SHPE Rentals"/>
      <Container>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Dropdown
                defaultValue = {'All Inventory'}
                options = {categories}
                onChange={(e, data) => {
                  setCategory(data.value);
                }}
                selection
              />
            </Grid.Column>
            <Grid.Column>
              <Input fluid onChange={(e,data) => setFilter(data.value)} placeholder={'Search for an item...'}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                {loading | !data | networkStatus === 4 ? 
                  <div style={{marginTop:'300px'}}>
                    <Loader active/>
                  </div>
                :
                  <RentalCards items={items} rent={rentItem}/>
                }
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {rentingItem === undefined ? null :
          <RentalModal 
            isOpen 
            item={rentingItem}
            finishRental={finishRental}
            cancelRental={cancelRental}
          />
        }
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

const CHECKOUT_ITEM = gql`
  mutation checkOut(
    $item: String!
    $username: String!
    $numberOfItems: Int!,
    $email: String!
  ) {
    checkOut(
      data: {
      item: $item,
      username: $username,
      numberOfItems: $numberOfItems,
      email: $email,
      }
    ) {
      username
    }
  }
`;

export default ShpeRentals;