import React, { useState } from "react";
import {
  Table,
  Dimmer,
  Loader,
  Icon,
  Button,
  Modal,
  Grid
} from "semantic-ui-react";

import UserProfile from "./UserProfile";
import PermissionsForm from "./PermissionsForm";
import PointsTable from "./UserEventsTable";

function MembersTable({ users, refetch}) {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  const [search, setSearch] = useState('')

  const openModal = name => {
    if (name === "userInfo") {
      setUserInfoModal(true);
    }
  };

  const closeModal = name => {
    if (name === "userInfo") {
      setUserInfo({});
      setUserInfoModal(false);
      refetch()
    }
  };

  function getUserInfo(userInfo) {
    setUserInfo(userInfo);
    setErrors({});
  }

  const UserProfileModal = () => {
    return (
      <Modal
          open={userInfoModal}
          size="large"
          closeOnEscape={true}
          closeOnDimmerClick={false}
        >
          <Modal.Header>
                <Grid.Column floated="left">
                  <h2>Member Info</h2>
                </Grid.Column>
                <Grid.Column floated="right">
                  <Button
                  icon
                  type="reset"
                    color="grey"
                    onClick={() => closeModal("userInfo")}
                    >
                    <Icon name="close" />
                  </Button>
                </Grid.Column>
          </Modal.Header>
          <Modal.Content>
              <>
                <UserProfile user={userInfo} isPublic={false}>
                  <PermissionsForm userInfo={userInfo} />
                </UserProfile>
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
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <PointsTable user={userInfo} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </>
          </Modal.Content>
        </Modal>
      )
  }

  return (
    <>
      <div class="ui search" style={{ display: "flex", justifyContent: "end" }}>
        <div class="ui icon input" style={{width: '40%'}}>
          <input class="prompt" type="text" placeholder="Search Members (by First Name)" onChange={(e) => setSearch(e.target.value)}/>
          <i class="search icon"></i>
        </div>
      </div>
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
              users.filter((user) => {
                let searchName = search.charAt(0).toUpperCase() + search.slice(1)

                if (search === '') {
                  return user
                }
                else {
                  return user.firstName.includes(searchName)
                }
              }).map((user, index) => (
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
        {userInfoModal && (<UserProfileModal/>)}
      </div>
    </>
  );
}

export default MembersTable;
