import React, { useState } from "react";
import { Container, Grid, Form, Button } from "semantic-ui-react";
import { useForm } from "../../util/hooks";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import BackgroundImage from "../../assets/images/contact-us-background.png";

function ContactUs() {
  const [errors, setErrors] = useState({});
  const { values, onChange, onSubmit } = useForm(contactRequestCallback, {
    firstName: "",
    lastName: "",
    email: "",
    messageType: "",
    message: "",
  });

  const [submitContactRequest] = useMutation(SUBMIT_CONTACT_REQUEST_MUTATION, {
    onCompleted: () => {
      values.firstName = "";
      values.lastName = "";
      values.email = "";
      values.messageType = "";
      values.message = "";
      setErrors({});
      toast.success("Your message has been sent. Thanks!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values,
  });

  function contactRequestCallback() {
    submitContactRequest();
  }

  return (
    <>
      <div
        className="body"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="masthead masthead-contactus">
          <div className="overlay-blue">
            <Container>
              <h1 className="masthead-title text-white">Contact Us</h1>
            </Container>
          </div>
        </div>

        <Container>
          <center>
            <h5>
              Please reach out to us with any questions, suggestions, or issues!
            </h5>
          </center>
          <Grid>
            <div>
              <ToastContainer />
            </div>
            <Grid.Row centered>
              <Grid.Column width={16}>
                {Object.keys(errors).length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map(value => (
                        <li key={value}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Form onSubmit={onSubmit}>
                  <Form.Group widths="equal">
                    <Form.Input
                      type="text"
                      label="First Name"
                      name="firstName"
                      value={values.firstName}
                      error={errors.firstName ? true : false}
                      onChange={onChange}
                    />
                    <Form.Input
                      type="text"
                      label="Last Name"
                      name="lastName"
                      value={values.lastName}
                      error={errors.lastName ? true : false}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      type="text"
                      label="Email"
                      name="email"
                      value={values.email}
                      error={errors.email ? true : false}
                      onChange={onChange}
                    />
                    <Form.Field
                      label="My main goal is to:"
                      control="select"
                      name="messageType"
                      value={values.messageType}
                      error={errors.messageType ? true : false}
                      onChange={onChange}
                    >
                      <option value=""></option>
                      <option value="Suggestion">Provide a suggestion</option>
                      <option value="Question">Ask a question</option>
                      <option value="Bug">Report a problem</option>
                      <option value="Account Concern">
                        Account concerns (activation/deletion/questions)
                      </option>
                    </Form.Field>
                  </Form.Group>
                  <Form.TextArea
                    type="text"
                    label="Message"
                    name="message"
                    value={values.message}
                    error={errors.message ? true : false}
                    onChange={onChange}
                  />
                  {values.message.length <= 500 && (
                    <p>{values.message.length}/500</p>
                  )}
                  {values.message.length > 500 && (
                    <p style={{ color: "red" }}>{values.message.length}/500</p>
                  )}
                  <Button type="submit" floated="left">
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </>
  );
}

const SUBMIT_CONTACT_REQUEST_MUTATION = gql`
  mutation submitContactRequest(
    $firstName: String!
    $lastName: String!
    $email: String!
    $messageType: String!
    $message: String!
  ) {
    submitContactRequest(
      firstName: $firstName
      lastName: $lastName
      email: $email
      messageType: $messageType
      message: $message
    ) {
      firstName
      lastName
      email
      messageType
      message
    }
  }
`;

export default ContactUs;
