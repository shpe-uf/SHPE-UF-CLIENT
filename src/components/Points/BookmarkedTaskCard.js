import React, { useContext } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../../context/auth";
import { FETCH_TASKS_QUERY } from "../../util/graphql";

function BookmarkedTaskCard({ user, refetch }) {
  const [unBookmarkTask] = useMutation(UNBOOKMARK_TASK_MUTATION);

  const { loading, data } = useQuery(FETCH_TASKS_QUERY);

  const bookmarkedTasks = [];
  if (!loading) {
    var tasks = data.getTasks;
    var bookmarkedTaskNames = user.bookmarkedTasks;
    for (const [_, value] of bookmarkedTaskNames.entries()) {
      const task = tasks.find((element) => element.name === value);
      bookmarkedTasks.push(task);
    }
  }

  var {
    user: { username },
  } = useContext(AuthContext);

  const [redeemTasksPoints] = useMutation(REDEEM_TASK_POINTS_MUTATION, {
    update(_, { data: { redeemTasksPoints: userData } }) {},

    onError(err) {
      toast.error(err.graphQLErrors[0].extensions.exception.errors.general, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    },
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
              <div style={{ float: "right", transform: "translateY(15%)" }}>
                <Button
                  icon
                  inverted
                  color="blue"
                  floated="right"
                  size="big"
                  onClick={async () => {
                    await unBookmarkTask({
                      variables: {
                        name: task.name,
                        username: username,
                      },
                    });
                    refetch();
                  }}
                >
                  <Icon name="bookmark" />
                </Button>
              </div>
            </Card.Content>
            <Card.Content>
              <Card.Meta
                style={{
                  clear: "left",
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
                      username: username,
                    },
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
    unBookmarkTask(unBookmarkTaskInput: { name: $name, username: $username }) {
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
