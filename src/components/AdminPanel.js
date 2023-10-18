import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Title({permission}) {
  return (
    <>
        {(permission.includes("super") || permission.includes("members")) &&
        <Grid.Column>
          <NavLink to="/admin/members">
            <Segment inverted color="red" textAlign="center">
              <i className="fas fa-admin fa-users"></i>
              <p className="text-admin">Members</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("events")) &&
        <Grid.Column>
          <NavLink to="/admin/events">
            <Segment inverted color="orange" textAlign="center">
              <i className="fas fa-admin fa-calendar-alt"></i>
              <p className="text-admin">Events</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("adminResources")) &&
        <Grid.Column>
          <NavLink to="/admin/admin-resources">
            <Segment inverted color="yellow" textAlign="center">
              <i className="fas fa-admin fa-briefcase"></i>
              <p className="text-admin">Resources</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("requests")) &&
        <Grid.Column>
          <NavLink to="/admin/requests">
            <Segment inverted color="olive" textAlign="center">
              <i className="fas fa-admin fa-check-square"></i>
              <p className="text-admin">Requests</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("statistics")) &&
        <Grid.Column>
          <NavLink to="/admin/statistics">
            <Segment inverted color="green" textAlign="center">
              <i className="fas fa-admin fa-chart-bar"></i>
              <p className="text-admin">Statistics</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("corporatedatabase")) &&
        <Grid.Column>
          <NavLink to="/admin/corporatedatabase">
            <Segment inverted color="teal" textAlign="center">
              <i className="fas fa-admin fa-building"></i>
              <p className="text-admin">Corporate Database</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("reimbursements")) &&
        <Grid.Column>
          <NavLink to="/admin/reimbursements">
            <Segment inverted color="blue" textAlign="center">
              <i className="far fa-admin fa-money-bill-alt"></i>
              <p className="text-admin">Reimbursements</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("rental")) &&
        <Grid.Column>
          <NavLink to="/admin/receipts">
            <Segment inverted color="violet" textAlign="center">
              <i className="fas fa-admin fa-shopping-cart"></i>
              <p className="text-admin">SHPE Rentals</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
        {(permission.includes("super") || permission.includes("archive")) &&
        <Grid.Column>
          <NavLink to="/admin/archives">
            <Segment inverted color="grey" textAlign="center">
              <i className="fas fa-admin fa-archive"></i>
              <p className="text-admin">Archive</p>
            </Segment>
          </NavLink>
        </Grid.Column>}
    </>
  );
}

export default Title;