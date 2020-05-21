import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Segment,
  Message,
  Responsive,
  Grid
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useForm } from "../../util/hooks";

import majorOptions from "../../assets/options/major.json";
import countryOptions from "../../assets/options/country.json";
import stateOptions from "../../assets/options/state.json";

function RegisterAlumni(props) {
  const [errors, setErrors] = useState({});
  const [showRegistration, setShowRegistration] = useState(true);
  const [alumniName, setAlumniName] = useState("");

  const { onChange, onSubmit, values } = useForm(registerAlumni, {
    firstName: "",
    lastName: "",
    email: "",
    undergradUniversity: "",
    undergradYear: "",
    undergradMajor: "",
    gradUniversity: "",
    gradYear: "",
    gradMajor: "",
    employer: "",
    position: "",
    locationCity: "",
    locationState: "",
    locationCountry: "",
    linkedin: ""
  });
  
  const [addAlumni, { loading }] = useMutation(REGISTER_ALUMNI, {
    update(
      _,
      {
        data: { registerAlumni }
      }
    ) {
      setAlumniName(registerAlumni.firstName);
      setErrors({});
      setShowRegistration(false);
    },
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  function registerAlumni() {
    addAlumni();
  }

  return (
    <div className="register-alumni">
      <div className="overlay-register">
        <Container>
          {showRegistration ? (
            <Segment.Group className="segment-spacing">
              <Segment className="title-bg-accent-1">
                <h1 className="text-white">Alumni Registration</h1>
              </Segment>
              <Segment>
                <Message warning>
                  <Message.Header>Notice</Message.Header>
                  <p>
                    By submitting your personal information in this form, you
                    also approve of your information being made public to
                    current SHPE UF members via the Alumni Directory.
                  </p>
                </Message>
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
                  <Form.Group widths="equal">
                    <Form.Input
                      type="text"
                      label="First Name"
                      name="firstName"
                      value={values.firstName}
                      error={errors.firstName ? true : false}
                      onChange={onChange}
                    />
                    <Form.Input
                      type="text"
                      label="Last Name"
                      name="lastName"
                      value={values.lastName}
                      error={errors.lastName ? true : false}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Segment color="orange">
                    <h5>Undergraduate Education</h5>
                    <Form.Group widths="equal">
                      <Form.Input
                        type="text"
                        label="University"
                        name="undergradUniversity"
                        value={values.undergradUniversity}
                        error={errors.undergradUniversity ? true : false}
                        onChange={onChange}
                      />
                      <Form.Input
                        type="text"
                        label="Graduation Year"
                        name="undergradYear"
                        value={values.undergradYear}
                        error={errors.undergradYear ? true : false}
                        onChange={onChange}
                      />
                      <Form.Field
                        label="Major"
                        control="select"
                        name="undergradMajor"
                        value={values.undergradMajor}
                        error={errors.undergradMajor ? true : false}
                        onChange={onChange}
                      >
                        {majorOptions.map(major => (
                          <option value={major.value} key={major.key}>
                            {major.value}
                          </option>
                        ))}
                      </Form.Field>
                    </Form.Group>
                  </Segment>
                  <Segment color="orange">
                    <h5>Graduate Education</h5>
                    <Form.Group widths="equal">
                      <Form.Input
                        type="text"
                        label="University"
                        name="gradUniversity"
                        value={values.gradUniversity}
                        error={errors.gradUniversity ? true : false}
                        onChange={onChange}
                      />
                      <Form.Input
                        type="text"
                        label="Graduation Year"
                        name="gradYear"
                        value={values.gradYear}
                        error={errors.gradYear ? true : false}
                        onChange={onChange}
                      />
                      <Form.Field
                        label="Major"
                        control="select"
                        name="gradMajor"
                        value={values.gradMajor}
                        error={errors.gradMajor ? true : false}
                        onChange={onChange}
                      >
                        {majorOptions.map(major => (
                          <option value={major.value} key={major.key}>
                            {major.value}
                          </option>
                        ))}
                      </Form.Field>
                    </Form.Group>
                  </Segment>
                  <Form.Group widths="equal">
                    <Form.Input
                      type="text"
                      label="Employer"
                      name="employer"
                      value={values.employer}
                      error={errors.employer ? true : false}
                      onChange={onChange}
                    />
                    <Form.Input
                      type="text"
                      label="Position"
                      name="position"
                      value={values.position}
                      error={errors.position ? true : false}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field
                      control="select"
                      label="Country"
                      name="locationCountry"
                      value={values.locationCountry}
                      error={errors.locationCountry ? true : false}
                      onChange={onChange}
                    >
                      {countryOptions.map(country => (
                        <option value={country.value} key={country.key}>
                          {country.value}
                        </option>
                      ))}
                    </Form.Field>
                    <Form.Input
                      type="text"
                      label="City"
                      name="locationCity"
                      value={values.locationCity}
                      error={errors.locationCity ? true : false}
                      onChange={onChange}
                    />
                    {values.locationCountry === "United States" && (
                      <Form.Field
                        control="select"
                        label="State"
                        name="locationState"
                        value={
                          values.locationCountry === "United States"
                            ? values.locationState
                            : ""
                        }
                        error={errors.locationState ? true : false}
                        onChange={onChange}
                      >
                        {stateOptions.map(state => (
                          <option value={state.value} key={state.key}>
                            {state.value}
                          </option>
                        ))}
                      </Form.Field>
                    )}
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      type="text"
                      label="Email"
                      name="email"
                      value={values.email}
                      error={errors.email ? true : false}
                      onChange={onChange}
                    />
                    <Form.Input
                      type="text"
                      label="LinkedIn Profile Link"
                      name="linkedin"
                      value={values.linkedin}
                      error={errors.linkedin ? true : false}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Button type="submit">Register</Button>
                </Form>
              </Segment>
            </Segment.Group>
          ) : (
            <>
              <Responsive {...Responsive.onlyComputer}>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={8}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                            <div>
                              <h1 className="text-white confirmMsg">
                                Thank you for registering, {alumniName}!
                              </h1>
                            </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Responsive>
              <Responsive {...Responsive.onlyTablet}>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={12}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                            <div>
                              <h1 className="text-white confirmMsg">
                                Thank you for registering, {alumniName}
                              </h1>
                            </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Responsive>
              <Responsive {...Responsive.onlyMobile}>
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column width={16}>
                      <Segment.Group>
                        <Segment className="title-bg-accent-1">
                          <div className="loading">
                            <div>
                              <h1 className="text-white confirmMsg">
                                Thank you for registering, {alumniName}
                              </h1>
                            </div>
                          </div>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Responsive>
            </>
          )}
        </Container>
      </div>
    </div>
  );
}

const REGISTER_ALUMNI = gql`
  mutation registerAlumni(
    $firstName: String!
    $lastName: String!
    $email: String!
    $undergradUniversity: String!
    $undergradYear: String!
    $undergradMajor: String!
    $gradUniversity: String!
    $gradYear: String!
    $gradMajor: String!
    $employer: String!
    $position: String!
    $locationCity: String!
    $locationState: String!
    $locationCountry: String!
    $linkedin: String!
  ) {
    registerAlumni(
      registerAlumniInput: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        undergrad: {
          university: $undergradUniversity
          year: $undergradYear
          major: $undergradMajor
        }
        grad: {
          university: $gradUniversity
          year: $gradYear
          major: $gradMajor
        }
        employer: $employer
        position: $position
        location: {
          city: $locationCity
          state: $locationState
          country: $locationCountry
        }
        linkedin: $linkedin
      }
    ) {
      firstName
    }
  }
`;

export default RegisterAlumni;
