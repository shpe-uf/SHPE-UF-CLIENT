import React, { useState } from "react";
import {
  Container,
  Grid,
  Tab,
  Table,
  Button,
  Modal,
  Form,
  Icon,
  Input,
  Popup,
} from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/client";
import { CSVLink } from "react-csv";

import Title from "../components/FrontPage/Title";
import gql from "graphql-tag";

import { FETCH_REIMBURSEMENTS_QUERY } from "../util/graphql";

var currentReimbursement;

function Reimbursements() {
  let reimbursements = [];
  let { data } = useQuery(FETCH_REIMBURSEMENTS_QUERY);
  if (data) {
    reimbursements = data.getReimbursements;
  }
  var pending = [];
  var resolved = [];
  var cancelled = [];

  if (reimbursements) {
    reimbursements.forEach((reimbursement) => {
      if (reimbursement.reimbursed === "pending") {
        pending.push(reimbursement);
      }
      if (reimbursement.reimbursed === "resolved") {
        resolved.push(reimbursement);
      }
      if (reimbursement.reimbursed === "cancelled") {
        cancelled.push(reimbursement);
      }
    });
  }

  const [search, defineSearch] = useState("");
  const [openResolveModal, setOpenResolveModal] = useState(false);
  const [openUnresolveModal, setOpenUnresolveModal] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const [openUnCancelModal, setOpenUnCancelModal] = useState(false);
  const [claimModal, setClaimModal] = useState(false);
  const [claim, setClaim] = useState({});

  const [resolve] = useMutation(RESOLVE_MUTATION);
  const [unresolve] = useMutation(UNRESOLVE_MUTATION);
  const [cancel] = useMutation(CANCEL_MUTATION);
  const [uncancel] = useMutation(UNCANCEL_MUTATION);

  function setSearch(e) {
    defineSearch(e.target.value);
  }

  const headers = [
    { label: "ID", key: "id" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Student ID", key: "studentId" },
    { label: "Address", key: "address" },
    { label: "Company", key: "company" },
    { label: "Event", key: "event" },
    { label: "Description", key: "description" },
    { label: "Amount", key: "amount" },
    { label: "Status", key: "reimbursed" },
  ];

  var pendingPane = {
    menuItem: { content: "Pending" },
    render: () => (
      <Tab.Pane>
        <CSVLink
          data={pending ? pending : []}
          headers={headers}
          filename={"pending_reimbursements.csv"}
        >
          <Popup
            content="Download CSV of all pending reimbursements"
            trigger={
              <Button color="green" fluid>
                Download Pending Reimbursements
              </Button>
            }
          />
        </CSVLink>
        <div className="table-responsive">
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Table striped selectable unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Student ID</Table.HeaderCell>
                      <Table.HeaderCell>Event</Table.HeaderCell>
                      <Table.HeaderCell>Amount</Table.HeaderCell>
                      <Table.HeaderCell>Resolve</Table.HeaderCell>
                      <Table.HeaderCell>Cancel</Table.HeaderCell>
                      <Table.HeaderCell>Info</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {reimbursements &&
                      reimbursements.map((reimbursement, index) => (
                        <>
                          {reimbursement.reimbursed === "pending" &&
                            ((
                              reimbursement.lastName +
                              ", " +
                              reimbursement.firstName
                            )
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                              reimbursement.studentId
                                .toString()
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.email
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.event
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.id
                                .toLowerCase()
                                .includes(search.toLowerCase())) && (
                              <Table.Row key={index}>
                                <Table.Cell>
                                  {reimbursement.lastName},{" "}
                                  {reimbursement.firstName}
                                </Table.Cell>
                                <Table.Cell>{reimbursement.email}</Table.Cell>
                                <Table.Cell>
                                  {reimbursement.studentId}
                                </Table.Cell>
                                <Table.Cell>{reimbursement.event}</Table.Cell>
                                <Table.Cell>{reimbursement.amount}</Table.Cell>
                                <Table.Cell>
                                  <Button
                                    icon
                                    onClick={() => {
                                      setOpenResolveModal(true);
                                      currentReimbursement = index;
                                    }}
                                  >
                                    <Icon name="check" />
                                  </Button>
                                </Table.Cell>
                                <Table.Cell>
                                  <Button
                                    icon
                                    color="red"
                                    onClick={() => {
                                      setOpenCancelModal(true);
                                      currentReimbursement = index;
                                    }}
                                  >
                                    <Icon name="cancel" />
                                  </Button>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                  <Button
                                    icon
                                    onClick={() => {
                                      setClaim(reimbursement);
                                      setClaimModal(true);
                                    }}
                                  >
                                    <Icon name="info" />
                                  </Button>
                                </Table.Cell>
                              </Table.Row>
                            )}
                        </>
                      ))}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Tab.Pane>
    ),
  };

  var resolvedPane = {
    menuItem: { content: "Resolved" },
    render: () => (
      <Tab.Pane>
        <CSVLink
          data={resolved ? resolved : []}
          headers={headers}
          filename={"resolved_reimbursements.csv"}
        >
          <Popup
            content="Download CSV of all resolved reimbursements"
            trigger={
              <Button color="green" fluid>
                Download Resolved Reimbursements
              </Button>
            }
          />
        </CSVLink>
        <div className="table-responsive">
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Table striped selectable unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Student ID</Table.HeaderCell>
                      <Table.HeaderCell>Event</Table.HeaderCell>
                      <Table.HeaderCell>Amount</Table.HeaderCell>
                      <Table.HeaderCell>Unresolve</Table.HeaderCell>
                      <Table.HeaderCell>Info</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {reimbursements &&
                      reimbursements.map((reimbursement, index) => (
                        <>
                          {reimbursement.reimbursed === "resolved" &&
                            ((
                              reimbursement.lastName +
                              ", " +
                              reimbursement.firstName
                            )
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                              reimbursement.studentId
                                .toString()
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.email
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.event
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.id
                                .toLowerCase()
                                .includes(search.toLowerCase())) && (
                              <Table.Row key={index}>
                                <Table.Cell>
                                  {reimbursement.lastName},{" "}
                                  {reimbursement.firstName}
                                </Table.Cell>
                                <Table.Cell>{reimbursement.email}</Table.Cell>
                                <Table.Cell>
                                  {reimbursement.studentId}
                                </Table.Cell>
                                <Table.Cell>{reimbursement.event}</Table.Cell>
                                <Table.Cell>{reimbursement.amount}</Table.Cell>
                                <Table.Cell>
                                  <Button
                                    onClick={() => {
                                      setOpenUnresolveModal(true);
                                      currentReimbursement = index;
                                    }}
                                  >
                                    Unresolve
                                  </Button>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                  <Button
                                    icon
                                    onClick={() => {
                                      setClaim(reimbursement);
                                      setClaimModal(true);
                                    }}
                                  >
                                    <Icon name="info" />
                                  </Button>
                                </Table.Cell>
                              </Table.Row>
                            )}
                        </>
                      ))}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Tab.Pane>
    ),
  };

  var cancelledPane = {
    menuItem: { content: "Cancelled" },
    render: () => (
      <Tab.Pane>
        <CSVLink
          data={cancelled ? cancelled : []}
          headers={headers}
          filename={"cancelled_reimbursements.csv"}
        >
          <Popup
            content="Download CSV of all cancelled reimbursements"
            trigger={
              <Button color="green" fluid>
                Download Cancelled Reimbursements
              </Button>
            }
          />
        </CSVLink>
        <div className="table-responsive">
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Table striped selectable unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                      <Table.HeaderCell>Student ID</Table.HeaderCell>
                      <Table.HeaderCell>Event</Table.HeaderCell>
                      <Table.HeaderCell>Amount</Table.HeaderCell>
                      <Table.HeaderCell>Unresolve</Table.HeaderCell>
                      <Table.HeaderCell>Info</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {reimbursements &&
                      reimbursements.map((reimbursement, index) => (
                        <>
                          {reimbursement.reimbursed === "cancelled" &&
                            ((
                              reimbursement.lastName +
                              ", " +
                              reimbursement.firstName
                            )
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                              reimbursement.studentId
                                .toString()
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.email
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.event
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                              reimbursement.id
                                .toLowerCase()
                                .includes(search.toLowerCase())) && (
                              <Table.Row key={index}>
                                <Table.Cell>
                                  {reimbursement.lastName},{" "}
                                  {reimbursement.firstName}
                                </Table.Cell>
                                <Table.Cell>{reimbursement.email}</Table.Cell>
                                <Table.Cell>
                                  {reimbursement.studentId}
                                </Table.Cell>
                                <Table.Cell>{reimbursement.event}</Table.Cell>
                                <Table.Cell>{reimbursement.amount}</Table.Cell>
                                <Table.Cell>
                                  <Button
                                    onClick={() => {
                                      setOpenUnCancelModal(true);
                                      currentReimbursement = index;
                                    }}
                                  >
                                    Uncancel
                                  </Button>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                  <Button
                                    icon
                                    onClick={() => {
                                      setClaim(reimbursement);
                                      setClaimModal(true);
                                    }}
                                  >
                                    <Icon name="info" />
                                  </Button>
                                </Table.Cell>
                              </Table.Row>
                            )}
                        </>
                      ))}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Tab.Pane>
    ),
  };

  return (
    <>
      <Title title="Reimbursements" adminPath={window.location.pathname} />
      <Container className="body">
        <Modal open={openResolveModal} size="tiny">
          <Modal.Header>
            Are you sure this reimbursement has been resolved?
          </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form>
                    <Button
                      type="reset"
                      color="red"
                      onClick={() => setOpenResolveModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => {
                        resolve({
                          variables: {
                            id: reimbursements[currentReimbursement].id,
                            email: reimbursements[currentReimbursement].email,
                          },
                        });

                        reimbursements[currentReimbursement].reimbursed =
                          "resolved";
                        setOpenResolveModal(false);
                      }}
                    >
                      Resolve
                    </Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        <Modal open={openUnresolveModal} size="tiny">
          <Modal.Header>
            Are you sure you want to unresolve this reimbursement?
          </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form>
                    <Button
                      type="reset"
                      color="red"
                      onClick={() => setOpenUnresolveModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => {
                        unresolve({
                          variables: {
                            id: reimbursements[currentReimbursement].id,
                            email: reimbursements[currentReimbursement].email,
                          },
                        });

                        reimbursements[currentReimbursement].reimbursed =
                          "pending";
                        setOpenUnresolveModal(false);
                      }}
                    >
                      Unresolve
                    </Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        <Modal open={openCancelModal} size="tiny">
          <Modal.Header>
            Are you sure you want to cancel this reimbursement?
          </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form>
                    <Button
                      type="reset"
                      color="red"
                      onClick={() => setOpenCancelModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => {
                        cancel({
                          variables: {
                            id: reimbursements[currentReimbursement].id,
                            email: reimbursements[currentReimbursement].email,
                          },
                        });

                        reimbursements[currentReimbursement].reimbursed =
                          "cancelled";
                        setOpenCancelModal(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        <Modal open={openUnCancelModal} size="tiny">
          <Modal.Header>
            Are you sure you want to uncancel this reimbursement?
          </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form>
                    <Button
                      type="reset"
                      color="red"
                      onClick={() => setOpenUnCancelModal(false)}
                    >
                      Close
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => {
                        uncancel({
                          variables: {
                            id: reimbursements[currentReimbursement].id,
                            email: reimbursements[currentReimbursement].email,
                          },
                        });

                        reimbursements[currentReimbursement].reimbursed =
                          "pending";
                        setOpenUnCancelModal(false);
                      }}
                    >
                      Uncancel
                    </Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        <Modal open={claimModal} size="tiny">
          <Modal.Header>{claim.id}</Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <h3>
                    {claim.lastName}, {claim.firstName}
                  </h3>
                  <div
                    className="table-responsive"
                    style={{ marginBottom: 16 }}
                  >
                    <Table striped selectable unstackable>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <b>Email:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.email}</p>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <b>Student ID:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.studentId}</p>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <b>Address:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.address}</p>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <b>Amount:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.amount}</p>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <b>Company:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.company}</p>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <b>Event:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.event}</p>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <b>Description:</b>
                          </Table.Cell>
                          <Table.Cell>
                            <p>{claim.description}</p>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </div>
                  <Button
                    type="reset"
                    color="grey"
                    onClick={() => setClaimModal(false)}
                  >
                    Close
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
        </Modal>
        <CSVLink
          data={reimbursements ? reimbursements : []}
          headers={headers}
          filename={"reimbursements.csv"}
        >
          <Popup
            content="Download CSV of all reimbursements by last name"
            trigger={
              <Button icon color="green" floated="left">
                <Icon name="download" />
              </Button>
            }
          />
        </CSVLink>
        <Input
          fluid
          placeholder="Search..."
          style={{ marginBottom: "20px" }}
          onChange={setSearch}
        />
        <Tab
          onTabChange={() => {
            pending = [];
            resolved = [];
            cancelled = [];

            reimbursements.forEach((reimbursement) => {
              if (reimbursement.reimbursed === "pending") {
                pending.push(reimbursement);
              }
              if (reimbursement.reimbursed === "resolved") {
                resolved.push(reimbursement);
              }
              if (reimbursement.reimbursed === "cancelled") {
                cancelled.push(reimbursement);
              }
            });
          }}
          panes={[pendingPane, resolvedPane, cancelledPane]}
        />
      </Container>
    </>
  );
}

const RESOLVE_MUTATION = gql`
  mutation resolveReimbursement($id: ID!, $email: String!) {
    resolveReimbursement(id: $id, email: $email) {
      firstName
      event
      reimbursed
    }
  }
`;

const UNRESOLVE_MUTATION = gql`
  mutation unresolveReimbursement($id: ID!, $email: String!) {
    unresolveReimbursement(id: $id, email: $email) {
      firstName
      event
      reimbursed
    }
  }
`;

const CANCEL_MUTATION = gql`
  mutation cancelReimbursement($id: ID!, $email: String!) {
    cancelReimbursement(id: $id, email: $email) {
      firstName
      event
      reimbursed
    }
  }
`;

const UNCANCEL_MUTATION = gql`
  mutation uncancelReimbursement($id: ID!, $email: String!) {
    uncancelReimbursement(id: $id, email: $email) {
      firstName
      event
      reimbursed
    }
  }
`;

export default Reimbursements;
