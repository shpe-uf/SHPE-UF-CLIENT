import React from "react";
import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Grid,
  Card,
} from "semantic-ui-react";
import { Media } from "../Media";
import "react-toastify/dist/ReactToastify.css";

import { useQuery } from "@apollo/client";

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
          <Media greaterThan="computer">
            <Card.Group itemsPerRow={3}>
              <TaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Media>
          <Media at="tablet">
            <Card.Group itemsPerRow={2}>
              <TaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Media>
          <Media lessThan="tablet">
            <Card.Group itemsPerRow={1}>
              <TaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Media>
        </Grid.Row>
      )}{" "}
    </>
  );
}

export default TasksCards;
