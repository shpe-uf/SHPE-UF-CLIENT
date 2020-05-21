import React, { useState } from "react";
import {
  Table,
  Icon,
  Dimmer,
  Loader,
  Segment,
  Header,
  Button,
  Modal,
  Grid
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import CorporationProfile from "../components/CorporationProfile";


function CorporationTable({ corporations }) {
  const [viewCorporationModal, setViewCorporationModal] = useState(false);
  const [editCorporationModal, setEditCorporationModal] = useState(false);

  //State to keep track of the current corporation selected
  const [corporationInfo, setCorporationInfo] = useState({});

  const [removeCorporation] = useMutation(DELETE_CORPORATION);

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
          setCorporationInfo({});
          setEditCorporationModal(false);
      }
    }

    //Setter function to update the state with the selected corporation
    function getCorporationInfo(corporationInfo) {
      setCorporationInfo(corporationInfo);
    }

    

    function deleteCorporation(corporationInfo) {

      console.log(corporationInfo);
  
      removeCorporation({
        variables: {name: corporationInfo.name}
      });

      window.location.reload();
    }

    // function editCorporationUpdate(state) {
    //   setEditCorporationModal(state);
    // }

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
                        icon
                        onClick={()=>{
                          getCorporationInfo(corporation);
                          openModal("viewCorporation");
                        }}
                      >
                        <Icon name="info" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        onClick={()=>{
                          deleteCorporation(corporation);
                        }}
                      >
                        <Icon name="x" />
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
                  {/* <Button 
                    color="teal"
                    floated="right"
                    content="Edit"
                    onClick={()=>{
                      closeModal("viewCorporation");
                      getCorporationInfo(corporation);
                      openModal("editCorporation");
                    }}
                  /> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          </Modal>

          {/* <Modal
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
                    <CorporationProfileForm 
                      corporation={corporationInfo} 
                      editCorporation={editCorporationUpdate.bind(this)} 
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
          </Modal> */}
        </div>
      )}
    </>
  )
}

const DELETE_CORPORATION = gql`
 mutation deleteCorporation(
   $name: String!
 ) {
   deleteCorporation(
    name: $name
   )
 }
`;

export default CorporationTable;