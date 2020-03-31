import React, { useContext, useState } from "react";
import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Grid,
  Card,
  Button,
  Responsive
} from "semantic-ui-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import TaskCard from "../components/TaskCard";

import { FETCH_TASKS_QUERY } from "../util/graphql";

function TasksCards({ user }) {
  const [errors, setErrors] = useState({});
  var tasks = useQuery(FETCH_TASKS_QUERY).data.getTasks;

  var {
    user: { username }
  } = useContext(AuthContext);

  return (
    <>
      {" "}
      <Dimmer active={tasks ? false : true} inverted>
        {" "}
        <Loader />
      </Dimmer>
      {tasks === undefined || tasks.length === 0 ? (
        <Segment placeholder="placeholder">
          <Header icon="icon">
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no tasks at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <Grid.Row centered="centered">
          <Responsive {...Responsive.onlyComputer}>
            <Card.Group itemsPerRow={3}>
              <TaskCard user={user} />
            </Card.Group>
          </Responsive>
          <Responsive {...Responsive.onlyTablet}>
            <Card.Group itemsPerRow={2}>
              <TaskCard user={user} />
            </Card.Group>
          </Responsive>
          <Responsive {...Responsive.onlyMobile}>
            <Card.Group itemsPerRow={1}>
              <TaskCard user={user} />
            </Card.Group>
          </Responsive>
        </Grid.Row>
      )}{" "}
    </>
  );
}

export default TasksCards;
