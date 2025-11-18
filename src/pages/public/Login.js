import React, { useContext, useState } from "react";
import {
  Form,
  Button,
  Container,
  Segment,
  Grid,
} from "semantic-ui-react";
import { Media } from "../../Media";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { AuthContext } from "../../context/auth";
import { useForm } from "../../util/hooks";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles/Login.css";

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
    remember: "false",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      navigate("/points");
      navigate(0);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values,
  });

  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="login">
      <div className="overlay-login">
        <Media greaterThanOrEqual="computer">
          <Container>
            <Grid>
              <Grid.Row centered>
                <Grid.Column width={8}>
                  <Segment.Group>
                    <Segment className="title-bg-accent-1">
                      <h1 className="text-white">Login</h1>
                    </Segment>
                    <Segment>
                      {Object.keys(errors).length > 0 && (
                        <div className="ui error message">
                          <ul className="list">
                            {Object.values(errors).map((value) => (
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
                            <label>Remember me (30 days)</label>
                          </div>
                        </Form.Field>
                        <span>
                          <Button type="submit">Login</Button>
                          <p style={{display : 'inline-block', float : 'right', marginTop: 12}}>
                            Forgot Password? <NavLink to="/forgot">Click Here</NavLink>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                  <Segment textAlign="center">
                      <p>
                        New to SHPE UF? <NavLink to="/register">Register here!</NavLink>
                      </p>
                  </Segment>
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
                      <h1 className="text-white">Login</h1>
                    </Segment>
                    <Segment>
                      {Object.keys(errors).length > 0 && (
                        <div className="ui error message">
                          <ul className="list">
                            {Object.values(errors).map((value) => (
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
                            <label>Remember me (30 days)</label>
                          </div>
                        </Form.Field>
                        <span>
                          <Button type="submit">Login</Button>
                          <p style={{display : 'inline-block', float : 'right', marginTop: 12}}>
                            Forgot Password? <NavLink to="/forgot">Click Here</NavLink>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                  <Segment textAlign="center">
                    <p>
                      New to SHPE UF? <NavLink to="/register">Register here!</NavLink>
                    </p>
                  </Segment>
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
                      <h1 className="text-white">Login</h1>
                    </Segment>
                    <Segment>
                      {Object.keys(errors).length > 0 && (
                        <div className="ui error message">
                          <ul className="list">
                            {Object.values(errors).map((value) => (
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
                            <label>Remember me (30 days)</label>
                          </div>
                        </Form.Field>
                        <span>
                          <Button type="submit">Login</Button>
                          <p style={{display : 'inline-block', float : 'right', marginTop: 12}}>
                            <NavLink to="/forgot">Forgot Password?</NavLink>
                          </p>
                        </span>
                      </Form>
                    </Segment>
                  </Segment.Group>
                  <Segment textAlign="center">
                    <p>
                      New to SHPE UF? <NavLink to="/register">Register here!</NavLink>
                    </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Media>
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
      permission
    }
  }
`;

export default Login;
