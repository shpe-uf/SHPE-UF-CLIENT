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

function BookmarkedTaskCard({ user }) {
  const [unBookmarkTask] = useMutation(UNBOOKMARK_TASK_MUTATION);

  const [errors, setErrors] = useState({});

  const { loading, data } = useQuery(FETCH_TASKS_QUERY);
  console.log("test for data", data);

  const bookmarkedTasks = [];

  if (data && data.getTasks) {
    var tasks = data.getTasks;
    console.log("tasks: ", tasks);
    var bookmarkedTaskNames = user.bookmarkedTasks;
    console.log("bookmarked task names", bookmarkedTaskNames);
    for (const [index, value] of bookmarkedTaskNames.entries()) {
      console.log(index, value);
      const task = tasks.find(element => element.name === value);
      bookmarkedTasks.push(task);
    }
  }
  console.log("bookmarked tasks", bookmarkedTasks);

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
      {bookmarkedTasks &&
        bookmarkedTasks.map((task, index) => (
          <Card color="blue" key={index}>
            <Card.Content>
              <div style={{ float: "left" }}>
                <h5>{task.name}</h5>
                <b>
                  <p>Point(s): {task.points}</p>
                </b>
              </div>
              <div style={{ float: "right", transform:"translateY(15%)"}}>
                <Button
                  fluid="fluid"
                  basic="basic"
                  color="blue"
                  floated="right"
                  width="3"
                  onClick={() => {
                    unBookmarkTask({
                      variables: {
                        name: task.name,
                        username: username
                      }
                    });
                  }}
                >
                  Delete Bookmark
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

const UNBOOKMARK_TASK_MUTATION = gql`
  mutation unBookmarkTask($name: String!, $username: String!) {
    unBookmarkTask(name: $name, username: $username) {
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

export default BookmarkedTaskCard;
