import React, { useContext, useState } from "react";
import {
  Grid,
  Container,
  Button,
  Modal,
  Form,
  Menu,
  Segment
} from "semantic-ui-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { useForm } from "../util/hooks";
import { AuthContext } from "../context/auth";

import Title from "../components/Title";
import PointsBar from "../components/PointsBar";
import UserEventsTable from "../components/UserEventsTable";
import UserTasksTable from "../components/UserTasksTable";
import TasksCards from "../components/TasksCards";
import BookmarkedTasksCards from "../components/BookmarkedTasksCards";

function Points() {
  const [activeItem, setActiveItem] = useState("Your Points");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const [errors, setErrors] = useState({});
  var {
    user: { id, username }
  } = useContext(AuthContext);

  var {data, refetch} = useQuery(FETCH_USER_QUERY, {
    variables: {
      userId: id
    }
  });
  
  if(data){
    var user = data.getUser;
  }
  const [redeemPointsModal, setRedeemPointsModal] = useState(false);

  const openModal = name => {
    if (name === "redeemPoints") {
      setRedeemPointsModal(true);
    }
  };

  const closeModal = name => {
    if (name === "redeemPoints") {
      values.code = "";
      setErrors(false);
      setRedeemPointsModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(redeemPointsCallback, {
    code: "",
    username: username
  });

  const [redeemPoints, { loading }] = useMutation(REDEEM_POINTS_MUTATION, {
    update(
      _,
      {
        data: { redeemPoints: userData }
      }
    ) {
      values.code = "";
      setErrors(false);
      setRedeemPointsModal(false);
      updateGetUser(userData);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values
  });

  function redeemPointsCallback() {
    redeemPoints();
  }

  function updateGetUser(userData) {
    user.fallPoints = userData.fallPoints;
    user.springPoints = userData.springPoints;
    user.summerPoints = userData.summerPoints;
    user.events = userData.events;
    user.tasks = userData.tasks;
    user.message = userData.message;

    if (user.message !== "") {
      toast.warn(user.message, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    }
  }

  return (
    <div className="body">
      <Title title="Points Program" />
      <Container>
        <div>
          <ToastContainer />
        </div>
        <Menu attached="top" tabular>
          <Menu.Item
            name="Your Points"
            active={activeItem === "Your Points"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Tasks"
            active={activeItem === "Tasks"}
            onClick={handleItemClick}
          />
        </Menu>

        {activeItem === "Your Points" && (
          <Segment attached="bottom">
            <Grid stackable>
              {user && user.message && user.message !== undefined && (
                <Grid.Row>
                  <Grid.Column>
                    <div className="ui warning message">
                      <p>{user.message}</p>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              )}
              <Grid.Row>
                <Grid.Column>
                  <Button
                    content="Redeem Code"
                    icon="font"
                    labelPosition="left"
                    floated="right"
                    onClick={() => openModal("redeemPoints")}
                  />
                </Grid.Column>
              </Grid.Row>
              {user && (
                <>
                  <Grid.Row>
                    <Grid.Column>
                      <PointsBar user={user} />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <UserEventsTable user={user} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <UserTasksTable user={user} />
                    </Grid.Column>
                  </Grid.Row>
                </>
              )}
            </Grid>

            <Modal open={redeemPointsModal} size="tiny">
              <Modal.Header>
                <h2>Redeem Points</h2>
              </Modal.Header>
              <Modal.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
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
                          label="Event Code"
                          name="code"
                          value={values.code}
                          error={errors.code ? true : false}
                          onChange={onChange}
                        />
                        <Button
                          type="reset"
                          color="grey"
                          onClick={() => closeModal("redeemPoints")}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" floated="right">
                          Submit
                        </Button>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
            </Modal>
          </Segment>
        )}
        {activeItem === "Tasks" && (
          <Segment attached="bottom">
            <Grid stackable>
              {user && user.message && user.message !== undefined && (
                <Grid.Row>
                  <Grid.Column width={16}>
                    <div className="ui warning message">
                      <p>{user.message}</p>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              )}
              <Grid.Row>
                <h4>Bookmarked Tasks</h4>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <BookmarkedTasksCards user={user} refetch={refetch} />
                </Grid.Column>
              </Grid.Row>
              <h2></h2>
              <Grid.Row>
                <h4>Unbookmarked Tasks</h4>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <TasksCards user={user} refetch={refetch}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )}
      </Container>
    </div>
  );
}

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      firstName
      lastName
      points
      fallPoints
      springPoints
      summerPoints
      fallPercentile
      springPercentile
      summerPercentile
      events {
        name
        category
        createdAt
        points
      }
      tasks {
        name
        points
        createdAt
      }
      bookmarkedTasks
    }
  }
`;

const REDEEM_POINTS_MUTATION = gql`
  mutation redeemPoints($code: String!, $username: String!) {
    redeemPoints(redeemPointsInput: { code: $code, username: $username }) {
      points
      fallPoints
      springPoints
      summerPoints
      message
      events {
        id
        name
        category
        createdAt
        points
      }
      tasks {
        name
        points
        createdAt
      }
    }
  }
`;

export default Points;
