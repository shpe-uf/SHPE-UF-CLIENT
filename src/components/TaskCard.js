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

import { FETCH_TASKS_QUERY } from "../util/graphql";

function TaskCard({ user }) {
  const [bookmarkTask] = useMutation(BOOKMARK_TASK_MUTATION);

  const [errors, setErrors] = useState({});

  const { loading, data } = useQuery(FETCH_TASKS_QUERY);
  const tasks = [];

  if (data && data.getTasks) {
    var allTasks = data.getTasks;
    var bookmarkedTaskNames = user.bookmarkedTasks;
    for (const [index, value] of allTasks.entries()) {
      console.log(index, value);
      const task = value;
      const taskName = bookmarkedTaskNames.find(
        element => element === task.name
      );
      if (!taskName) {
        console.log(task);
        tasks.push(task);
      }
    }
  }

  var {
    user: { username }
  } = useContext(AuthContext);

  const [redeemTasksPoints] = useMutation(REDEEM_TASK_POINTS_MUTATION, {
    update(
      _,
      {
        data: { redeemTasksPoints: userData }
      }
    ) {},

    onError(err) {
      toast.error(err.graphQLErrors[0].extensions.exception.errors.general, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    }
  });

  return (
    <>
      {tasks &&
        tasks.map((task, index) => (
          <Card color="blue" key={index}>
            <Card.Content>
              <div style={{ float: "left" }}>
                <h5>{task.name}</h5>
                <b>
                  <p>Point(s): {task.points}</p>
                </b>
              </div>
              <div style={{ float: "right", transform: "translateY(15%)" }}>
                <Button
                  fluid="fluid"
                  basic="basic"
                  color="blue"
                  floated="right"
                  width="3"
                  onClick={() => {
                    bookmarkTask({
                      variables: {
                        name: task.name,
                        username: username
                      }
                    });
                  }}
                >
                  Bookmark
                </Button>
              </div>
            </Card.Content>
            <Card.Content>
              <Card.Meta
                style={{
                  clear: "left"
                }}
              >
                {task.startDate}- {task.endDate}
              </Card.Meta>
            </Card.Content>
            <Card.Content>{task.description}</Card.Content>
            <Card.Content>
              <Button
                fluid="fluid"
                basic="basic"
                color="green"
                onClick={() => {
                  redeemTasksPoints({
                    variables: {
                      name: task.name,
                      username: username
                    }
                  });
                }}
              >
                Request
              </Button>
            </Card.Content>
          </Card>
        ))}{" "}
    </>
  );
}

const BOOKMARK_TASK_MUTATION = gql`
  mutation bookmarkTask($name: String!, $username: String!) {
    bookmarkTask(name: $name, username: $username) {
      bookmarkedTasks
    }
  }
`;

const REDEEM_TASK_POINTS_MUTATION = gql`
  mutation redeemTasksPoints($name: String!, $username: String!) {
    redeemTasksPoints(
      redeemTasksPointsInput: { name: $name, username: $username }
    ) {
      firstName
      lastName
    }
  }
`;

export default TaskCard;
