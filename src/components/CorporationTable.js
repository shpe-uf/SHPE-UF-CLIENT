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
  Grid,
  Form,
  Image
}from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";

import CorporationProfile from "../components/CorporationProfile";
import CorporationProfileForm from "../components/CorporationProfileForm";


function CorporationTable({ corporations }) {
  /**
   * STATES
   */
  //States for viewwing and editing corporations
  const [viewCorporationModal, setViewCorporationModal] = useState(false);
  const [editCorporationModal, setEditCorporationModal] = useState(false);

  //State for error handling
  const [errors, setErrors] = useState({});

  //State for image handling
  var [logoFile, setLogoFile] = useState({});
  var [originalLogo, setOriginalLogo] = useState({});

  //State to keep track of the current corporation selected
  const [corporationInfo, setCorporationInfo] = useState({});

  //Setter function to update the state with the selected corporation
  function getCorporationInfo(corporationInfo) {
    setCorporationInfo(corporationInfo);
  }
  
  function editCorporationUpdate(state) {
    setEditCorporationModal(state);
  }


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
          setCorporationInfo({});
          setEditCorporationModal(false);
      }
    }


    function deleteCorporation(corporationInfo) {  
      removeCorporation({
        variables: {name: corporationInfo.name}
      });
      window.location.reload();
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
                  {/* <Button
                    content="Edit Company"
                    icon="text cursor"
                    labelPosition="left"
                    floated="right"
                  /> */}
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
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Edit Corporation</h2>
        </Modal.Header>
        <Modal.Content>
          <Segment.Group className="segment-spacing">
            <Segment>
              {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                  <ul className="list">
                    {Object.values(errors).map(value => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <Form
                onSubmit={onSubmit}
                noValidate
                className={loading ? "loading" : ""}
              >
                {logoFile === "" ? (
                  <Image
                    fluid
                    rounded
                    src={placeholder}
                    className="image-profile"
                    style={{ marginBottom: 16 }}
                  />
                ) : (
                  <Image
                    fluid
                    rounded
                    src={logoFile}
                    className="image-profile"
                    style={{ marginBottom: 16 }}
                  />
                )}
                <Form.Input
                  type="file"
                  label="Logo"
                  error={errors.logo ? true : false}
                  onChange={(() => onChange, logoSelectedHandler)}
                />
                <Form.Group widths="equal">
                  <Form.Input
                    type="text"
                    label="Company Name"
                    name="name"
                    value={values.name}
                    error={errors.name ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Slogan"
                    name="slogan"
                    value={values.slogan}
                    error={errors.slogan ? true : false}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Dropdown
                    label="Majors"
                    fluid multiple selection 
                    options={majorOptions}
                    onChange={(param, data) => {
                      values.majors = data.value;
                    }}
                    error={errors.majors ? true : false}
                  >
                  </Form.Dropdown>
                  <Form.Dropdown
                    label="Industries"
                    fluid multiple selection 
                    options={industryOptions}
                    onChange={(param, data) => {
                      values.industries = data.value;
                    }}
                    error={errors.industries ? true : false}
                  />
                </Form.Group>
                <Form.TextArea
                  type="text"
                  label="Overview"
                  name="overview"
                  value={values.overview}
                  error={errors.overview ? true : false}
                  onChange={onChange}
                />
                <Form.TextArea
                  type="text"
                  label="Mission"
                  name="mission"
                  value={values.mission}
                  error={errors.mission ? true : false}
                  onChange={onChange}
                />
                <Form.TextArea
                  type="text"
                  label="Goals"
                  name="goals"
                  value={values.goals}
                  error={errors.goals ? true : false}
                  onChange={onChange}
                />
                <Form.TextArea
                  type="text"
                  label="Business Model/Operations Highlights"
                  name="businessModel"
                  value={values.businessModel}
                  error={errors.businessModel ? true : false}
                  onChange={onChange}
                />
                <Form.Group widths="equal">
                  <Form.Input
                    type="text"
                    label="News Link"
                    name="newsLink"
                    value={values.newsLink}
                    error={errors.newsLink ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Apply Link"
                    name="applyLink"
                    value={values.applyLink}
                    error={errors.applyLink ? true : false}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="academia"
                      value={values.academia === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Academia?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="govContractor"
                      value={values.govContractor === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Government Contractor?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="nonProfit"
                      value={values.nonProfit === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Non profit?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="visaSponsor"
                      value={values.visaSponsor === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Visa Sponsor?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="shpeSponsor"
                      value={values.shpeSponsor === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      SHPE UF Sponsor?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="industryPartnership"
                      value={values.industryPartnership === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Industry Partner?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="fallBBQ"
                      value={values.fallBBQ === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Attending Fall BBQ?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="springBBQ"
                      value={values.springBBQ === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Attending Spring BBQ?
                    </label>
                  </div>
                </Form.Field>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="nationalConvention"
                      value={values.nationalConvention === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Attending SHPE National Convention?
                    </label>
                  </div>
                </Form.Field>
                <Button
                    type="reset"
                    color="grey"
                    onClick={() => closeModal()}
                  >
                    Cancel
                  </Button>
                <Button type="submit" floated="right">
                  Add Corporation
                </Button>
              </Form>
            </Segment>
          </Segment.Group>
        </Modal.Content>
      </Modal>
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

const EDIT_CORPORATION = gql `
 mutation editCorporation(
  $name: String!
  $logo: String!
  $slogan: String!
  $majors: [String!]!
  $industries: [String!]!
  $overview: String!
  $mission: String!
  $goals: String!
  $businessModel: String!
  $newsLink: String!
  $applyLink: String!
  $academia: String!
  $govContractor: String!
  $nonProfit: String!
  $visaSponsor: String!
  $shpeSponsor: String!
  $industryPartnership: String!
  $fallBBQ: String!
  $springBBQ: String!
  $nationalConvention: String!
 ) {
   editCorporation(
     editCorporationInput: {
      name: $name
      logo: $logo
      slogan: $slogan
      majors: $majors
      industries: $industries
      overview: $overview
      mission: $mission
      goals: $goals
      businessModel: $businessModel
      newsLink: $newsLink
      applyLink: $applyLink
      academia: $academia
      govContractor: $govContractor
      nonProfit: $nonProfit
      visaSponsor: $visaSponsor
      shpeSponsor: $shpeSponsor
      industryPartnership: $industryPartnership
      fallBBQ: $fallBBQ
      springBBQ: $springBBQ
      nationalConvention: $nationalConvention
     }
   ){
     name
   }
 }
`

export default CorporationTable;