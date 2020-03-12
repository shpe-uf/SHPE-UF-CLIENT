import React from "react";
import { Grid, Image, Button, Icon, List } from "semantic-ui-react";
import { GraphQLSkipDirective } from "graphql";

function CorporationProfileForm(props) {
  // console.log(corporation);
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
        </>
    );
}

export default CorporationProfileForm;