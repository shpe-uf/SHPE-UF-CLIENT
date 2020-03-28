import React, { useState } from "react";
import {
  Button,
  Dimmer,
  Table,
  Icon,
  Loader,
  Segment,
  Header,
  Modal,
  Grid
}from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import CorporationProfile from "../components/CorporationProfile";
import CorporationProfileForm from "../components/CorporationProfileForm";


function CorporationTable({ corporations }) {
  /**
   * STATES
   */
  //States for viewwing and editing corporations
  const [viewCorporationModal, setViewCorporationModal] = useState(false);
  const [editCorporationModal, setEditCorporationModal] = useState(false);


  //State to keep track of the current corporation selected
  const [corporationInfo, setCorporationInfo] = useState({});

  //Setter function to update the state with the selected corporation
  function getCorporationInfo(corporationInfo) {
    setCorporationInfo(corporationInfo);
  }
  
  // function editCorporationUpdate(state) {
  //   setEditCorporationModal(state);
  // }


  /**
   * MUTATIONS
   */
  //Mutation for Removing Corporations
  const [removeCorporation] = useMutation(DELETE_CORPORATION);


  /**
   * MODALS
   */

    //Corporation information modals
    const openModal = name => {
      switch(name) {
        case "viewCorporation":
          setViewCorporationModal(true);
          break;
        case "editCorporation":
          setEditCorporationModal(true);
          break;
      }
    };
  
    const closeModal = name => {
      switch(name) {
        case "viewCorporation":
          setCorporationInfo({});
          setViewCorporationModal(false);
          break;
        case "editCorporation":
          setEditCorporationModal(false);
      }
    }

    function deleteCorporation(corporation) {  
      console.log(corporation.id);
      removeCorporation({
        variables: {id: corporation.id}
      });
      // window.location.reload();
    }

  return (
    <>
      <Dimmer active={corporations ? false : true} inverted>
        <Loader/>
      </Dimmer>
      {corporations === undefined || corporations.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fa fa-inbox"/>
            <p>There are currently no corporations available</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">SHPE UF Sponsor</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Industry Partner</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Fall BBQ</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Spring BBQ</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">National Convention</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">View/Edit</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {corporations &&
                corporations.map((corporation, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{corporation.name}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {corporation.shpeSponsor === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {corporation.industryPartnership === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {corporation.fallBBQ === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {corporation.springBBQ === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      {corporation.nationalConvention === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon = "info"
                        onClick={()=> {
                          getCorporationInfo(corporation);
                          openModal("viewCorporation");
                        }}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        color="red"
                        onClick={()=>{
                          console.log(corporation);
                          deleteCorporation(corporation);
                        }}
                      >
                        <Icon name="x"/>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>

          <Modal
            open={viewCorporationModal}
            size="large"
            closeOnEscape={true}
            closeOnDimmerClick={false}
          >
          <Modal.Header>
            <h2>Company Profile</h2>
          </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                <CorporationProfile corporation={corporationInfo}/>
                  <Button 
                    color="teal"
                    floated="left"
                    content="Close"
                    onClick={()=> closeModal("viewCorporation")}
                  />
                  <Button 
                    floated="right"
                    content="Edit Company"
                    icon="edit"
                    onClick={()=>{
                      closeModal("viewCorporation");
                      getCorporationInfo(corporationInfo);
                      openModal("editCorporation");
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          </Modal>

      <Modal
        open={editCorporationModal}
        size="small"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Edit Corporation</h2>
        </Modal.Header>
        <Modal.Content>
        <Grid>
            <Grid.Row>
              <Grid.Column>
              <CorporationProfileForm
                corporation = {corporationInfo}
                closeModal = {closeModal}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Modal.Content>
      </Modal>
        </div>
      )}
    </>
  )
}

const DELETE_CORPORATION = gql`
 mutation deleteCorporation (
   $id: ID!
 ) {
   deleteCorporation (
     deleteCorporationInput: {
      id: $id
     }
   )
 }
`;


export default CorporationTable;