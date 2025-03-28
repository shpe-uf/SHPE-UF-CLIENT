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
import { QRCodeSVG } from 'qrcode.react';

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
    } else if (name === "confirmEvent") {
      setConfirmEventModal(true);
    }
  };

  const closeModal = (name) => {
    if (name === "createEvent") {
      values.name = "";
      values.code = "";
      values.hours = "";
      values.category = "";
      values.points = "";
      values.ratio = "";
      values.expiration = "";
      values.request = "false";
      setErrors(false);
      setCreateEventModal(false);
    } else if (name === "confirmEvent") {
      setConfirmEventModal(false);
    }
  };

  const [createEventModal, setCreateEventModal] = useState(false);
  const [confirmEventModal, setConfirmEventModal] = useState(false);
  const [priorEventInfo, setPriorEventInfo] = useState({})

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
      setPriorEventInfo({...values})
      setConfirmEventModal(true)
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
      setCreateEventModal(false)
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

  const options = [
    { key: '1', value: '1', text: '1' },
    { key: '2', value: '2', text: '2' },
    { key: '3', value: '3', text: '3' },
    { key: '4', value: '4', text: '4' },
    { key: '5', value: '5', text: '5' },
    { key: '6', value: '6', text: '6' },
    { key: '7', value: '7', text: '7' },
    { key: '8', value: '8', text: '8' },
    { key: '9', value: '9', text: '9' },
    { key: '10', value: '10', text: '10' }
  ]
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

      { /* Confirmation Modal */ }

      <Modal
        open={confirmEventModal}
        size="tiny"
        dimmer={false}
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Event Created</h2>
          <Button icon="close" color="grey" onClick={() => closeModal('confirmEvent')} />
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <p>Your event was successfully created.</p>
                <b>Name:</b> {priorEventInfo.name}
                <br/>
                <b>Category:</b> {priorEventInfo.category}
                <br/>
                <b>Points:</b> {priorEventInfo.points}
                <br/>
                <b>Code:</b> {priorEventInfo.code}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <b>QR Code:</b>
                <br/>
                <br/>
                <QRCodeSVG value={`[SHPEUF]:${priorEventInfo.code}`} size={200}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>

      <Modal
        open={createEventModal}
        size="tiny"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Create Event</h2>
          <Button icon="close" color="grey" onClick={() => closeModal('createEvent')}/>
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
                  {values.category === "Volunteering" &&
                  <>
                  <Form.Select
                    label="Length of the Event (Hours)"
                    options={options}
                    name="Length"
                    value={values.hours}
                    onChange={(e) => {setValues({
                      ...values,
                      hours: e.target.innerText
                    })}}
                  />
                  <Form.Input
                      type="text"
                      label="Hour-to-Shpoint Ratio"
                      name="ratio"
                      value={values.ratio}
                      error={errors.ratio ? true : false}
                      onChange={onChange}
                  />
                  </>      
                   }
                  <Form.Input
                      type="text"
                      label="Points"
                      name="points"
                      value = {values.points}
                      error={errors.points ? true : false}
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
                  <Button type="submit">
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