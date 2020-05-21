import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Title() {
  return (
    <>
        <Grid.Column>
          <NavLink to="/admin/members">
            <Segment inverted color="red" textAlign="center">
              <i className="fas fa-admin fa-users"></i>
              <p className="text-admin">Members</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/events">
            <Segment inverted color="orange" textAlign="center">
              <i className="fas fa-admin fa-calendar-alt"></i>
              <p className="text-admin">Events</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/tasks">
            <Segment inverted color="yellow" textAlign="center">
              <i className="fas fa-admin fa-tasks"></i>
              <p className="text-admin">Tasks</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/requests">
            <Segment inverted color="olive" textAlign="center">
              <i className="fas fa-admin fa-check-square"></i>
              <p className="text-admin">Requests</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/statistics">
            <Segment inverted color="green" textAlign="center">
              <i className="fas fa-admin fa-chart-bar"></i>
              <p className="text-admin">Statistics</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/corporatedatabase">
            <Segment inverted color="teal" textAlign="center">
              <i className="fas fa-admin fa-building"></i>
              <p className="text-admin">Corporate Database</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/">
            <Segment inverted color="blue" textAlign="center">
              <i className="far fa-admin fa-money-bill-alt"></i>
              <p className="text-admin">Reimbursements</p>
            </Segment>
          </NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink to="/admin/">
            <Segment inverted color="violet" textAlign="center">
              <i className="fas fa-admin fa-archive"></i>
              <p className="text-admin">Archive</p>
            </Segment>
          </NavLink>
        </Grid.Column>
    </>
  );
}

export default Title;
