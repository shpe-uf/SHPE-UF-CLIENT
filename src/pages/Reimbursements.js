import React, { useState } from "react";
import { Container, Grid, Tab, Table, Button, Modal, Form } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Title from "../components/Title";
import gql from "graphql-tag";

import { FETCH_REIMBURSEMENTS_QUERY } from "../util/graphql";

var currentReimbursement;

function Reimbursements() {
    var reimbursements = useQuery(FETCH_REIMBURSEMENTS_QUERY).data.getReimbursements;
    
    const [openResolveModal, setOpenResolveModal] = useState(false);
    const [openUnresolveModal, setOpenUnresolveModal] = useState(false);

    const [resolve] = useMutation(RESOLVE_MUTATION);
    const [unresolve] = useMutation(UNRESOLVE_MUTATION);

    console.log(currentReimbursement);

    var pendingPane = {
        menuItem: {content: "Pending"},
        render: () =>
        <Tab.Pane>
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
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {reimbursements &&
                                    reimbursements.map((reimbursement, index) => (
                                    <>
                                        {!reimbursement.reimbursed &&
                                        <Table.Row key={index}>
                                            <Table.Cell>{reimbursement.lastName}, {reimbursement.firstName}</Table.Cell>
                                            <Table.Cell>{reimbursement.email}</Table.Cell>
                                            <Table.Cell>{reimbursement.studentId}</Table.Cell>
                                            <Table.Cell>{reimbursement.event}</Table.Cell>
                                            <Table.Cell>{reimbursement.amount}</Table.Cell>
                                            <Table.Cell>
                                                <Button
                                                    onClick={() =>{
                                                        setOpenResolveModal(true);
                                                        currentReimbursement = index;
                                                        console.log(index);
                                                    }}
                                                >
                                                    Reslove
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                        }
                                    </>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Tab.Pane>
    };

    var resolvedPane = {
        menuItem: {content: "Resolved"},
        render: () =>
        <Tab.Pane>
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
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {reimbursements &&
                                    reimbursements.map((reimbursement, index) => (
                                    <>
                                        {reimbursement.reimbursed &&
                                        <Table.Row key={index}>
                                            <Table.Cell>{reimbursement.lastName}, {reimbursement.firstName}</Table.Cell>
                                            <Table.Cell>{reimbursement.email}</Table.Cell>
                                            <Table.Cell>{reimbursement.studentId}</Table.Cell>
                                            <Table.Cell>{reimbursement.event}</Table.Cell>
                                            <Table.Cell>{reimbursement.amount}</Table.Cell>
                                            <Table.Cell>
                                                <Button
                                                    onClick={() =>{
                                                        setOpenUnresolveModal(true);
                                                        currentReimbursement = index;
                                                        console.log(index);
                                                    }}
                                                >
                                                    Unreslove
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                        }
                                    </>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Tab.Pane>
    };

    return (
      <>
        <Title title="Reimbursements" adminPath={window.location.pathname} />
        <Container className="body">
            <Modal
                open={openResolveModal}
                size="tiny"
            >
                <Modal.Header>
                    Are you sure this reimbursement has been resolved?
                </Modal.Header>
                <Modal.Content>
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
                                resolve({variables: {
                                    id: reimbursements[currentReimbursement].id,
                                    email: reimbursements[currentReimbursement].email
                                }});

                                reimbursements[currentReimbursement].reimbursed = true;
                                setOpenResolveModal(false);
                            }}
                        >
                            Resolve
                        </Button>
                    </Form>          
                </Modal.Content>
            </Modal>
            <Modal
                open={openUnresolveModal}
                size="tiny"
            >
                <Modal.Header>
                    Are you sure you want to unresolve this reimbursement?
                </Modal.Header>
                <Modal.Content>
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
                                unresolve({variables: {
                                    id: reimbursements[currentReimbursement].id,
                                    email: reimbursements[currentReimbursement].email
                                }});

                                reimbursements[currentReimbursement].reimbursed = false;
                                setOpenUnresolveModal(false);
                            }}
                        >
                            Unresolve
                        </Button>
                    </Form>          
                </Modal.Content>
            </Modal>
            <Tab panes={[pendingPane, resolvedPane]}/>
        </Container>
      </>
    );
}

const RESOLVE_MUTATION = gql`
  mutation resolveReimbursement(
    $id: ID!
    $email: String!
  ) {
    resolveReimbursement(
      id: $id
      email: $email
    ) {
      firstName
      event
      reimbursed
    }
  }
`;

const UNRESOLVE_MUTATION = gql`
  mutation unresolveReimbursement(
    $id: ID!
    $email: String!
  ) {
    unresolveReimbursement(
      id: $id
      email: $email
    ) {
      firstName
      event
      reimbursed
    }
  }
`;
  
export default Reimbursements;