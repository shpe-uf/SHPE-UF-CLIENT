import React, {useContext} from "react";
import {
  Segment,
  Header,
  Grid,
  Card,
  Responsive,
  Dimmer,
  Loader
} from "semantic-ui-react";

import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {useQuery, useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";

import TaskCard from "../components/TaskCard";

import {FETCH_TASKS_QUERY} from "../util/graphql";

function TasksCards({user, refetch}) {
  var tasks = useQuery(FETCH_TASKS_QUERY).data.getTasks;

  const [redeemTasksPoints] = useMutation(REDEEM_TASK_POINTS_MUTATION, {
    update(_, {
      data: {
        redeemTasksPoints: userData
      }
    }) {
    },

    onError(err) {
      toast.error(err.graphQLErrors[0].extensions.exception.errors.general, {position: toast.POSITION.BOTTOM_CENTER});
    }

  });

  return (
    <>
      {" "}
      <Dimmer active={tasks ? false : true} inverted>
        {" "}
        <Loader />
      </Dimmer>
      {!tasks || tasks.length === 0 ? (
        <Segment placeholder="placeholder">
          <Header icon="icon">
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

const REDEEM_TASK_POINTS_MUTATION = gql`
  mutation redeemTasksPoints($name:String!, $username: String!){
    redeemTasksPoints(
      redeemTasksPointsInput: {name: $name, username: $username}
    ) {
      firstName
      lastName
    }
  }
`;

export default TasksCards;
