import React, { useContext, useState } from "react";
import {
  Segment,
  Card,
  Image,
  Message,
  Table,
  Header,
  Grid,
  Container,
  Button,
  Modal,
  Form,
  Icon,
  List,
  Label,
  Tab,
  Placeholder,
  ListItem,
  GridColumn,
  Responsive
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

import placeholder from "../assets/images/team/placeholder.png";
import { useForm } from "../util/hooks";
import { AuthContext } from "../context/auth";

import Title from "../components/Title";
import cesar from "../assets/images/team/2019-2020/cesar.png";
import { findValuesAddedToEnums } from "graphql/utilities/findBreakingChanges";
import MatchCards from "../components/MatchCards";

function ClassSharing() {
  var {
    user: { username, id }
  } = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [addClassModal, setAddClassModal] = useState(false);
  const [displayClassModal, setDisplayClassModal] = useState(false);
  const [displayClass, setDisplayClass] = useState({});
  const [displayUsers, setDisplayUsers] = useState([]);
  // const [classUsers, setClassUsers] = useState({});

  const openModal = name => {
    if (name === "addClass") {
      setAddClassModal(true);
    }
    if (name === "displayClass") {
      setDisplayClassModal(true);
    }
  };

  const closeModal = name => {
    if (name === "addClass") {
      setAddClassModal(false);
    }
    if (name === "displayClass") {
      setDisplayUsers([]);
      setDisplayClass({});
      setDisplayClassModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(addClassCallback, {
    code: "",
    username: username
  });

  var getClasses = [];

  //var { data } = 0
  var { data } = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id
    }
  });
  console.log(id);

  if (data.getUser) {
    getClasses = data.getUser.classes;
  }

  var getMatches = [];

  var { data: dataM } = useQuery(GET_MATCHES_QUERY, {
    variables: {
      username
    }
  });

  if (dataM.getMatches) {
    getMatches = dataM.getMatches;
  }

  console.log(getMatches);

  var classUsers = [];
  const [getClass, { data: getClassData, loading: loadingClass }] = useMutation(
    GET_CLASS_QUERY,
    {
      update(_, { data: { getClass } }) {
        classUsers.splice(0, classUsers.length);
        for (var i = 0; i < getClass.users.length; i++) {
          classUsers.push(getClass.users[i]);
        }
      }
    }
  );

  const [createClass, { loading }] = useMutation(ADD_CLASS_MUTATION, {
    update(_, { data: { createClass: classData } }) {
      values.code = "";
      getClasses.splice(0, getClasses.length);
      for (var i = 0; i < classData.length; i++) {
        getClasses.push(classData[i]);
      }

      setAddClassModal(false);
    },
    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values
  });

  const [deleteClass] = useMutation(DELETE_CLASS_MUTATION, {
    update(_, { data: { deleteClass: deleteData } }) {
      getClasses.splice(0, getClasses.length);
      for (var i = 0; i < deleteData.length; i++) {
        getClasses.push(deleteData[i]);
      }
      setDisplayClassModal(false);
    }
  });

  function addClassCallback() {
    createClass();
  }

  function getDisplayClass(classCode) {
    setDisplayClass(classCode);
  }

  function getDisplayUsers(users) {
    setDisplayUsers(users);
  }

  var filteredRes = [];

  return (
    <div className="body">
      <Title title="Class Sharing" />
      <Container>
        <Grid stackable verticalAlign="top">
          <Grid.Row>
            <Grid.Column width={5}>
              <h2>My Schedule</h2>
              <Button
                content="Add Class"
                icon="plus"
                labelPosition="left"
                onClick={() => openModal("addClass")}
              />{" "}
              {getClasses.length > 0 ? (
                <Table selectable striped unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell width={8} textAlign="left">
                        Course Code
                      </Table.HeaderCell>
                      <Table.HeaderCell />
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {getClasses &&
                      getClasses.map(classTemp => (
                        <Table.Row>
                          <Table.Cell
                            textAlign="left"
                            width={5}
                            onClick={() => {
                              getDisplayClass(classTemp.code);
                              getClass({
                                variables: {
                                  code: classTemp.code
                                }
                              });
                              getDisplayUsers(classUsers);
                              openModal("displayClass");
                            }}
                            key={classTemp.code}
                          >
                            {classTemp.code}
                          </Table.Cell>
                          <Table.Cell width={3}>
                            <Button
                              size="mini"
                              floated="right"
                              color="red"
                              onClick={() => {
                                deleteClass({
                                  variables: {
                                    code: classTemp.code,
                                    username
                                  }
                                });
                                window.location.reload();
                              }}
                              icon="times"
                            />
                          </Table.Cell>
                        </Table.Row>
                      ))}
                  </Table.Body>{" "}
                </Table>
              ) : (
                <Segment placeholder compact>
                  <Header icon textAlign="center">
                    <p>It seems like there are no classes at this moment.</p>
                  </Header>
                </Segment>
              )}{" "}
            </Grid.Column>
            <Grid.Column width={11}>
              <h2>My Matches</h2>
              <p></p>
              {getMatches.length > 0 ? (
                <div>
                  <Responsive {...Responsive.onlyComputer}>
                    <Card.Group itemsPerRow={3}>
                      <MatchCards
                        getClasses={getClasses}
                        getMatches={getMatches}
                      />
                    </Card.Group>
                  </Responsive>
                  <Responsive {...Responsive.onlyTablet}>
                    <Card.Group itemsPerRow={2}>
                      <MatchCards
                        getClasses={getClasses}
                        getMatches={getMatches}
                      />
                    </Card.Group>
                  </Responsive>
                  <Responsive {...Responsive.onlyMobile}>
                    <Card.Group itemsPerRow={1}>
                      <MatchCards
                        getClasses={getClasses}
                        getMatches={getMatches}
                      />
                    </Card.Group>
                  </Responsive>
                </div>
              ) : (
                <Segment placeholder>
                  <Header icon>
                    <i className="far fa-frown"></i>
                    <p>It seems like there are no matches at this moment.</p>
                  </Header>
                </Segment>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Modal open={addClassModal} size="tiny">
        <Modal.Header>
          <h2>Add Class</h2>
        </Modal.Header>
        <Grid>
          <Grid.Column>
            <Grid.Row>
              <Modal.Content>
                <Container>
                  <Modal.Description>
                    {" "}
                    {Object.keys(errors).length > 0 && (
                      <div className="ui error message">
                        <ul className="list">
                          {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                          ))}{" "}
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
                        label="Course Code"
                        name="code"
                        value={values.code}
                        onChange={onChange}
                      />
                      <Button
                        type="reset"
                        color="grey"
                        onClick={() => closeModal("addClass")}
                      >
                        Cancel
                      </Button>
                      <Button
                        floated="right"
                        type="submit"
                        onClick={() => window.location.reload()}
                      >
                        Add
                      </Button>
                    </Form>
                  </Modal.Description>
                </Container>
              </Modal.Content>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Modal>

      <Modal open={displayClassModal} closeOnEscape={true} size="tiny">
        <Modal.Header>
          <h2> {displayClass}</h2>
        </Modal.Header>
        <Grid>
          <Grid.Column>
            <Grid.Row>
              <Modal.Content>
                <Modal.Description>
                  <Table striped unstackable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell width={5}>Email</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {" "}
                      {displayUsers.map(userTemp => (
                        <Table.Row key={userTemp.email}>
                          <Table.Cell>
                            {" "}
                            {userTemp.firstName + " " + userTemp.lastName}{" "}
                          </Table.Cell>
                          <Table.Cell>
                            <a
                              href={"mailto:" + userTemp.email}
                              className="link-email"
                            >
                              {userTemp.email}
                            </a>
                          </Table.Cell>
                        </Table.Row>
                      ))}{" "}
                    </Table.Body>
                  </Table>
                  <Button
                    type="reset"
                    color="grey"
                    onClick={() => closeModal("displayClass")}
                  >
                    Cancel
                  </Button>
                  <Button
                    floated="right"
                    color="red"
                    onClick={() =>
                      deleteClass({
                        variables: {
                          code: displayClass,
                          username
                        }
                      })
                    }
                  >
                    Remove Class
                  </Button>
                </Modal.Description>
              </Modal.Content>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Modal>
    </div>
  );
}

const ADD_CLASS_MUTATION = gql`
  mutation createClass($code: String!, $username: String!) {
    createClass(createClassInput: { code: $code, username: $username }) {
      code
    }
  }
`;

const DELETE_CLASS_MUTATION = gql`
  mutation deleteClass($code: String!, $username: String!) {
    deleteClass(deleteClassInput: { code: $code, username: $username }) {
      code
    }
  }
`;

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      classes {
        code
      }
    }
  }
`;

const GET_CLASS_QUERY = gql`
  mutation getClass($code: String!) {
    getClass(code: $code) {
      code
      users {
        firstName
        lastName
        email
      }
    }
  }
`;

const GET_MATCHES_QUERY = gql`
  query getMatches($username: String!) {
    getMatches(username: $username) {
      username
      firstName
      lastName
      email
      major
      year
      photo
      classes {
        code
      }
    }
  }
`;

export default ClassSharing;