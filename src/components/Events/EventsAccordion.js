import React from "react";
import { Segment, Header, Tab } from "semantic-ui-react";
import EventsTable from "./EventsTable.js";

function EventsAccordion({ events }){

  let fallSem = [];
  let springSem = [];
  let summerSem = [];

  if (events){
    fallSem = events.filter(event => event.semester ==='Fall Semester')
    springSem = events.filter(event => event.semester ==='Spring Semester')
    summerSem = events.filter(event => event.semester ==='Summer Semester')
  }
  const getCurrentSemester = () => {
    const now = new Date();
    const month = now.getMonth() + 1; 
    
    if (month >= 8 && month <= 12) {
      return 0; 
    }

    else if (month >= 1 && month <= 5) {
      return 1; 
    }

    else {
      return 2; 
    }
  };

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
    <Tab panes={panes} defaultActiveIndex={getCurrentSemester()} />
  )
}
</>
)
}

export default EventsAccordion;