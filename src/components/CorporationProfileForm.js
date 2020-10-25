import React, { useState } from "react";
import { useForm } from "../util/hooks";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import majorOptions from "../assets/options/major.json";
import industryOptions from "../assets/options/industry.json";

import { Image, Button, Form } from "semantic-ui-react";
import ImageCrop from "./ImageCrop";

function CorporationProfileForm({corporation, closeModal, refetch}) {

    //State for error handling
    const [errors, setErrors] = useState({});

    // State to keep track of majors and corporations so that they show up in real time when added 
    // or removed from the form
    const [majors, setMajors] = useState(corporation.majors);
    const [industries, setIndustries] = useState(corporation.industries);

    //State for image handling
    var [logoFile, setLogoFile] = useState('');
    let originalLogo = {};

    function logoSelectedHandler(event) {
      if (event.target.files.length > 0) {
        var a = new FileReader();
        a.readAsDataURL(event.target.files[0]);
        a.onload = function(e) {
          values.logo = e.target.result;
          setLogoFile(e.target.result);
        };
      } else {
        setLogoFile(originalLogo);
        values.logo = originalLogo;
      }
    }

    const { onChange, onSubmit, values } = useForm(modifyCorporationCallback, {
      id: corporation.id,
      name: corporation.name,
      logo: corporation.logo,
      slogan: corporation.slogan,
      majors: corporation.majors,
      industries: corporation.industries,
      overview: corporation.overview,
      mission: corporation.mission,
      goals: corporation.goals,
      businessModel: corporation.businessModel,
      newsLink: corporation.newsLink,
      applyLink: corporation.applyLink,
      academia: corporation.academia.toString(),
      govContractor: corporation.govContractor.toString(),
      nonProfit: corporation.nonProfit.toString(),
      visaSponsor: corporation.visaSponsor.toString(),
      shpeSponsor: corporation.shpeSponsor.toString(),
      industryPartnership: corporation.industryPartnership.toString(),
      fallBBQ: corporation.fallBBQ.toString(),
      springBBQ: corporation.springBBQ.toString(),
      nationalConvention: corporation.nationalConvention.toString()
    })
    

    const [editCorporationProfile, { loading }] = useMutation(EDIT_CORPORATION, {
      update(
        _,
        {
          data: { editCorporation: corporationData }
        }
      ) {
      },
      onError(err) {
        console.log(err.graphQLErrors[0].extensions.exception.errors)
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: values
    });
  
    async function modifyCorporationCallback(){
      await editCorporationProfile();
      if (!errors) {
        refetch();
        closeModal("editCorporation");
      }
    }

    return(
      <>
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
        className={loading ? "loading" : ""}
      >
              {logoFile === "" ? (
                <Image
                  fluid
                  rounded
                  src={corporation.logo}
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
                  required={true}
                  value={values.name}
                  error={errors.name ? true : false}
                  onChange={onChange}
                />
                <Form.Input
                  type="text"
                  required={true}
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
                  name="majors"
                  required={true}
                  fluid multiple selection 
                  value={majors}  //take display data from the state
                  options={majorOptions}
                  onChange={(param, data) => {
                    setMajors(data.value);      //update the majors state
                    values.majors = data.value; //update the values with the current data
                  }}
                  error={errors.majors ? true : false}
                >
                </Form.Dropdown>
                <Form.Dropdown
                  label="Industries"
                  name="industries"
                  required={true}
                  fluid multiple selection 
                  value={industries}  //take display data from the state
                  options={industryOptions}
                  onChange={(param, data) => {
                    setIndustries(data.value);      //update the industries state
                    values.industries = data.value; //update the values with the current data
                  }}
                  error={errors.industries ? true : false}
                />
              </Form.Group>
              <Form.TextArea
                type="text"
                required={true}
                label="Overview"
                name="overview"
                value={values.overview}
                error={errors.overview ? true : false}
                onChange={onChange}
              />
              <Form.TextArea
                type="text"
                required={true}
                label="Mission"
                name="mission"
                value={values.mission}
                error={errors.mission ? true : false}
                onChange={onChange}
              />
              <Form.TextArea
                type="text"
                required={true}
                label="Goals"
                name="goals"
                value={values.goals}
                error={errors.goals ? true : false}
                onChange={onChange}
              />
              <Form.TextArea
                type="text"
                required={true}
                label="Business Model/Operations Highlights"
                name="businessModel"
                value={values.businessModel}
                error={errors.businessModel ? true : false}
                onChange={onChange}
              />
              <Form.Group widths="equal">
                <Form.Input
                  type="text"
                  required={true}
                  label="News Link"
                  name="newsLink"
                  value={values.newsLink}
                  error={errors.newsLink ? true : false}
                  onChange={onChange}
                />
                <Form.Input
                  type="text"
                  required={true}
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
                    defaultChecked={values.academia === "true" ? true : false}
                    value={values.academia === "true" ? false : true }
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
                    defaultChecked={values.govContractor === "true" ? true : false}
                    value={values.govContractor === "true" ? false : true }
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
                    defaultChecked={values.nonProfit === "true" ? true : false}
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
                    defaultChecked={values.visaSponsor === "true" ? true : false}
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
                    defaultChecked={values.shpeSponsor === "true" ? true : false}
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
                    defaultChecked={values.industryPartnership === "true" ? true : false}
                    value={values.industryPartnership === "true" ? false :true}
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
                    defaultChecked={values.fallBBQ === "true" ? true : false}
                    value={values.fallBBQ === "true" ? false :true}
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
                    defaultChecked={values.springBBQ === "true" ? true : false}
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
                    defaultChecked={values.nationalConvention === "true" ? true : false}
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
                  onClick={() => closeModal("editCorporation")}
              >
                  Cancel
                </Button>
              <Button type="submit" floated="right">
                Accept
              </Button>
            </Form>
      </>
  )
}

const EDIT_CORPORATION = gql`
  mutation editCorporation(
    $id: ID!
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
        id: $id
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

export default CorporationProfileForm;
