import React, { useContext, useState } from "react";
import {
  Form,
  Button,
  Container,
  Segment,
  Message
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../../context/auth";
import { useForm } from "../../util/hooks";
import ModalBasic from "../../components/ModalBasic"

import majorOptions from "../../assets/options/major.json";
import yearOptions from "../../assets/options/year.json";
import graduatingOptions from "../../assets/options/graduating.json";
import countryOptions from "../../assets/options/country.json";
import ethnicityOptions from "../../assets/options/ethnicity.json";
import sexOptions from "../../assets/options/sex.json";

function Register(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
    props.history.push("/login");
  }

  const { onChange, onSubmit, values } = useForm(registerUser, {
    firstName: "",
    lastName: "",
    major: "",
    ethnicity: "",
    graduating: "",
    country: "",
    year: "",
    sex: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    listServ: "false"
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    onCompleted(){
      setOpenModal(true);
    },
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  function registerUser() {
    addUser();
  }

  const msg = "Please confirm your email to complete registration, thank you!"

  return (
    <div className="register">
      <div className="overlay-register">
        <Container>
          <ModalBasic open={openModal} handleClose={handleClose} message={msg}/>
          <Segment.Group className="segment-spacing">
            <Segment className="title-bg-accent-1">
              <h1 className="text-white">Registration</h1>
            </Segment>
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
                <Form.Group widths="equal">
                  <Form.Field
                    label="Major"
                    control="select"
                    name="major"
                    value={values.major}
                    error={errors.major ? true : false}
                    onChange={onChange}
                  >
                    {majorOptions.map(major => (
                      <option value={major.value} key={major.key}>
                        {major.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Year"
                    control="select"
                    name="year"
                    value={values.year}
                    error={errors.year ? true : false}
                    onChange={onChange}
                  >
                    {yearOptions.map(year => (
                      <option value={year.value} key={year.key}>
                        {year.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Graduating this year?"
                    control="select"
                    name="graduating"
                    value={values.graduating}
                    error={errors.graduating ? true : false}
                    onChange={onChange}
                  >
                    {graduatingOptions.map(graduating => (
                      <option value={graduating.value} key={graduating.key}>
                        {graduating.value}
                      </option>
                    ))}
                  </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    label="Country of Origin"
                    control="select"
                    name="country"
                    value={values.country}
                    error={errors.country ? true : false}
                    onChange={onChange}
                  >
                    {countryOptions.map(country => (
                      <option value={country.value} key={country.key}>
                        {country.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Ethnicity"
                    control="select"
                    name="ethnicity"
                    value={values.ethnicity}
                    error={errors.ethnicity ? true : false}
                    onChange={onChange}
                  >
                    {ethnicityOptions.map(ethnicity => (
                      <option value={ethnicity.value} key={ethnicity.key}>
                        {ethnicity.value}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field
                    label="Sex"
                    control="select"
                    name="sex"
                    value={values.sex}
                    error={errors.sex ? true : false}
                    onChange={onChange}
                  >
                    {sexOptions.map(sex => (
                      <option value={sex.value} key={sex.key}>
                        {sex.value}
                      </option>
                    ))}
                  </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    type="text"
                    label="Username"
                    name="username"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="UF/SF Email"
                    name="email"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    type="password"
                    label="Password"
                    name="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    error={errors.confirmPassword ? true : false}
                    onChange={onChange}
                  />
                </Form.Group>
                <Message info>
                  At least 8 characters. It must contain at least one lowercase
                  character, one uppercase character, one number, and one
                  special character.
                </Message>
                <Form.Field>
                  <div className="ui toggle checkbox">
                    <input
                      type="checkbox"
                      name="listServ"
                      value={values.listServ === "true" ? false : true}
                      onChange={onChange}
                    />
                    <label>
                      Would you like to be added to the ListServ to receive
                      weekly emails?
                    </label>
                  </div>
                </Form.Field>
                <Button type="submit">Register</Button>
              </Form>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $firstName: String!
    $lastName: String!
    $major: String!
    $year: String!
    $graduating: String!
    $country: String!
    $ethnicity: String!
    $sex: String!
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
    $listServ: String!
  ) {
    register(
      registerInput: {
        firstName: $firstName
        lastName: $lastName
        major: $major
        year: $year
        graduating: $graduating
        country: $country
        ethnicity: $ethnicity
        sex: $sex
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        listServ: $listServ
      }
    ) {
      id
      email
      username
      createdAt
    }
  }
`;

export default Register;
