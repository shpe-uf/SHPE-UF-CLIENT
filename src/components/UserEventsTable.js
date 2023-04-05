import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";
import UserEventPoints from "./UserEventPoints";

function UserEventsTable({ user }) {
  const gbms = [];
  const workshops = [];
  const cabinetMeetings = [];
  const misc = [];

  for (let i = user.events.length - 1; i >= 0; i--) {
    if (user.events[i].category === "General Body Meeting") {
      gbms.push(user.events[i]);
    } else if (user.events[i].category === "Workshop") {
      workshops.push(user.events[i]);
    } else if (user.events[i].category === "Cabinet Meeting") {
      cabinetMeetings.push(user.events[i]);
    } else {
      misc.push(user.events[i]);
    }
  }

  const isMobile = window.innerWidth <= 768;

  return (
    <Grid.Row>
      {user === undefined || user.events.length === 0 ? (
        <>
          <h1>Events</h1>
          <div style={{ paddingBottom: 16 }}>
            <Segment placeholder>
              <Header icon>
                <i className="far fa-frown"></i>
                <p>No events on record.</p>
              </Header>
            </Segment>
          </div>
        </>
      ) : (
        [
          user === undefined || gbms.length === 0 ? null : (
            <UserEventPoints
              events={gbms}
              category={isMobile ? "GBM" : "General Body Meeting"}
            />
          ),
          user === undefined || workshops.length === 0 ? null : (
            <UserEventPoints events={workshops} category="Workshop" />
          ),
          user === undefined || cabinetMeetings.length === 0 ? null : (
            <UserEventPoints
              events={cabinetMeetings}
              category="Cabinet Meeting"
            />
          ),
          user === undefined || misc.length === 0 ? null : (
            <UserEventPoints
              events={misc}
              category={isMobile ? "Misc" : "Miscellaneous"}
            />
          ),
        ]
      )}
    </Grid.Row>
  );
}

export default UserEventsTable;
