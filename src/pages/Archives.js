import React, { useState } from "react";
import { Container, Grid, Button, Modal } from "semantic-ui-react";

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

  return (
    <>
      <Title title="Archives" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={() => openModal("deleteSHPE")}>
                Delete the entire website
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Modal open={deleteSHPEModal} size="tiny">
        <Modal.Header>
          <h2>SHPE is now deleted</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Button
                  type="reset"
                  color="grey"
                  onClick={() => closeModal("deleteSHPE")}
                >
                  Okay
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default Archives;
