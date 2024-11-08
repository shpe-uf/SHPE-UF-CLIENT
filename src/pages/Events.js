import React, { useState } from "react";
import {
  Grid,
  Button,
  Form,
  Modal,
  Container,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { useForm } from "../util/hooks";

import Title from "../components/Title";
import EventsAccordion from "../components/Events/EventsAccordion";

import { FETCH_EVENTS_QUERY } from "../util/graphql";


import categoryOptions from "../assets/options/category.json";
import expirationOptions from "../assets/options/expiration.json";

function Events() {
  const [errors, setErrors] = useState({});
  let events = null;
  let { data } = useQuery(FETCH_EVENTS_QUERY);
  if (data) {
    events = data.getEventsReversed;
  }

  const openModal = (name) => {
    if (name === "createEvent") {
      setCreateEventModal(true);
    }
  };

  const closeModal = (name) => {
    if (name === "createEvent") {
      values.name = "";
      values.code = "";
      values.category = "";
      values.points = "";
      values.expiration = "";
      values.request = "false";
      setErrors(false);
      setCreateEventModal(false);
    }
  };

  const [createEventModal, setCreateEventModal] = useState(false);

  const { values, onChange, onSubmit, setValues } = useForm(createEventCallback, {
    name: "",
    code: "",
    category: "",
    expiration: "",
    points: "",
    request: "false",
  });

  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    update(_, { data: { createEvent: eventsData } }) {
      values.name = "";
      values.code = "";
      values.category = "";
      values.points = "";
      values.expiration = "";
      values.request = "false";
      events.splice(0, events.length);
      for (var i = 0; i < eventsData.length; i++) {
        events.push(eventsData[i]);
      }
      setErrors(false);
      setCreateEventModal(false);
    },

    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },

    variables: values,
  });

  function createEventCallback() {
    createEvent();
  }

  function getPoints(key) {
    const item = categoryOptions.find((item) => item.key === key);
    return item.points === 0 ? "" : item.points;
  }

  return (
    <>
      <Title title="Events" adminPath={window.location.pathname} />
      <Container className="body">
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button
                content="Create Event"
                icon="pencil"
                labelPosition="left"
                onClick={() => openModal("createEvent")}
                floated="left"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Dimmer active={events ? false : true} inverted>
                <Loader />
              </Dimmer>
              <EventsAccordion events={events} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Modal
        open={createEventModal}
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Create Event</h2>
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
                    label="Name"
                    name="name"
                    value={values.name}
                    error={errors.name ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Length of The Event"
                    name="event length"
                    value={values.length}
                    error={errors.length ? true : false}
                    onChange={onChange}
                  />
                  <Form.Input
                    type="text"
                    label="Code"
                    name="code"
                    value={values.code}
                    error={errors.code ? true : false}
                    onChange={onChange}
                  />
                  <Form.Field
                    control="select"
                    label="Category"
                    name="category"
                    value={values.category}
                    error={errors.category ? true : false}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setValues({
                        ...values,
                        category: value,
                        points: getPoints(value)
                      })
                    }}
                  >
                    {categoryOptions.map((category) =>
                      <option value={category.value} key={category.key}>
                        {category.value}
                      </option>
                    )}
                  </Form.Field>
                  <Form.Input
                      type="text"
                      label="Points"
                      name="points"
                      value = {values.points}
                      error={errors.points ? true : false}
                      onChange={onChange}
                    />
                  <Form.Input
                    type="text"
                    label="Hour-to-Shpoint Ratio"
                    name="ratio"
                    value={values.ratio}
                    error={errors.ratio ? true : false}
                    onChange={onChange}
                  />
                  <Form.Field
                    control="select"
                    label="Expires in"
                    name="expiration"
                    value={values.expiration}
                    error={errors.expiration ? true : false}
                    onChange={onChange}
                  >
                    {expirationOptions.map((expiration) => (
                      <option value={expiration.value} key={expiration.key}>
                        {expiration.key}
                      </option>
                    ))}
                  </Form.Field>
                  <Form.Field>
                    <div className="ui toggle checkbox">
                      <input
                        type="checkbox"
                        name="request"
                        value={values.request === "true" ? false : true}
                        onChange={onChange}
                      />
                      <label>Request?</label>
                    </div>
                  </Form.Field>
                  <Button
                    type="reset"
                    color="grey"
                    onClick={() => closeModal("createEvent")}
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

const CREATE_EVENT_MUTATION = gql`
  mutation createEvent(
    $name: String!
    $code: String!
    $category: String!
    $points: String!
    $expiration: String!
    $request: String!
  ) {
    createEvent(
      createEventInput: {
        name: $name
        code: $code
        category: $category
        points: $points
        expiration: $expiration
        request: $request
      }
    ) {
      name
      code
      category
      expiration
      request
      semester
      points
      createdAt
      attendance
      users {
        email
        firstName
        lastName
        username
      }
    }
  }
`;

export default Events;