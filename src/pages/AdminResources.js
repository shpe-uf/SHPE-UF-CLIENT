import React, { useState } from "react";
import { Grid, Button, Form, Modal, Container, Input, Checkbox } from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";

import Title from "../components/Title";
import ResourcesTable from "../components/ResourcesTable";

import { FETCH_RESOURCES_QUERY } from "../util/graphql";

function AdminResources() {
  const [errors, setErrors] = useState({});
  const [createResourceModal, setCreateResourceModal] = useState(false);

  let resources = [];
  let { data } = useQuery(FETCH_RESOURCES_QUERY, {});
  if (data) {
    resources = data.getResources;
  }

  const openModal = (name) => {
    if (name === "createResource") {
      setCreateResourceModal(true);
    }
  };

  const closeModal = (name) => {
    if (name === "createResource") {
      values.title = "";
      values.description = "";
      values.link = "";
      values.image = "";
      values.podcast = "";
      setErrors(false);
      setCreateResourceModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(createResourceCallback, {
    title: "",
    description: "",
    link: "",
    image: "",
    podcast: false,
  });

  const [createResource, { loading }] = useMutation(CREATE_RESOURCE_MUTATION, {
    update(cache, { data: { createResource } }) {
      const { getResources } = cache.readQuery({ query: FETCH_RESOURCES_QUERY });
      cache.writeQuery({
        query: FETCH_RESOURCES_QUERY,
        data: { getResources: getResources.concat([createResource]) },
      });
      values.title = "";
      values.description = "";
      values.link = "";
      values.image = "";
      values.podcast = false;
      setErrors(false);
      setCreateResourceModal(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: {
      title: values.title,
      description: values.description,
      link: values.link,
      image: values.image,
      podcast: values.podcast,
    },
  });

  function createResourceCallback() {
    createResource();
  }

  return (
    <>
      <Title title="Resources" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              {/*Maybe add something here*/ }
            </Grid.Column>
            <Grid.Column>
              <Button
                content="Create Resource"
                icon="pencil"
                labelPosition="left"
                onClick={() => openModal("createResource")}
                floated="right"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <ResourcesTable resources={resources} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Modal
        open={createResourceModal}
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Create Resource</h2>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {Object.keys(errors).length > 0 && (
                  <div className="ui error message">
                    <ul className="list">
                      {Object.values(errors).map((value) => (
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
                    label="Title"
                    name="title"
                    value={values.title}
                    error={errors.title ? true : false}
                    onChange={onChange}
                  />
                  <Form.TextArea
                    type="text"
                    label="Description"
                    name="description"
                    value={values.description}
                    error={errors.description ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Link"
                    name="link"
                    value={values.link}
                    error={errors.link ? true : false}
                    onChange={onChange}
                  />
                  {/*
                  <b>To add an image, email the image to _.</b>
                      */}
                  <Button
                    type="reset"
                    color="grey"
                    onClick={() => closeModal("createResource")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" floated="right">
                    Create
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
}

const CREATE_RESOURCE_MUTATION = gql`
  mutation createResource(
    $title: String!
    $link: String!
    $description: String!
    $image: String!
    $podcast: Boolean!
  ) {
    createResource(
      createResourceInput: {
        title: $title
        link: $link
        description: $description
        image: $image
        podcast: $podcast
      }
    ) {
      id
      title
      link
      description
      image
      podcast
      createdAt
    }
  }
`;

export default AdminResources;
