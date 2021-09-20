import React from "react";
import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Grid,
  Card,
  Responsive,
} from "semantic-ui-react";

import "react-toastify/dist/ReactToastify.css";

import { useQuery } from "@apollo/react-hooks";

import TaskCard from "../components/TaskCard";

import { FETCH_TASKS_QUERY } from "../util/graphql";

function TasksCards({ user, refetch }) {
  let tasks = [];
  let { data } = useQuery(FETCH_TASKS_QUERY);
  if (data) {
    tasks = data.getTasks;
  }

  return (
    <>
      {" "}
      <Dimmer active={tasks ? false : true} inverted>
        {" "}
        <Loader active>
          Loading unbookmarked tasks, please wait...
        </Loader>
      </Dimmer>
      {!tasks || tasks.length === 0 ? (
        <Segment placeholder="placeholder">
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems there aren't any tasks yet...</p>
          </Header>
        </Segment>
      ) : (
        <Grid.Row centered="centered">
          <Responsive {...Responsive.onlyComputer}>
            <Card.Group itemsPerRow={3}>
              <TaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Responsive>
          <Responsive {...Responsive.onlyTablet}>
            <Card.Group itemsPerRow={2}>
              <TaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Responsive>
          <Responsive {...Responsive.onlyMobile}>
            <Card.Group itemsPerRow={1}>
              <TaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Responsive>
        </Grid.Row>
      )}{" "}
    </>
  );
}

export default TasksCards;
