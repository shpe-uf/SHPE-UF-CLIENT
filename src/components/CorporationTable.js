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

import CorporationProfile from "../components/CorporationProfile";
import CorporationProfileForm from "../components/CorporationProfileForm";
import DeleteModal from "./DeleteModal";


function CorporationTable({ corporations, refetch }) {
  /**
   * STATES
   */
  //States for viewwing and editing corporations
  const [viewCorporationModal, setViewCorporationModal] = useState(false);
  const [editCorporationModal, setEditCorporationModal] = useState(false);
  const [deleteCorporationModal, setDeleteCorporationModal] = useState(false);

  //State to keep track of the current corporation selected
  const [selectedCorporation, setSelectedCorporation] = useState({});

  //#region MODALS

    //Corporation information modals
    const openModal = name => {
      switch(name) {
        case "viewCorporation":
          setViewCorporationModal(true);
          break;
        case "editCorporation":
          setEditCorporationModal(true);
          break;
        default:
          break;
      }
    };
  
    const closeModal = name => {
      switch(name) {
        case "viewCorporation":
          setViewCorporationModal(false);
          break;
        case "editCorporation":
          setEditCorporationModal(false);
          break;
        default:
          break;
      }
    }

    const viewModal = (
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
            <CorporationProfile corporation={selectedCorporation}/>
            <Button 
              color="red"
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
                setSelectedCorporation(selectedCorporation);
                openModal("editCorporation");
              }}
            />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Modal.Content>
    </Modal>
    );

    const editModal = (
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
              corporation = {selectedCorporation}
              refetch = {refetch}
              closeModal = {closeModal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Modal.Content>
    </Modal>
    );

  //#endregion

    // function removeCorporation(corporation) {  
    //   deleteCorporation({
    //     variables: {id: corporation.id}
    //   });
    //   // window.location.reload();
    // }

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
                <Table.HeaderCell textAlign="center">Recruitment Days</Table.HeaderCell>
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
                      {corporation.recruitmentDay === true ? (
                        <Icon className="request-true" name="check" />
                      ) : (
                        <Icon className="request-false" name="x" />
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon = "info"
                        onClick={()=> {
                          setSelectedCorporation(corporation);
                          openModal("viewCorporation");
                        }}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        color="red"
                        onClick={() => {
                          setSelectedCorporation(corporation);
                          setDeleteCorporationModal(true);
                        }}
                      >
                        <Icon name="x"/>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
          {viewModal}
          {editModal}
        </div>
      )}
      <DeleteModal
        open={deleteCorporationModal}
        close={() => setDeleteCorporationModal(false)}
        deleteItem={selectedCorporation.name}
        deleteId={selectedCorporation.id}
        type='corporation'
      />
    </>
  )
}

export default CorporationTable;