import React, { useState, useEffect } from "react";
import { Image, Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import ImageCrop from "./ImageCrop";
import { useForm } from "../util/hooks";
import majorOptions from "../assets/options/major.json";
import industryOptions from "../assets/options/industry.json";

function CorporationProfileForm({ corporation, closeModal, refetch }) {
  // State for error handling
  const [errors, setErrors] = useState({});

  // State to keep track of majors and industries
  const [majors, setMajors] = useState(corporation.majors);
  const [industries, setIndustries] = useState(corporation.industries);

  // State for image handling
  const [logoFile, setLogoFile] = useState("");

  const { onChange, onSubmit, values, setValues } = useForm(
    modifyCorporationCallback,
    {
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
      nationalConvention: corporation.nationalConvention.toString(),
      recruitmentDay: corporation.recruitmentDay.toString(),
      signUpLink: corporation.signUpLink,
    }
  );

  // Reset form states when the modal is opened
  useEffect(() => {
    resetFormState();
  }, [corporation]);

  const [editCorporationProfile, { loading }] = useMutation(EDIT_CORPORATION, {
    update(_, { data: { editCorporation: corporationData } }) {
      setErrors(false);
      refetch();
      closeModal("editCorporation");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function resetFormState() {
    setLogoFile(corporation.logo || ""); // Reset logo file
    setMajors(corporation.majors || []); // Reset majors
    setIndustries(corporation.industries || []); // Reset industries
    setValues({
      ...values,
      logo: corporation.logo || "",
      majors: corporation.majors || [],
      industries: corporation.industries || [],
    });
  }

  async function modifyCorporationCallback() {
    try {
      await editCorporationProfile();
    } catch (err) {
      console.error("Error during mutation:", err);
      const errors = err.graphQLErrors[0]?.extensions?.exception?.errors || {};
      setErrors(errors);
    }
  }

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <Form onSubmit={onSubmit} className={loading ? "loading" : ""}>
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
          type="corporation"
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
            fluid
            multiple
            selection
            value={majors}
            options={majorOptions}
            onChange={(param, data) => {
              setMajors(data.value);
              values.majors = data.value;
            }}
            error={errors.majors ? true : false}
          />
          <Form.Dropdown
            label="Industries"
            name="industries"
            required={true}
            fluid
            multiple
            selection
            value={industries}
            options={industryOptions}
            onChange={(param, data) => {
              setIndustries(data.value);
              values.industries = data.value;
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
              defaultChecked={values.academia === "true"}
              value={values.academia === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Academia?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="govContractor"
              defaultChecked={values.govContractor === "true"}
              value={values.govContractor === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Government Contractor?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="nonProfit"
              defaultChecked={values.nonProfit === "true"}
              value={values.nonProfit === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Non-profit?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="visaSponsor"
              defaultChecked={values.visaSponsor === "true"}
              value={values.visaSponsor === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Visa Sponsor?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="shpeSponsor"
              defaultChecked={values.shpeSponsor === "true"}
              value={values.shpeSponsor === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>SHPE Sponsor?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="industryPartnership"
              defaultChecked={values.industryPartnership === "true"}
              value={values.industryPartnership === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Industry Partnership?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="fallBBQ"
              defaultChecked={values.fallBBQ === "true"}
              value={values.fallBBQ === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Fall BBQ?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="springBBQ"
              defaultChecked={values.springBBQ === "true"}
              value={values.springBBQ === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Spring BBQ?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="nationalConvention"
              defaultChecked={values.nationalConvention === "true"}
              value={values.nationalConvention === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>National Convention?</label>
          </div>
        </Form.Field>
        <Form.Field>
          <div className="ui toggle checkbox">
            <input
              type="checkbox"
              name="recruitmentDay"
              defaultChecked={values.recruitmentDay === "true"}
              value={values.recruitmentDay === "true" ? "false" : "true"}
              onChange={onChange}
            />
            <label>Recruitment Day?</label>
          </div>
        </Form.Field>
        <Form.Input
          type="text"
          required={true}
          label="Sign-up Link"
          name="signUpLink"
          value={values.signUpLink}
          error={errors.signUpLink ? true : false}
          onChange={onChange}
        />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
        <Button
          type="reset"
          color="red"
          onClick={() => closeModal("editCorporation")}
        >
          Cancel
        </Button>
        <Button type="submit" primary>
          Submit
        </Button>
      </div>
      </Form>
    </>
  );
}

const EDIT_CORPORATION = gql`
  mutation EditCorporation(
    $id: ID!
    $name: String!
    $logo: String
    $slogan: String!
    $majors: [String]
    $industries: [String]
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
    $recruitmentDay: String!
    $signUpLink: String!
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
        recruitmentDay: $recruitmentDay
        signUpLink: $signUpLink
      }
    ) {
      id
      name
      logo
      slogan
      majors
      industries
      overview
      mission
      goals
      businessModel
      newsLink
      applyLink
      academia
      govContractor
      nonProfit
      visaSponsor
      shpeSponsor
      industryPartnership
      fallBBQ
      springBBQ
      nationalConvention
      recruitmentDay
      signUpLink
    }
  }
`;

export default CorporationProfileForm;
