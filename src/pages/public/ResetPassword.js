import React, { useState } from "react";
import { Form, Button, Container, Segment, Grid } from "semantic-ui-react";
import { Media } from "../../Media";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { useNavigate, useParams } from 'react-router-dom';

import { useForm } from "../../util/hooks";

function ResetPassword(props){

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const value = useParams();

  const { onChange, onSubmit, values } = useForm(callback, {
    password: "",
    confirmPassword: "",
    token: value.token
  });


  const [reset] = useMutation(RESET_PASSWORD, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    onCompleted(){
      navigate("/login");
    },
    variables: values
  });

  function callback() {
    reset();
  }

  return (
    <div className="reset">
      <div className="overlay-reset">
        <Media greaterThanOrEqual="computer">
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Reset Password</h1>
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
                      >
                        <Form.Input
                          type="password"
                          label="Password"
                          name="password"
                          value={values.password}
                          onChange={onChange}
                        />
                        <Form.Input
                          type="password"
                          label="Confirm Password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={onChange}
                        />
                        <span>
                          <Button type="submit">Submit</Button>
                          <p className="resetLink">
                            or <a href="/login">Log In</a>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Media>
        <Media at="tablet">
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={12}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Reset Password</h1>
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
                      >
                        <Form.Input
                          type="password"
                          label="Password"
                          name="password"
                          value={values.password}
                          onChange={onChange}
                        />
                        <Form.Input
                          type="password"
                          label="Confirm Password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={onChange}
                        />
                        <span>
                          <Button type="submit">Submit</Button>
                          <p className="resetLink">
                            or <a href="/login">Log In</a>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Media>
        <Media lessThan="tablet">
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={16}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Reset Password</h1>
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
                      >
                        <Form.Input
                          type="password"
                          label="Password"
                          name="password"
                          value={values.password}
                          onChange={onChange}
                        />
                        <Form.Input
                          type="password"
                          label="Confirm Password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onChange={onChange}
                        />
                        <span>
                          <Button type="submit">Submit</Button>
                          <p className="resetLink">
                            or <a href="/login">Log In</a>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Media>
      </div>
    </div>
  );
}

const RESET_PASSWORD = gql`
  mutation resetPassword($password: String!, $confirmPassword: String!, $token: String!) {
    resetPassword(password: $password,
      confirmPassword: $confirmPassword,
      token: $token
    ) {
      token
    }
  }
`;

export default ResetPassword;
