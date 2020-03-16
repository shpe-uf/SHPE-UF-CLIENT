import React, { useState } from "react";
import { useForm } from "../util/hooks";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import majorOptions from "../assets/options/major.json";
import industryOptions from "../assets/options/industry.json";

import { Grid, Image, Button, Icon, List, Modal, Form } from "semantic-ui-react";
import { GraphQLSkipDirective } from "graphql";

function CorporationProfileForm({corporation, closeModal}) {
  
    //State for error handling
    const [errors, setErrors] = useState({});

    //State for image handling
    var [logoFile, setLogoFile] = useState({});
    var [originalLogo, setOriginalLogo] = useState({});

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
      academia: corporation.academia,
      govContractor: corporation.govContractor,
      nonProfit: corporation.nonProfit,
      visaSponsor: corporation.visaSponsor,
      shpeSponsor: corporation.shpeSponsor,
      industryPartnership: corporation.industryPartnership,
      fallBBQ: corporation.fallBBQ,
      springBBQ: corporation.springBBQ,
      nationalConvention: corporation.nationalConvention
    })
  
    const [editCorporation, { loading }] = useMutation(EDIT_CORPORATION, {
      update(
        _,
        {
          data: { editedCorporation: corporationData }
        }
      ) {
        setErrors(false)
        console.log(corporationData);
      },
      onError(err) {
        console.log(err);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: values
    });
  
    function modifyCorporationCallback(){
      editCorporation();
      closeModal("editCorporation");
      window.location.reload();
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
          noValidate
          className={loading ? "loading" : ""}
        >
                {logoFile === "" ? (
                  <Image
                    fluid
                    rounded
                    size = "small"
                    src={corporation.logo}
                    className="image-profile"
                    style={{ marginBottom: 16 }}
                  />
                ) : (
                  <Image
                    fluid
                    rounded
                    size = "small"
                    src={corporation.logo}
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
                    value={values.majors}
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
                    value={values.industries}
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
                      defaultChecked={values.academia}
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
                      defaultChecked={values.govContractor}
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
                      defaultChecked={values.nonProfit}
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
                      defaultChecked={values.visaSponsor}
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
                      defaultChecked={values.shpeSponsor}
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
                      defaultChecked={values.industryPartnership}
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
                      defaultChecked={values.fallBBQ}
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
                      defaultChecked={values.springBBQ}
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
                      defaultChecked={values.nationalConvention}
                      defaultChecked={values.nationalConvention}
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
    );
}

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

export default CorporationProfileForm;