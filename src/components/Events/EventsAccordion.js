import React from "react";
import { Segment, Header, Tab } from "semantic-ui-react";
import EventsTable from "./EventsTable.js";

function EventsAccordion({ events }){

  let fallSem = [];
  let springSem = [];
  let summerSem = [];

  if (events){
      events.map((event, index) => (
        fallSem = events.filter(event => event.semester =='Fall Semester'),
        springSem = events.filter(event => event.semester =='Spring Semester'),
        summerSem = events.filter(event => event.semester =='Summer Semester')

  ))
}

  const panes = [
  { menuItem: 'Fall Semester', render: () => <Tab.Pane><EventsTable events={fallSem} /></Tab.Pane> },
  { menuItem: 'Spring Semester', render: () => <Tab.Pane><EventsTable events={springSem} /></Tab.Pane> },
  { menuItem: 'Summer Semester', render: () => <Tab.Pane><EventsTable events={summerSem} /></Tab.Pane> },
  ]


  return(
    <>
    {events === undefined ? (
      <Segment placeholder>
        <Header icon>
          <i className="fas fa-inbox"></i>
          <p>It seems like there are no events at this moment.</p>
        </Header>
      </Segment>
    ) : (
    <Tab panes={panes} />
  )

}
</>
)
}

export default EventsAccordion;