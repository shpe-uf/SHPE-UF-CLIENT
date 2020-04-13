import React, { useState } from "react";
import {
  Container,
  Grid,
  Button,
  Modal,
  Card,
  Tab,
  Segment,
  Input
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
            <p>*membership status will be here*</p>
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
            <p>*List serv will be here*</p>
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
            <h3>Cesar and Eddy, I guess</h3>
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
            <h3>*Alumni stuff will be here*</h3>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  };

  var dangerPane = {
    menuItem: { content: "Danger Zone", icon: "warning sign" },
    render: () => (
      <Tab.Pane>
        <Grid>
          <Grid.Row>
            <h2>Delete All of the Databases</h2>
          </Grid.Row>
          <Grid.Row>
            <p>
              By pressing the Wipe Databases button, you will permanently delete
              all the information in this website. Once deleted, there is no
              coming back. Please be certain of the consequences.
            </p>
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
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <p>This action cannot be undone, are you sure?</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p>
                  Type "I am sure that I want to delete all databases" below to
                  confirm
                </p>
                <Input focus placeholder="Type here..." />
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
