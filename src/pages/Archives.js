import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Input,
  Modal,
  Segment,
  Tab,
} from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";

import Title from "../components/Title";
import MembershipTable from "../components/MembershipTable";
import ListServTable from "../components/ListServTable";
import GraduatingTable from "../components/GraduatingTable";
import AlumniTable from "../components/AlumniTable";

import { FETCH_USERS_QUERY } from "../util/graphql";
import { FETCH_ALUMNIS_QUERY } from "../util/graphql";
import { CSVLink } from "react-csv";

function Archives() {
  const usersUnfiltered = useQuery(FETCH_USERS_QUERY).data.getUsers;
  const users = usersUnfiltered
    ? usersUnfiltered.map(
        ({ photo, createdAt, events, __typename, ...item }) => item
      )
    : [];

  const alumniUnfiltered = useQuery(FETCH_ALUMNIS_QUERY).data.getAlumnis;
  const alumni = alumniUnfiltered
    ? alumniUnfiltered.map(
        ({ undergrad, grad, location, coordinates, __typename, ...item }) =>
          item
      )
    : [];

  const lists = {
    membership: users,
    listserv: users ? users.filter((user) => user.listServ === true) : [],
    graduating: users
      ? users.filter((user) => user.graduating !== "Not Graduating")
      : [],
    alumni: alumni,
  };

  const userHeaders = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Major", key: "major" },
    { label: "Graduating", key: "graduating" },
    { label: "Country", key: "country" },
    { label: "Ethnicity", key: "ethnicity" },
    { label: "Sex", key: "sex" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Points", key: "points" },
    { label: "Fall Points", key: "fallPoints" },
    { label: "Spring Points", key: "springPoints" },
    { label: "Summer Points", key: "summerPoints" },
    { label: "Permission", key: "permission" },
    { label: "ListServ", key: "listServ" },
  ];
  const alumniHeaders = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Employer", key: "employer" },
    { label: "Position", key: "position" },
    { label: "LinkedIn", key: "linkedin" },
  ];

  const [deleteSHPEModal, setDeleteSHPEModal] = useState(false);
  const [deleteDoneModal, setDeleteDoneModal] = useState(false);

  const openModal = (name) => {
    if (name === "deleteSHPE") {
      setDeleteSHPEModal(true);
    }
    if (name === "deleteDone") {
      setDeleteDoneModal(true);
    }
  };

  const closeModal = (name) => {
    if (name === "deleteSHPE") {
      setDeleteSHPEModal(false);
    }
    if (name === "deleteDone") {
      setDeleteDoneModal(false);
    }
  };

  const membershipPane = {
    menuItem: { content: "Membership", icon: "users" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <CSVLink
                data={users ? lists.membership : []}
                headers={userHeaders}
                filename={"Membership.csv"}
              >
                <Button color="green" floated="left">
                  Download as CSV
                </Button>
              </CSVLink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <MembershipTable users={users} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  };

  const listServPane = {
    menuItem: { content: "List Serv", icon: "address book outline" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <CSVLink
                data={users ? lists.listserv : []}
                headers={userHeaders}
                filename={"ListServ.csv"}
              >
                <Button color="green" floated="left">
                  Download as CSV
                </Button>
              </CSVLink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ListServTable users={users} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  };

  const graduatingPane = {
    menuItem: { content: "Graduating", icon: "graduation" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <CSVLink
                data={users ? lists.graduating : []}
                headers={userHeaders}
                filename={"Graduating.csv"}
              >
                <Button color="green" floated="left">
                  Download as CSV
                </Button>
              </CSVLink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <GraduatingTable users={users} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  };

  const alumniPane = {
    menuItem: { content: "Alumni", icon: "suitcase" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <CSVLink
                data={alumni ? lists.alumni : []}
                headers={alumniHeaders}
                filename={"Alumni.csv"}
              >
                <Button color="green" floated="left">
                  Download as CSV
                </Button>
              </CSVLink>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <AlumniTable alumnis={alumniUnfiltered} />
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  };

  const dangerPane = {
    menuItem: { content: "Danger Zone", icon: "warning sign" },
    render: () => (
      <Tab.Pane>
        <Grid columns={2}>
          <Grid.Row>
            <h2>Delete All of the Databases</h2>
          </Grid.Row>
          <Grid.Row>
            <p>
              By pressing the Wipe Databases button, you will permanently delete
              all the information in this website. Once deleted, there is no
              coming back. Please make sure that you have downloaded every
              database in the archives before deleting them.
            </p>
            <Grid.Column>
              <Checkbox label="I have downloaded the membership database" />
              <Checkbox label="I have downloaded the ListServ database" />
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="I have downloaded the Graduating Seniors database" />
              <Checkbox label="I have downloaded the Alumni database" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Button color="red" onClick={() => openModal("deleteSHPE")}>
              Wipe Databases
            </Button>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    ),
  };

  return (
    <div className="body">
      <Title title="Archives" adminPath={window.location.pathname} />
      <Segment basic>
        <Container>
          <Tab
            // onTabChange={onTabChange}
            panes={[
              membershipPane,
              listServPane,
              graduatingPane,
              alumniPane,
              dangerPane,
            ]}
          />
        </Container>
      </Segment>

      <Modal open={deleteSHPEModal} size="tiny">
        <Modal.Header>
          <h2>Confirm Deletion</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <p>This action cannot be undone, are you sure?</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Grid.Row>
                  <p>
                    Type "I am sure that I want to delete all databases" below
                    to confirm
                  </p>
                </Grid.Row>
                <Grid.Row>
                  <Input fluid focus placeholder="Type here..." />
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Button
                  type="reset"
                  color="red"
                  onClick={() => openModal("deleteDone")}
                >
                  Delete
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button
                  type="reset"
                  color="grey"
                  floated="right"
                  onClick={() => closeModal("deleteSHPE")}
                >
                  Cancel
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>

      <Modal open={deleteDoneModal} size="tiny">
        <Modal.Header>
          <h2>This SHPE empty...</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Button
                  type="reset"
                  color="grey"
                  floated="left"
                  onClick={() => closeModal("deleteDone")}
                >
                  YEET
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </div>
  );
}

export default Archives;
