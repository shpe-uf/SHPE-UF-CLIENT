import React, { useState } from "react";
import { Form, Button, Container, Segment, Grid, Message } from "semantic-ui-react";
import { Media } from "../../Media";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

import { useForm } from "../../util/hooks";
import { NavLink } from "react-router-dom";

function ForgotPassword(props){

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const { onChange, onSubmit, values } = useForm(resetCallback, {
    email: ""
  });


  const [resetUser] = useMutation(FORGOT_PASSWORD, {
    onCompleted(){
      setErrors({});
      setSent(true);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      setSent(false);
    },

    variables: values
  });

  function resetCallback() {
    resetUser();
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
                      { sent && (
                        <Message info>
                          Please check your email
                        </Message>
                      )}
                      <Form
                        onSubmit={onSubmit}
                        noValidate
                      >
                        <Form.Input
                          type="text"
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                        />
                        <span>
                          <Button type="submit">Reset Password</Button>
                          <p className="resetLink">
                            or <NavLink to="/login">Log In</NavLink>
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
                      { sent && (
                        <Message info>
                          Please check your email to complete the registration
                        </Message>
                      )}
                      <Form
                        onSubmit={onSubmit}
                        noValidate
                      >
                        <Form.Input
                          type="text"
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                        />
                        <span>
                          <Button type="submit">Reset Password</Button>
                          <p className="resetLink">
                            or <NavLink to="/forgot">Log In</NavLink>
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
                      { sent && (
                        <Message info>
                          Please check your email to complete the registration
                        </Message>
                      )}
                      <Form
                        onSubmit={onSubmit}
                        noValidate
                      >
                        <Form.Input
                          type="text"
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                        />
                        <span>
                          <Button type="submit">Reset Password</Button>
                          <p className="resetLink">
                            or <NavLink to="/forgot">Log In</NavLink>
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

const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default ForgotPassword;
