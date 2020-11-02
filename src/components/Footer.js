import React from "react";
import { Container, Grid, Icon, Responsive, Button, Modal, Form } from "semantic-ui-react";
import { useState } from "react";
import { useForm } from "../util/hooks";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { ToastContainer, toast } from "react-toastify";

function Footer() {

  const [reportBugModal, setReportBugModal] = useState(false);

  const openModal = name => {
    if (name === "reportBug") {
      setReportBugModal(true);
    }
  };

  const closeModal = name => {
    if (name === "reportBug") {
      values.bug = "";
      setReportBugModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(reportBugCallback, {
    bug: "",
  });

  const [reportBug] = useMutation(REPORT_BUG_MUTATION, {
    onCompleted: () => {
      values.bug = "";
      setReportBugModal(false);
      toast.success("The issue has been reported. Thanks!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    },

    variables: values
  })

  function reportBugCallback() {
    reportBug();
  }

  return (
    <footer>
      <Responsive minWidth={992}>
        <Container>
          <Grid>
            <div>
              <ToastContainer/>
            </div>
            <Grid.Row className="no-padding">
              <Grid.Column width={8}>
                <a
                  href="https://www.facebook.com/groups/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="instagram" />
                </a>
                <a
                  href="https://twitter.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="twitter" />
                </a>
                <Button 
                  icon 
                  labelPosition="left" 
                  className="bugButton"
                  onClick={() => openModal("reportBug")}
                >
                  <Icon name='bug' />
                  Report Bug
                </Button>
              </Grid.Column>
              <Grid.Column width={8} textAlign="right">
                <p>© Copyright 2020. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Modal open={reportBugModal} size="tiny">
            <Modal.Header>
                <h2>Report Bug</h2>
            </Modal.Header>
            <Modal.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <Form
                        onSubmit={onSubmit}
                      >
                        <Form.Input
                          type="text"
                          label="Please describe the issue you are experiencing"
                          name="bug"
                          value={values.bug}
                          onChange={onChange}
                        />
                        <Button
                          type="reset"
                          color="grey"
                          onClick={() => closeModal("reportBug")}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" floated="right">
                          Submit
                        </Button>
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Modal.Content>
          </Modal>
        </Container>
      </Responsive>

      <Responsive maxWidth={991}>
        <Container>
          <Grid>
            <Grid.Row className="row-footer-mobile">
              <Grid.Column textAlign="center" width={16}>
                <a
                  href="https://www.facebook.com/groups/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="instagram" />
                </a>
                <a
                  href="https://twitter.com/shpeuf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon circular inverted name="twitter" />
                </a>
                <Button icon labelPosition="left" className="bugButton">
                  <Icon name='bug' />
                  Report Bug
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row className="row-footer-mobile">
              <Grid.Column textAlign="center" width={16}>
                <p>© Copyright 2020. All Rights Reserved.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    </footer>
  );
}

const REPORT_BUG_MUTATION = gql`
  mutation reportBug($bug: String!) {
    reportBug(report: $bug) {
      report
    }
  }
`;

export default Footer;
