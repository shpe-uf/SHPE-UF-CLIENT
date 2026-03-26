import React from "react";
import { Segment, Header, Grid } from "semantic-ui-react";
import UserEventPoints from "./UserEventPoints";

function UserEventsTable({ user }) {
  const gbms = [];
  const cabinetMeetings = [];
  const educationalWorkshops = [];
  const professionalWorkshops = [];
  const corporateInfoSessions = [];
  const programAttendance = [];
  const formSurveys = [];
  const socialEvents = [];
  const fundraising = [];
  const volunteering = [];
  const misc = [];

  for (let i = user.events.length - 1; i >= 0; i--) {
    if (user.events[i].category === "General Body Meeting") {
      gbms.push(user.events[i]);
    } else if (user.events[i].category === "Cabinet Meeting") {
      cabinetMeetings.push(user.events[i]);
    } else if (user.events[i].category === "Educational Workshop") {
      educationalWorkshops.push(user.events[i]);
    } else if (user.events[i].category === "Professional Workshop") {
      professionalWorkshops.push(user.events[i]);
    } else if (user.events[i].category === "Corporate Info Session") {
      corporateInfoSessions.push(user.events[i]);
    } else if (user.events[i].category === "Program Attendance") {
      programAttendance.push(user.events[i]);
    } else if (user.events[i].category === "Form/Survey") {
      formSurveys.push(user.events[i]);
    } else if (user.events[i].category === "Social Event") {
      socialEvents.push(user.events[i]);
    } else if (user.events[i].category === "Fundraising") {
      fundraising.push(user.events[i]);
    } else if (user.events[i].category === "Volunteering") {
      volunteering.push(user.events[i]);
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
          gbms.length === 0 ? null : (
            <UserEventPoints key="gbm" events={gbms} category={isMobile ? "GBM" : "General Body Meeting"} />
          ),
          cabinetMeetings.length === 0 ? null : (
            <UserEventPoints key="cabinet" events={cabinetMeetings} category="Cabinet Meeting" />
          ),
          educationalWorkshops.length === 0 ? null : (
            <UserEventPoints key="edworkshop" events={educationalWorkshops} category={isMobile ? "Ed. Workshop" : "Educational Workshop"} />
          ),
          professionalWorkshops.length === 0 ? null : (
            <UserEventPoints key="proworkshop" events={professionalWorkshops} category={isMobile ? "Pro. Workshop" : "Professional Workshop"} />
          ),
          corporateInfoSessions.length === 0 ? null : (
            <UserEventPoints key="corporate" events={corporateInfoSessions} category={isMobile ? "Corp. Info" : "Corporate Info Session"} />
          ),
          programAttendance.length === 0 ? null : (
            <UserEventPoints key="program" events={programAttendance} category={isMobile ? "Program" : "Program Attendance"} />
          ),
          formSurveys.length === 0 ? null : (
            <UserEventPoints key="forms" events={formSurveys} category="Form/Survey" />
          ),
          socialEvents.length === 0 ? null : (
            <UserEventPoints key="social" events={socialEvents} category={isMobile ? "Social" : "Social Event"} />
          ),
          fundraising.length === 0 ? null : (
            <UserEventPoints key="fundraising" events={fundraising} category="Fundraising" />
          ),
          volunteering.length === 0 ? null : (
            <UserEventPoints key="volunteering" events={volunteering} category="Volunteering" />
          ),
          misc.length === 0 ? null : (
            <UserEventPoints key="misc" events={misc} category={isMobile ? "Misc" : "Miscellaneous"} />
          ),
        ]
      )}
    </Grid.Row>
  );
}

export default UserEventsTable;
