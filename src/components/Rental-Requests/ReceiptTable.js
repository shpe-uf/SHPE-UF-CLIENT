import React, { useState } from 'react'
import { Grid, Table, Button, Icon, Confirm } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

function ReceiptTable(props) {

  const [confirmDelete, setConfirmDelete] = useState(false);

  const [pickUpItem] = useMutation(PICK_UP_ITEM);
  const [undoPickUp] = useMutation(UNDO_PICKUP);
  const [returnItem] = useMutation(RETURN_ITEM);
  const [undoReturn] = useMutation(UNDO_RETURN);
  const [deleteReceipt] = useMutation(DELETE_RECEIPT);

  function formatDate(date) {
    if(!date) return "N/A";
    return new Date(date.replaceAll('"','')).toLocaleDateString();
  }

  return (
    <div className="table-responsive">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Table selectable unstackable>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell>User</Table.HeaderCell>
                  <Table.HeaderCell>Item</Table.HeaderCell>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>CheckOut Date</Table.HeaderCell>
                  <Table.HeaderCell>PickUp Date</Table.HeaderCell>
                  <Table.HeaderCell>Return Date</Table.HeaderCell>
                  {props.type === 'checked' ? 
                    <Table.HeaderCell>Picked Up</Table.HeaderCell>
                  :props.type === 'picked' ? 
                    <>
                    <Table.HeaderCell>Undo PickUp</Table.HeaderCell>
                    <Table.HeaderCell>Returned</Table.HeaderCell>
                    </>
                  :props.type === 'returned' ?
                    <Table.HeaderCell>Undo Return</Table.HeaderCell>
                  :null}
                  {props.type === 'deleted' ? null:
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                  }
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  props.receipts.map((receipt, i) => (
                    <Table.Row key={i} textAlign='center'>
                      <Table.Cell>{receipt.username}</Table.Cell>
                      <Table.Cell>{receipt.item}</Table.Cell>
                      <Table.Cell>{receipt.quantity}</Table.Cell>
                      <Table.Cell>{formatDate(receipt.dateCheckedOut)}</Table.Cell>
                      <Table.Cell>{formatDate(receipt.datePickedUp)}</Table.Cell>
                      <Table.Cell>{formatDate(receipt.dateClosed)}</Table.Cell>
                      {props.type === 'checked' ? 
                        <Table.Cell>
                          <Button
                            icon
                            onClick={() => {pickUpItem({ variables: { receiptID: receipt.id } })}}
                          >
                            <Icon name="check" />
                          </Button>
                        </Table.Cell>
                      :props.type === 'picked' ? 
                        <>
                        <Table.Cell>
                          <Button
                            icon
                            onClick={() => undoPickUp({ variables: { receiptID: receipt.id } })}
                          >
                            <Icon name="undo" />
                          </Button>
                        </Table.Cell>
                        <Table.Cell>
                          <Button
                            icon
                            onClick={() => returnItem({ variables: { receiptID: receipt.id } })}
                          >
                            <Icon name="check" />
                          </Button>
                        </Table.Cell>
                        </>
                      :props.type === 'returned' ?
                        <Table.Cell>
                          <Button
                            icon
                            onClick={() => undoReturn({ variables: { receiptID: receipt.id } })}
                          >
                            <Icon name="undo" />
                          </Button>
                        </Table.Cell>
                      :null}
                      {props.type === 'deleted' ? null:
                        <Table.Cell>
                          <Button
                            icon
                            onClick={() => setConfirmDelete(true)}
                            color='red'
                          >
                            <Icon name="cancel" />
                          </Button>
                          <Confirm
                            open={confirmDelete}
                            onCancel={() => setConfirmDelete(false)}
                            onConfirm={() => {
                              setConfirmDelete(false)
                              deleteReceipt({ variables: { receiptID: receipt.id }});
                            }}
                          />
                        </Table.Cell>
                      }
                    </Table.Row>
                  ))
                }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const PICK_UP_ITEM = gql`
  mutation pickUpItem(
    $receiptID: ID!
  ) {
    pickUpItem(
      receiptID: $receiptID
    ) {
      id
      username
      email
      item
      quantity
      dateCheckedOut
      datePickedUp
      dateClosed
      deleted
    }
  }
`;

const DELETE_RECEIPT = gql`
  mutation deleteReceipt(
    $receiptID: ID!
  ) {
    deleteReceipt(
      receiptID: $receiptID
    ) {
      id
      username
      email
      item
      quantity
      dateCheckedOut
      datePickedUp
      dateClosed
      deleted
    }
  }
`;

const UNDO_PICKUP = gql`
  mutation unPickUpItem(
    $receiptID: ID!
  ) {
    unPickUpItem(
      receiptID: $receiptID
    ) {
      id
      username
      email
      item
      quantity
      dateCheckedOut
      datePickedUp
      dateClosed
      deleted
    }
  }
`;

const RETURN_ITEM = gql`
  mutation returnItem(
    $receiptID: ID!
  ) {
    returnItem(
      receiptID: $receiptID
    ) {
      id
      username
      email
      item
      quantity
      dateCheckedOut
      datePickedUp
      dateClosed
      deleted
    }
  }
`;

const UNDO_RETURN = gql`
  mutation unReturnItem(
    $receiptID: ID!
  ) {
    unReturnItem(
      receiptID: $receiptID
    ) {
      id
      username
      email
      item
      quantity
      dateCheckedOut
      datePickedUp
      dateClosed
      deleted
    }
  }
`;

export default ReceiptTable;