import React, { useState, useContext } from "react";
import {
  Table,
  Dimmer,
  Loader,
  Icon,
  Button,
  Modal,
  Grid
} from "semantic-ui-react";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { AuthContext } from "../context/auth";
import UserProfile from "./UserProfile";
import PointsTable from "./PointsTable";

function MembersTable({ users }) {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [permission, setPermission] = useState(userInfo.permission);
  const [errors, setErrors] = useState({});

  const { user } = useContext(AuthContext);

  const openModal = name => {
    if (name === "userInfo") {
      setUserInfoModal(true);
    }
  };

  const closeModal = name => {
    if (name === "userInfo") {
      setUserInfo({});
      setUserInfoModal(false);
    }
  };

  function getUserInfo(userInfo) {
    setUserInfo(userInfo);
    setPermission(userInfo.permission);
    setErrors({});
  }

  const [changePermissionMutation] = useMutation(CHANGE_PERMISSION, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    onCompleted() {
      setPermission(user.permission);
      userInfo.permission = user.permission;
    }
  });

  function changePermission(value) {
    var values = {
      email: userInfo.email,
      currentEmail: user.email,
      permission: value
    }
    changePermissionMutation({ variables: values });
    user.permission = value;
  }


  return (
    <>
      <div className="table-responsive">
        <Dimmer active={users ? false : true} inverted>
          <Loader />
        </Dimmer>
        <Table striped selectable unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Fall Points
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Spring Points
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Summer Points
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Total Points
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Info</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users &&
              users.map((user, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {user.lastName}, {user.firstName}
                  </Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell textAlign="center">{user.fallPoints}</Table.Cell>
                  <Table.Cell textAlign="center">
                    {user.springPoints}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    {user.summerPoints}
                  </Table.Cell>
                  <Table.Cell textAlign="center">{user.points}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button
                      icon
                      onClick={() => {
                        getUserInfo(user);
                        openModal("userInfo");
                      }}
                    >
                      <Icon name="info" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>

      <Modal
        open={userInfoModal}
        size="large"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Member Info</h2>
        </Modal.Header>
        <Modal.Content>
          {userInfo && (
            <>
              <UserProfile user={userInfo} />
              <Grid>
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
                    <Button.Group fluid>
                      {permission === 'admin' ? (
                        <Button color='yellow'>Admin</Button>)
                        : ( <Button color='grey' onClick={() => changePermission("admin")}>Admin</Button>
                      )}
                      {permission === 'director' ? (
                        <Button color='green'>Director</Button>
                      ) : (<Button color='grey' onClick={() => changePermission("director")}>Director</Button>
                      )}
                      {permission === 'member' ? (
                        <Button color='blue'>Member</Button>
                      ) : (<Button color='grey' onClick={() => changePermission("member")}>Member</Button>
                      )}
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <PointsTable user={userInfo} />
            </>
          )}
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Button
                  type="reset"
                  color="grey"
                  onClick={() => closeModal("userInfo")}
                >
                  Close
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </>
  );
}

const CHANGE_PERMISSION = gql`
  mutation changePermission($email: String!, $currentEmail: String!, $permission: String!) {
    changePermission(email: $email, currentEmail: $currentEmail, permission: $permission)
  }
`;

export default MembersTable;
