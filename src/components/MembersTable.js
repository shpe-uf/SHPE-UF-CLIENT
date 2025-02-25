import React, { useState } from "react";
import {
  Dimmer,
  Loader,
  Icon,
  Button,
  Modal,
  Grid,
} from "semantic-ui-react";
import '../App.css';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import UserProfile from "./UserProfile";
import PermissionsForm from "./PermissionsForm";
import PointsTable from "./UserEventsTable";

function MembersTable({ users, refetch }) {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [errors, setErrors] = useState({});

  const openModal = (name) => {
    if (name === "userInfo") {
      setUserInfoModal(true);
    }
  };

  const closeModal = (name) => {
    if (name === "userInfo") {
      setUserInfo({});
      setUserInfoModal(false);
      refetch();
    }
  };

  function getUserInfo(userInfo) {
    setUserInfo(userInfo);
    setErrors({});
  }

  const Row = ({ index, style }) => {
    const user = users[index];

    return (
      <div
        style={{
          ...style,
          display: "grid",
          gridTemplateColumns: "2fr 2fr 3fr 1fr 1fr 1fr 1fr 1fr",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "0.5rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div>
          {user.lastName}, {user.firstName}
        </div>
        <div>{user.username}</div>
        <div>{user.email}</div>

        <div style={{ textAlign: "center" }}>{user.fallPoints}</div>
        <div style={{ textAlign: "center" }}>{user.springPoints}</div>
        <div style={{ textAlign: "center" }}>{user.summerPoints}</div>
        <div style={{ textAlign: "center" }}>{user.points}</div>

        <div style={{ textAlign: "center" }}>
          <Button
            icon
            onClick={() => {
              getUserInfo(user);
              openModal("userInfo");
            }}
          >
            <Icon name="info" />
          </Button>
        </div>
      </div>
    );
  };

  const UserProfileModal = () => {
    return (
      <Modal
        open={userInfoModal}
        size="large"
        closeOnEscape={true}
        closeOnDimmerClick={false}
      >
        <Modal.Header>
          <h2>Member Info</h2>
          <Button
            icon="close"
            color="red"
            onClick={() => closeModal("userInfo")}
          />
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
                        {Object.values(errors).map((value) => (
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
    );
  };

  return (
    <>
      <div className="table-responsive">
        <Dimmer active={!users} inverted>
          <Loader />
        </Dimmer>

        <div className="ui striped selectable unstackable table" style={{ width: "100%" }}>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 2fr 3fr 1fr 1fr 1fr 1fr 1fr",
              fontWeight: "bold",
              padding: "0.5rem",
              borderBottom: "2px solid #000",
              boxSizing: "border-box",
            }}
          >
            <div>Name</div>
            <div>Username</div>
            <div>Email</div>
            <div style={{ textAlign: "center" }}>Fall Points</div>
            <div style={{ textAlign: "center" }}>Spring Points</div>
            <div style={{ textAlign: "center" }}>Summer Points</div>
            <div style={{ textAlign: "center" }}>Total Points</div>
            <div style={{ textAlign: "center" }}>Info</div>
          </div>

          {users && (
            <div style={{ height: 500 }}>
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    height={height}
                    itemCount={users.length}
                    itemSize={50}
                    width={width}
                  >
                    {Row}
                  </List>
                )}
              </AutoSizer>
            </div>
          )}
        </div>

        {userInfoModal && <UserProfileModal />}
      </div>
    </>
  );
}

export default MembersTable;
