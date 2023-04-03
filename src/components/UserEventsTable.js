import React from "react";
import { Table, Segment, Header, Grid } from "semantic-ui-react";
import UserEventPoints from "./UserEventPoints";

import moment from "moment";

function UserEventsTable({ user }) {
  const reversedEvents = [];
  for (let i = user.events.length - 1; i >= 0; i--) {
    reversedEvents.push(user.events[i])
  }

  var gbmCount = 0;
  var workshopCount = 0;
  var cabinetMeetingCount = 0;
  var miscCount = 0;
  
  for (let i = 0; i < reversedEvents.length; i++) {
    if (reversedEvents[i].category === "General Body Meeting")
      gbmCount++
    else if (reversedEvents[i].category === "Workshop")
      workshopCount++
    else if (reversedEvents[i].category === "Cabinet Meeting")
      cabinetMeetingCount++
    else 
      miscCount++
  }

  const isMobile = window.innerWidth <= 768;

  return (
    <Grid.Row>
      {user === undefined || user.events.length === 0 ? (
        <><h1>Events</h1>
        <div style={{ paddingBottom: 16 }}>
          <Segment placeholder>
            <Header icon>
              <i className="far fa-frown"></i>
              <p>No events on record.</p>
            </Header>
          </Segment>
        </div></>
      ) : [
      user === undefined || gbmCount === 0 ? null :
        <UserEventPoints reversedEvents={reversedEvents} category= {isMobile ? "GBM" : "General Body Meeting"} />,
      user === undefined || workshopCount === 0 ? null :
        <UserEventPoints reversedEvents={reversedEvents} category= "Workshop" />,
      user === undefined || cabinetMeetingCount === 0 ? null :
        <UserEventPoints reversedEvents={reversedEvents} category= "Cabinet Meeting" />,
      user === undefined || miscCount === 0 ? null :
        <UserEventPoints reversedEvents={reversedEvents} category= {isMobile ? "Misc" : "Miscellaneous"} />,
      ]} 
    </Grid.Row>
  );
}

export default UserEventsTable;
