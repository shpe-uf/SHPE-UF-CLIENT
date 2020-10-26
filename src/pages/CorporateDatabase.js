import React, { useState } from "react";
import { Grid, Container, Button, Form, Segment, Modal, Image } from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { useForm } from "../util/hooks";
import {FETCH_CORPORATIONS_QUERY} from "../util/graphql";

import majorOptions from "../assets/options/major.json";
import industryOptions from "../assets/options/industry.json";

import Title from "../components/Title";
import CorporationTable from "../components/CorporationTable";

import placeholder from "../assets/images/placeholder.png";
import ImageCrop from "../components/ImageCrop";

import { CSVLink} from "react-csv" 
import { Popup } from "mapbox-gl";

function CorporateDatabase() {
  var reimbursements = useQuery(FETCH_CORPORATIONS_QUERY).data.getCorporations;
  const [errors, setErrors] = useState({});
  const [addCorporationModal, setAddCorporationModal] = useState(false);

  var [logoFile, setLogoFile] = useState('');

  //mutation for retrieving company array
  var {data, refetch} = useQuery(FETCH_CORPORATIONS_QUERY);
  var corporations = (data) ? data.getCorporations : [];

  // if (data) {
  //   corporations = data.getCorporations;
    // setDisplayCorporations({corporations});
  // }


  const { onChange, onSubmit, values } = useForm(createCorporation, {
    name: "",
    logo: "",
    slogan: "",
    majors: [],
    industries: [],
    overview: "",
    mission: "",
    goals: "",
    businessModel: "",
    newsLink: "",
    applyLink: "",
    academia: "false",
    govContractor: "false",
    nonProfit: "false",
    visaSponsor: "false",
    shpeSponsor: "false",
    industryPartnership: "false",
    fallBBQ: "false",
    springBBQ: "false",
    nationalConvention: "false"
  })

  const [addCorporation, { loading }] = useMutation(CREATE_CORPORATION, {
    update(
      _,
      {
        data: { createCorporation: corporationData }
      }
    ) {
      corporations = corporationData;
      // setDisplayCorporations(corporations);
      closeModal();
      setErrors(false)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });



  async function createCorporation() {
    await addCorporation();
    refetch();
  }

  //#region MODALS

  const openModal = () => {
    setAddCorporationModal(true);
  }

  const closeModal = () => {
    values.name = "";
    values.logo = "";
    values.slogan = "";
    values.majors = [];
    values.industries = [];
    values.overview = "";
    values.mission = "";
    values.goals = "";
    values.businessModel = "";
    values.newsLink = "";
    values.applyLink = "";
    values.academia = "false";
    values.govContractor = "false";
    values.nonProfit = "false";
    values.visaSponsor = "false";
    values.shpeSponsor = "false";
    values.industryPartnership = "false";
    values.fallBBQ = "false";
    values.springBBQ = "false";
    values.nationalConvention = "false";
    setErrors(false);
    setAddCorporationModal(false);
  }

  const corpHeaders = [
    {label: "ID", key: "id"},
    {label: "Company Name", key: "name"},
    {label: "Slogan", key: "slogan"},
    {label: "Major", key: "majors"},
    {label: "Industries", key: "industries"},
    {label: "Mission", key: "overview"},    
    {label: "Goals", key: "mission"},
    {label: "Business Model", key: "goals"},
    {label: "NewsLink", key: "businessModel"},
    {label: "Apply Link", key: "newsLink"},
    {label: "National Convention Attendee", key: "applyLink"},
  ];

  const addModal = (
    <Modal
    open={addCorporationModal}
    size="tiny"
    closeOnEscape={true}
    closeOnDimmerClick={false}
  >
    <Modal.Header>
      <h2>Add Corporation</h2>
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
            <ImageCrop
              setPhotoFile={setLogoFile}
              values={values}
              onChange={onChange}
              errors={errors}
              type='corporation'
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
  );
  //#endregion

  return (
    <>
      <Title title="Corporate Database" adminPath={window.location.pathname}/>
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button
                content="Add Corporation"
                icon="add"
                labelPosition="left"
                onClick={() => openModal()}
                floated="right"
              />
              <CSVLink 
              data={reimbursements ? reimbursements : []}
              headers = {corpHeaders}
              filename = {"Corporations" + ".csv"}
              >
              <Button
                content="Download CSV"
                icon="download"
                labelPosition="right"
                floated="left"
                />
              </CSVLink>
              
            </Grid.Column>
           
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <CorporationTable 
                  corporations={corporations}
                  refetch={refetch}
                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      {addModal}
    </>
  )
}

const CREATE_CORPORATION = gql`
  mutation createCorporation(
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
    createCorporation(
      createCorporationInput: {
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
    ) {
      name
    }
  }
`;

export default CorporateDatabase;