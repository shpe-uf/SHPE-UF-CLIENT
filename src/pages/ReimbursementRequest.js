import React, { useState } from "react";
import { Form, Container, Grid, Button, Modal, Table, Label, Image, Header, Tab } from "semantic-ui-react";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useForm } from "../util/hooks";

import Title from "../components/Title";
import { Text } from "victory";
import ImageCrop from "../components/ImageCrop";

import receipt from "../assets/images/itemized receipt print view with callout.jpg"

function ReimbursementRequest({user}) {
    const [errors, setErrors] = useState({});
    const [openConfirmation, setOpenConfirmation] = useState(false);

    const [receiptFile, setReceiptFile] = useState("");
    const [flyerFile, setFlyerFile] = useState("");
    let originalReceipt = {};

    const { onChange, onSubmit, values } = useForm(reimbursementRequest, {
        firstName: user.firstName,
        lastName: user.lastName,
        eventFlyer: "",
        email: "",
        studentId: "",
        address: "",
        company: "",
        event: "",
        description: "",
        reimbursed: "pending",
        amount: "",
        ufEmployee: "false",
        receiptPhoto: "",
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
                values.ufEmployee = "false";
                values.receiptPhoto = "";
                values.eventFlyer = "";
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
                                                            <b>Email:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.email}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
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
                                                            <b>Student ID:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.studentId}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>ufEmployee:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.ufEmployee=="true" ? 'Yes' : 'No'}</p>
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
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Event Description:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.description}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>What you bought:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            <p>{values.amount}</p>
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            <b>Receipt:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {receiptFile === "" ? (
                                                                <p>No Image Included</p>
                                                                ) : (
                                                                <Image
                                                                    fluid
                                                                    rounded
                                                                    src={values.receiptPhoto}
                                                                    className="image-profile"
                                                                    style={{ marginBottom: 16 }}
                                                                />
                                                            )}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                        <b>Event Flyer:</b>
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {flyerFile === "" ? (
                                                                <p>No Image Included</p>
                                                                ) : (
                                                                <Image
                                                                    fluid
                                                                    rounded
                                                                    src={values.eventFlyer}
                                                                    className="image-profile"
                                                                    style={{ marginBottom: 16 }}
                                                                />
                                                            )}
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
                                <Header size='small' dividing>Email</Header>
                                <Form.Input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    error={errors.email ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>Name</Header>
                                <Form.Input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    error={errors.name ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>Do you work for UF (ex. RecSports)?</Header>
                                <Form.Field>
                                <div className="ui checkbox"> 
                                    <input
                                    type="checkbox"
                                    name="ufEmployee"
                                    defaultChecked={values.ufEmployee === "true" ? true : false} 
                                    value={values.ufEmployee === "true" ? false : true}          
                                    error={errors.ufEmployee ? true : false}
                                    onChange={onChange}
                                    />
                                    <label>Yes</label>
                                </div>
                                </Form.Field>                                                    
                                <Header size='small' dividing>Student ID (######## format)</Header>
                                <Form.Input
                                    type="text"
                                    name="studentId"
                                    value={values.studentId}
                                    error={errors.studentId ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>Address</Header>
                                <Form.Input
                                    type="text"
                                    name="address"
                                    value={values.address}
                                    error={errors.address ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>Company you bought from</Header>
                                <Form.Input
                                    type="text"
                                    name="company"
                                    value={values.company}
                                    error={errors.company ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>Event</Header>
                                <Form.Input
                                    type="text"
                                    name="event"
                                    value={values.event}
                                    error={errors.event ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>Event Description and benefit to SHPE (and/or Agenda)</Header>
                                <Form.Input
                                    type="text"
                                    name="description"
                                    value={values.description}
                                    error={errors.description ? true : false}
                                    onChange={onChange}
                                />
                                <Header size='small' dividing>What you bought (Ex: x2 Ketchup Bottles, x2 24 Packs of Burgers)</Header>
                                <Form.Input  
                                    type="text"
                                    name="amount"
                                    value={values.amount}
                                    error={errors.amount ? true : false} 
                                    onChange={onChange}
                                />
                                <Header size="small" dividing>Upload itemized receipt here or email to treasurer.shpeuf@gmail. Make sure you upload a receipt showing the last 4 numbers of your card and your name. If you only have an invoice, upload the invoice and the bank statement proving you paid off the invoice.</Header>
                                <Grid.Column className="card-team">
                                <Image
                                    src={receipt}
                                />
                                </Grid.Column>
                                {receiptFile === "" ? (
                                    <Image
                                        fluid
                                        rounded
                                        src={values.receiptPhoto}
                                        className="image-profile"
                                        style={{ marginBottom: 16 }}
                                    />
                                    ) : (
                                    <Image
                                        fluid
                                        rounded
                                        src={values.receiptPhoto}
                                        className="image-profile"
                                        style={{ marginBottom: 16 }}
                                    />
                                )}
                                <ImageCrop
                                          setPhotoFile={setReceiptFile}
                                          values={values}
                                          onChange={onChange}
                                          errors={errors.receiptPhoto ? true : false}
                                          type="reimbursementR"
                                />
                                <Header size="small" dividing>Upload the event flyer (IG post or physical)</Header>
                                <Grid.Column className="card-team">
                                </Grid.Column>
                                {flyerFile === "" ? (
                                <Text>No image selected.</Text>
                                    ) : (
                                    <Image
                                        fluid
                                        rounded
                                        src={values.eventFlyer}
                                        className="image-profile"
                                        style={{ marginBottom: 16 }}
                                    />
                                )}
                                <ImageCrop
                                          setPhotoFile={setFlyerFile}
                                          values={values}
                                          onChange={onChange}
                                          errors={errors.eventFlyer ? true : false}
                                          type="reimbursementF"
                                />
                                <Grid.Column>
                                <Button type="submit">Send Request</Button>
                                </Grid.Column>
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
        $ufEmployee: String!
        $receiptPhoto: String!    
        $eventFlyer: String!    
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
                ufEmployee: $ufEmployee
                receiptPhoto: $receiptPhoto
                eventFlyer: $eventFlyer
                execute: $execute
            }
        ) {
            firstName
        }
    }
`;

export default ReimbursementRequest;