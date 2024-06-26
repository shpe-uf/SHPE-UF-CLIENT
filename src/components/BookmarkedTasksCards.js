import React, { useContext } from "react";
import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Grid,
  Card
} from "semantic-ui-react";
import { useQuery } from "@apollo/client";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext } from "../context/auth";
import BookmarkedTaskCard from "../components/BookmarkedTaskCard";
import { FETCH_TASKS_QUERY } from "../util/graphql";
import { Media } from "../Media"

function BookmarkedTasksCards({ user, refetch }) {
  const { loading, data } = useQuery(FETCH_TASKS_QUERY);

  const bookmarkedTasks = [];
  if (!loading && user) {
    var tasks = data.getTasks;
    var bookmarkedTaskNames = user.bookmarkedTasks;
    for (const [index, value] of bookmarkedTaskNames.entries()) {
      const task = tasks.find((element) => element.name === value);
      bookmarkedTasks.push(task);
    }
  }

  var {
    user: { username },
  } = useContext(AuthContext);

  return (
    <>
      {" "}
      <Dimmer active={bookmarkedTasks ? false : true} inverted>
        {" "}
        <Loader active>
          Loading bookmarked tasks, please wait...
        </Loader>
      </Dimmer>
      {!bookmarkedTasks || bookmarkedTasks.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems you haven't bookmarked any tasks yet...</p>
          </Header>
        </Segment>
      ) : (
        <Grid.Row centered="centered">
          <Media greaterThanOrEqual="computer">
            <Card.Group itemsPerRow={3}>
              <BookmarkedTaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Media>
          <Media at="tablet">
            <Card.Group itemsPerRow={2}>
              <BookmarkedTaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Media>
          <Media lessThan="tablet">
            <Card.Group itemsPerRow={1}>
              <BookmarkedTaskCard user={user} refetch={refetch} />
            </Card.Group>
          </Media>
        </Grid.Row>
      )}{" "}
    </>
  );
}

export default BookmarkedTasksCards;
