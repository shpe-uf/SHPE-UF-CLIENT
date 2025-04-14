import React, { useState } from "react";
import { Card, Pagination, Image, Divider, Button } from "semantic-ui-react";

function RentalCards(props) {

  const [itemPage, setItemPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  function printCards(items) {
    let currentSet = items.slice(0 + ((itemPage - 1)*ITEMS_PER_PAGE), 6 + ((itemPage - 1)*ITEMS_PER_PAGE));
    return currentSet.map(item => {
      return (
        <Card centered key={item.name}>
          <Image src={item.image} className='card-image'/>
          <Card.Content>
            <Card.Header>{item.item}</Card.Header>
          </Card.Content>
          <Card.Content extra textAlign='right'>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <div style={{display: 'flex', flexDirection:'column', alignItems: 'flex-start'}}>
                <p>
                  {"In stock: " + (item.quantity - item.renters.length)}
                </p>
                <p>
                  {"  Tier " + item.level}
                </p>
              </div>
              <Button
                onClick={() => {props.rent(item)}}
                disabled={item.quantity - item.renters.length === 0}
              >
                Rent
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    })
  }

  return (
    <div
      style={{
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Card.Group stackable>
        {printCards(props.items)}
      </Card.Group>
      <Divider hidden/>
      <Pagination 
        totalPages={Number.parseInt(props.items.length / ITEMS_PER_PAGE) + 1}
        defaultActivePage={1}
        onPageChange={(e,data) => {setItemPage(data.activePage)}}
        ellipsisItem={null}
      />
    </div>
    
  );
}

export default RentalCards;