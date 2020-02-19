import React, { useContext, useState } from "react";
import {
  Form,
  Button,
  Container,
  Segment,
  Grid,
  Responsive
} from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../../context/auth";
import { useForm } from "../../util/hooks";

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
    remember: "false"
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(
      _,
      {
        data: { login: userData }
      }
    ) {
      context.login(userData);
      props.history.push("/points");
      window.location.reload();
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="login">
      <div className="overlay-login">
        <Responsive {...Responsive.onlyComputer}>
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Login</h1>
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
                        <Form.Input
                          type="text"
                          label="Username"
                          name="username"
                          value={values.username}
                          error={errors.username ? true : false}
                          onChange={onChange}
                        />
                        <Form.Input
                          type="password"
                          label="Password"
                          name="password"
                          value={values.password}
                          error={errors.password ? true : false}
                          onChange={onChange}
                        />
                        <Form.Field>
                          <div className="ui toggle checkbox">
                            <input
                              type="checkbox"
                              name="remember"
                              value={values.remember === "true" ? false : true}
                              onChange={onChange}
                            />
                            <label>
                              Remember me (30 days)
                            </label>
                          </div>
                        </Form.Field>
                        <span>
                          <Button type="submit">Login</Button>
                          <p style={{display : 'inline-block', float : 'right', marginTop: 12}}>
                            Forgot Password? <a href="/forgot">Click Here</a>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                  <Segment textAlign="center">
                    <p>
                      New to SHPE UF? <a href="/register">Register here!</a>
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={12}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Login</h1>
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
                        <Form.Input
                          type="text"
                          label="Username"
                          name="username"
                          value={values.username}
                          error={errors.username ? true : false}
                          onChange={onChange}
                        />
                        <Form.Input
                          type="password"
                          label="Password"
                          name="password"
                          value={values.password}
                          error={errors.password ? true : false}
                          onChange={onChange}
                        />
                        <Form.Field>
                          <div className="ui toggle checkbox">
                            <input
                              type="checkbox"
                              name="remember"
                              value={values.remember === "true" ? false : true}
                              onChange={onChange}
                            />
                            <label>
                              Remember me (30 days)
                            </label>
                          </div>
                        </Form.Field>
                        <span>
                          <Button type="submit">Login</Button>
                          <p style={{display : 'inline-block', float : 'right', marginTop: 12}}>
                            Forgot Password? <a href="/forgot">Click Here</a>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                  <Segment textAlign="center">
                    <p>
                      New to SHPE UF? <a href="/register">Register here!</a>
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
        <Responsive {...Responsive.onlyMobile}>
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={16}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Login</h1>
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
                        <Form.Input
                          type="text"
                          label="Username"
                          name="username"
                          value={values.username}
                          error={errors.username ? true : false}
                          onChange={onChange}
                        />
                        <Form.Input
                          type="password"
                          label="Password"
                          name="password"
                          value={values.password}
                          error={errors.password ? true : false}
                          onChange={onChange}
                        />
                        <Form.Field>
                          <div className="ui toggle checkbox">
                            <input
                              type="checkbox"
                              name="remember"
                              value={values.remember === "true" ? false : true}
                              onChange={onChange}
                            />
                            <label>
                              Remember me (30 days)
                            </label>
                          </div>
                        </Form.Field>
                        <span>
                          <Button type="submit">Login</Button>
                          <p style={{display : 'inline-block', float : 'right', marginTop: 12}}>
                            Forgot Password? <a href="/forgot">Click Here</a>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                  <Segment textAlign="center">
                    <p>
                      New to SHPE UF? <a href="/register">Register here!</a>
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Responsive>
      </div>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!, $remember: String!) {
    login(username: $username, password: $password, remember: $remember) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;
