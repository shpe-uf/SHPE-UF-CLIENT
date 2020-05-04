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
  Table
} from "semantic-ui-react";

import Title from "../components/Title";

function Archives() {
  const [deleteSHPEModal, setDeleteSHPEModal] = useState(false);

  const openModal = name => {
    if (name === "deleteSHPE") {
      setDeleteSHPEModal(true);
    }
  };

  const closeModal = name => {
    if (name === "deleteSHPE") {
      setDeleteSHPEModal(false);
    }
  };

  var membershipPane = {
    menuItem: { content: "Membership", icon: "users" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="green">Download as a CSV</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table striped selectable unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Membership</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row key={2}>
                  <Table.Cell>Fulano Mengano</Table.Cell>
                  <Table.Cell>User</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  };

  var listServPane = {
    menuItem: { content: "List Serv", icon: "address book outline" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="green">Download as a CSV</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table striped selectable unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>ListServ</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row key={2}>
                  <Table.Cell>Fulano Mengano</Table.Cell>
                  <Table.Cell>Yes</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  };

  var graduatingPane = {
    menuItem: { content: "Graduating", icon: "graduation" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="green">Download as a CSV</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table striped selectable unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row key={1}>
                  <Table.Cell>Eddy, unfortunately</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  };

  var alumniPane = {
    menuItem: { content: "Alumni", icon: "suitcase" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="green">Download as a CSV</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Table striped selectable unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row key={1}>
                  <Table.Cell>Cesar, fortunately</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  };

  var dangerPane = {
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
    )
  };

  return (
    <div className="body">
      <Title title="Archives" adminPath={window.location.pathname} />
      <Segment basic>
        <Container>
          <Tab
            panes={[
              membershipPane,
              listServPane,
              graduatingPane,
              alumniPane,
              dangerPane
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
                  onClick={() => closeModal("deleteSHPE")}
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
    </div>
  );
}

export default Archives;