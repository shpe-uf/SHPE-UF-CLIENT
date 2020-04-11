import React, { useContext, useState } from "react";
import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Grid,
  Card,
  Responsive
} from "semantic-ui-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import BookmarkedTaskCard from "../components/BookmarkedTaskCard";

import { FETCH_TASKS_QUERY } from "../util/graphql";

function BookmarkedTasksCards({ user, refetch }) {
  const [errors, setErrors] = useState({});

  const { loading, data } = useQuery(FETCH_TASKS_QUERY);
  console.log("test for data", data);

  const bookmarkedTasks = [];
  if (!loading) {
    var tasks = data.getTasks;
    console.log("tasks: ", tasks);
    var bookmarkedTaskNames = user.bookmarkedTasks;
    // console.log("bookmarked task names", bookmarkedTaskNames);
    for (const [index, value] of bookmarkedTaskNames.entries()) {
      console.log("value", value);
      const task = tasks.find(element => element.name === value);
      bookmarkedTasks.push(task);
    }
  }

  console.log("bookmarked tasks", bookmarkedTasks);

  var {
    user: { username }
  } = useContext(AuthContext);

  return (
    <>
      {" "}
      <Dimmer active={bookmarkedTasks ? false : true} inverted>
        {" "}
        <Loader />
      </Dimmer>
      {!bookmarkedTasks || bookmarkedTasks.length === 0 ? (
        <Segment placeholder="placeholder">
          <Header icon="icon">
            <i className="fas fa-inbox"></i>
            <p>It seems you haven't bookmarked any tasks yet...</p>
          </Header>
        </Segment>
      ) : (
        <Grid.Row centered="centered">
          <Responsive {...Responsive.onlyComputer}>
            <Card.Group itemsPerRow={3}>
              <BookmarkedTaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Responsive>
          <Responsive {...Responsive.onlyTablet}>
            <Card.Group itemsPerRow={2}>
              <BookmarkedTaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Responsive>
          <Responsive {...Responsive.onlyMobile}>
            <Card.Group itemsPerRow={1}>
              <BookmarkedTaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Responsive>
        </Grid.Row>
      )}{" "}
    </>
  );
}


export default BookmarkedTasksCards;
