import React, { useState } from "react";
import { Grid, Button, Form, Modal, Container, Input } from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useForm } from "../util/hooks";

import Title from "../components/Title";
import ResourcesTable from "../components/ResourcesTable";

import { FETCH_RESOURCES_QUERY } from "../util/graphql";

function AdminResources() {
  const [errors, setErrors] = useState({});
  const [createResourceModal, setCreateResourceModal] = useState(false);
  const [filter, setFilter] = useState("");

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
      values.type = "";
      setErrors(false);
      setCreateResourceModal(false);
    }
  };

  const { values, onChange, onSubmit } = useForm(createResourceCallback, {
    title: "",
    description: "",
    link: "",
    image: "",
    type: "",
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
      values.type = "";
      setErrors(false);
      setCreateResourceModal(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: {
      name: values.title,
      description: values.description,
      link: values.link,
      image: values.image,
      type: Number(values.type),
    },
  });

  function createResourceCallback() {
    !isNaN(values.type) && createResource();
  }

  //TODO: Check this
  /*
  if (resources && filter !== "") {
    resources = resources.filter((resource) => {
      return (
        task.name.toLowerCase().includes(filter.toLowerCase()) ||
        task.semester.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }
  */

  return (
    <>
      <Title title="Resources" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>
              <Input
                fluid
                onChange={(_, data) => setFilter(data.value)}
                placeholder="Search..."
              />
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
                    label="link"
                    name="link"
                    value={values.link}
                    error={errors.link ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Image"
                    name="image"
                    value={values.image}
                    error={errors.image ? true : false}
                    onChange={onChange}
                  />
                  <Form.Group grouped>
                    <label>Type</label>
                    <Form.Field
                      label='Podcast'
                      control='input'
                      type='radio'
                      name='podcast'
                    />
                    <Form.Field
                      label='GBM Slides'
                      control='input'
                      type='radio'
                      name='gbmslides'
                    />
                    <Form.Field
                      label='Other'
                      control='input'
                      type='radio'
                      name='other'
                    />
                  </Form.Group>
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
    $description: String
    $link: String!
    $image: String
    $type: Int!
  ) {
    createResource(
      createResourceInput: {
        title: $title
        description: $description
        link: $link
        image: $image
        type: $type
      }
    ) {
      id
      title
      description
      link
      image
      type
      createdAt
    }
  }
`;

export default AdminResources;
