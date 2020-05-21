import React, { useState } from "react";
import {
  Table,
  Icon,
  Dimmer,
  Loader,
  Segment,
  Header,
  Button,
} from "semantic-ui-react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import moment from "moment";

function RequestsTable({ requests }) {
  const [errors, setErrors] = useState({});
  const [disableButton, setDisableButton] = useState(false);

  const [rejectRequest] = useMutation(REJECT_REQUEST_MUTATION, {
    update(
      _,
      {
        data: { rejectRequest: requestData }
      }
    ) {
      requests.forEach((request, index) => {
        var result = requestData.filter(
          updatedRequests =>
            updatedRequests.name === request.name &&
            updatedRequests.username === request.username &&
            updatedRequests.type === request.type
        );
        if (result.length === 0) {
          requests.splice(index, 1);
        }
      });
      setDisableButton(false);
    },

    onError(err) {
      console.log(err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
      console.log(errors);
    }
  });

  const [approveRequest] = useMutation(APPROVE_REQUEST_MUTATION, {
    update(
      _,
      {
        data: { approveRequest: requestData }
      }
    ) {
      requests.forEach((request, index) => {
        var result = requestData.filter(
          updatedRequests =>
            updatedRequests.name === request.name &&
            updatedRequests.username === request.username &&
            updatedRequests.type === request.type
        );
        if (result.length === 0) {
          requests.splice(index, 1);
        }
      });
      setDisableButton(false);
    },

    onError(err) {
      console.log(err);
      console.log("loggin errors");
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    }
  });

  const disableButtonFunction = () => {
    setDisableButton(true);
  };

  return (
    <>
      <Dimmer active={requests ? false : true} inverted>
        <Loader />
      </Dimmer>
      {requests === undefined || requests.length === 0 ? (
        <Segment placeholder>
          <Header icon>
            <i className="fas fa-inbox"></i>
            <p>It seems like there are no requests at this moment.</p>
          </Header>
        </Segment>
      ) : (
        <div className="table-responsive">
          <Table striped selectable unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Event</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Points</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Approve</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Reject</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {requests &&
                requests.map((request, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      {request.lastName}, {request.firstName}
                    </Table.Cell>
                    <Table.Cell>{request.username}</Table.Cell>
                    <Table.Cell>{request.name}</Table.Cell>
                    <Table.Cell>{request.type}</Table.Cell>
                    <Table.Cell>
                      {moment(request.createdAt)
                        .local()
                        .format("MM/DD/YYYY @ hh:mm A")}
                    </Table.Cell>
                    <Table.Cell textAlign="center">{request.points}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        color="green"
                        disabled={disableButton}
                        onClick={() => {
                          disableButtonFunction();
                          approveRequest({
                            variables: {
                              username: request.username,
                              name: request.name,
                              type: request.type
                            }
                          });
                        }}
                      >
                        <Icon name="check" />
                      </Button>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button
                        icon
                        color="red"
                        disabled={disableButton}
                        onClick={() => {
                          disableButtonFunction();
                          rejectRequest({
                            variables: {
                              username: request.username,
                              name: request.name,
                              type: request.type
                            }
                          });
                        }}
                      >
                        <Icon name="x" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
}

const REJECT_REQUEST_MUTATION = gql`
  mutation rejectRequest($username: String!, $name: String!, $type: String!) {
    rejectRequest(
      approveRejectRequestInput: { username: $username, name: $name , type: $type }
    ) {
      name
      type
      points
      firstName
      lastName
      username
      createdAt
    }
  }
`;

const APPROVE_REQUEST_MUTATION = gql`
  mutation approveRequest($username: String!, $name: String!, $type: String!) {
    approveRequest(
      approveRejectRequestInput: { username: $username, name: $name, type: $type }
    ) {
      name
      type
      points
      firstName
      lastName
      username
      createdAt
    }
  }
`;

export default RequestsTable;
