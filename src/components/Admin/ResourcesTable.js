import React, { useState } from "react";
import {
  Button,
  Dimmer,
  Grid,
  Header,
  Icon,
  Loader,
  Modal,
  Segment,
  Table,
} from "semantic-ui-react";

import DeleteModal from "../Modal/DeleteModal";

function ResourcesTable({ resources }) {
  const [resourceInfoModal, setResourceInfoModal] = useState(false);
  const [deleteResourceModal, setDeleteResourceModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState({});

  return (
    <>
      <Dimmer active={resources ? false : true} inverted>
        <Loader />
      </Dimmer>
      {resources === undefined || resources === null || resources.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no resources at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Created</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Info</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {resources &&
                resources.map((resource, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{resource.title}</Table.Cell>
                    <Table.Cell>{resource.createdAt}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setSelectedResource(resource);
                          setResourceInfoModal(true);
                        }}
                        color="blue"
                      >
                        <Icon name="info" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        onClick={() => {
                          setSelectedResource(resource);
                          setDeleteResourceModal(true);
                        }}
                        color="red"
                      >
                        <Icon name="x" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}

      <Modal
        open={resourceInfoModal}
        size="small"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Resource Information</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <h3>Title</h3>
                {selectedResource.title}
                <h3>Description</h3>
                <p>{selectedResource.description}</p>
                <h3>Link</h3>
                <a href={selectedResource.link} target="_blank">{selectedResource.link}</a>
                <h3>Image</h3>
                <a href={selectedResource.image} target="_blank">{selectedResource.image}</a>
                <br/>
                <br/>
                <Button
                  type="reset"
                  color="grey"
                  onClick={() => setResourceInfoModal(false)}
                >
                  Close
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>

      <DeleteModal
        open={deleteResourceModal}
        close={() => setDeleteResourceModal(false)}
        deleteItem={selectedResource.title}
        deleteId={selectedResource.id}
        type="resource"
      />
    </>
  );
}

export default ResourcesTable;
