import React, { useState } from "react";
import { Container, Grid, Form, Button} from "semantic-ui-react";
import { useForm } from "../../util/hooks";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { ToastContainer, toast } from "react-toastify";

function ContactUs() {
    
    const [errors, setErrors] = useState({});
  
    const { values, onChange, onSubmit } = useForm(reportBugCallback, {
      firstName: "",
      lastName: "",
      email: "",
      reportType: "",
      report: "",
    });
  
    const [reportBug] = useMutation(REPORT_BUG_MUTATION, {     
        onCompleted: () => {
        values.firstName = "";
        values.lastName = "";
        values.email = "";
        values.reportType = "";
        values.report = "";
        setErrors({});
        toast.success("Your message has been sent. Thanks!", {
            position: toast.POSITION.BOTTOM_CENTER,
        });
      },
      onError(err) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
  
      variables: values
    })
  
    function reportBugCallback() {
      reportBug();
    }

  return (
    <div className="body">
      <div className="masthead masthead-contactus">
        <div className="overlay-blue">
          <Container>
            <h1 className="masthead-title text-white">
                Contact Us
            </h1>
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
              <ToastContainer/>
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
            <Form
            onSubmit={onSubmit}
            >
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
            <Form.Group 
              widths="equal"
            >
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
                    name="reportType"
                    value={values.reportType}
                    error={errors.reportType ? true : false}
                    onChange={onChange}
                >
                    <option value="">
                    
                    </option>
                    <option value="Suggestion">
                    Provide a suggestion
                    </option>
                    <option value="Question">
                    Ask a question
                    </option>
                    <option value="Bug">
                    Report a problem
                    </option>
                </Form.Field>
            </Form.Group>
            <Form.TextArea
                type="text"
                label="Message"
                name="report"
                value={values.report}
                error={errors.report ? true : false}
                onChange={onChange}
            />
            <Button type="submit" floated="left">
                Submit
            </Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
       
    </div>
  );
}

const REPORT_BUG_MUTATION = gql`
mutation reportBug(
    $firstName: String!
    $lastName: String! 
    $email: String! 
    $reportType: String!
    $report: String!
  ) {
    reportBug(
      contactUsInput: { 
                firstName: $firstName
                lastName: $lastName
                email: $email
                reportType: $reportType
                report: $report 
      }
    ) {
        firstName
        lastName
        email
        reportType
        report
      }
    }
`;

export default ContactUs;