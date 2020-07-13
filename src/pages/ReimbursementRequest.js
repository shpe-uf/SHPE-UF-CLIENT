import React, { useState } from "react";
import { Form, Container, Grid, Button, Modal, Table } from "semantic-ui-react";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useForm } from "../util/hooks";

import Title from "../components/Title";

function ReimbursementRequest({user}) {
    const [errors, setErrors] = useState({});
    const [openConfirmation, setOpenConfirmation] = useState(false);

    const { onChange, onSubmit, values } = useForm(reimbursementRequest, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        studentId: "",
        address: "",
        company: "",
        event: "",
        description: "",
        reimbursed: "pending",
        amount: "",
        execute: false
    });

    const [addRequest, { loading }] = useMutation(REQUEST_REIMBURSEMENT, {
        update(
            _,
            {
                data: { reimbursementRequest }
            }
        ) {
            if (values.execute) {
                values.studentId = "";
                values.address = "";
                values.company = "";
                values.event = "";
                values.description = "";
                values.amount = "";
                setOpenConfirmation(false);
                setErrors({});
                values.execute = false;
            } else {
                setOpenConfirmation(true);
            }
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
    
        variables: values
      });

    function reimbursementRequest() {
        addRequest();
    }
    
    return (
        <div className="body">
            <Title title="Reimbursement Request" />
            <Container className="body">
                <Grid>
                    <Modal
                        open={openConfirmation}
                        size="tiny"
                    >
                        <Modal.Header>
                            Is this information correct?
                        </Modal.Header>
                        <Modal.Content>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <div className="table-responsive" style={{ marginBottom: 16 }}>
                                            <Table striped selectable unstackable>
                                                <Table.Body>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>First Name:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.firstName}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Last Name:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.lastName}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Email:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.email}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Student ID:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.studentId}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Amount:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.amount}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Address:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.address}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Company:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.company}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Event:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.event}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                </Table.Body>
                                            </Table>
                                        </div>
                                        <Form onSubmit={onSubmit}>
                                            <Button
                                                type="reset"
                                                color="red"
                                                onClick={() => setOpenConfirmation(false)}
                                            >
                                                Close
                                            </Button>
                                            <Button
                                                type="submit"
                                                onClick={() => {
                                                    values.execute = true;
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Form>                                    
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Content>
                    </Modal>
                    <Grid.Row>
                        <Grid.Column>
                            {Object.keys(errors).length > 0 && (
                                <div className="ui error message">
                                    <ul className="list">
                                        {Object.values(errors).map(value => (
                                            <li key={value}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <Form
                                onSubmit={onSubmit}
                                noValidate
                                className={loading ? "loading" : ""}
                            >
                                <Form.Input
                                    type="text"
                                    label="Student Id"
                                    name="studentId"
                                    value={values.studentId}
                                    error={errors.studentId ? true : false}
                                    onChange={onChange}
                                />
                                <Form.Input
                                    type="text"
                                    label="Amount"
                                    name="amount"
                                    value={values.amount}
                                    error={errors.amount ? true : false}
                                    onChange={onChange}
                                />
                                <Form.Input
                                    type="text"
                                    label="Address (Reimbursement will be mailed here)"
                                    name="address"
                                    value={values.address}
                                    error={errors.address ? true : false}
                                    onChange={onChange}
                                />
                                <Form.Input
                                    type="text"
                                    label="Company you bought from"
                                    name="company"
                                    value={values.company}
                                    error={errors.company ? true : false}
                                    onChange={onChange}
                                />
                                <Form.Input
                                    type="text"
                                    label="Event"
                                    name="event"
                                    value={values.event}
                                    error={errors.event ? true : false}
                                    onChange={onChange}
                                />
                                <Form.Input
                                    type="text"
                                    label="Event Description"
                                    name="description"
                                    value={values.description}
                                    error={errors.description ? true : false}
                                    onChange={onChange}
                                />

                                <Button type="submit">Send Request</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}

const REQUEST_REIMBURSEMENT = gql`
    mutation reimbursementRequest(
        $firstName: String!
        $lastName: String!
        $email: String!
        $studentId: String!
        $address: String!
        $company: String!
        $event: String!
        $description: String!
        $reimbursed: String!
        $amount: String!
        $execute: Boolean!
    ) {
        reimbursementRequest(
            reimbursementInput: {
                firstName: $firstName
                lastName: $lastName
                email: $email
                studentId: $studentId
                address: $address
                company: $company
                event: $event
                description: $description
                reimbursed: $reimbursed
                amount: $amount
                execute: $execute
            }
        ) {
            firstName
        }
    }
`;

export default ReimbursementRequest;