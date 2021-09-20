import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import {Button, Modal} from 'semantic-ui-react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactHTMLParser from 'react-html-parser'; 

//import AddEvent from '../../util/AddEvent';
 
const localizer = momentLocalizer(moment);
 
/* Event example:
{
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2021, 3, 0),
    end: new Date(2021, 3, 1),
  }
   */
 
  /*Things I need to figure out:
    1. How to store events and get unique IDs - graphql has unique IDs, also no storing
    2. How to present events when clicked (using an alert/popup/new tab).
    -- modal with semantic UI
    3. Should I create a new window for admin to add new events? -- get queries for the events in the graphql
    4. make some events available for certain people. filter events depending on who can see them
    add spacing from the top.
    IF i need help getting info, ask marianna
    add colors depending on cabinet meeting.
    try to get links inside the queires. 
    login through shpe development email and login and get the API key. 
    query{getEvents{id, name}} to get events
    */
 
function MyCalendar() {
 
    const [openModal, setOpenModal] = React.useState(false);
    const [currEvent, setEvent] = React.useState({});
    const [events, getEvents] = React.useState([]);
    //https://www.googleapis.com/calendar/v3/calendars/calendar.shpeuf@gmail.com/events?key=AIzaSyDhRwnhGImjvUkGXxiwYDN0AVEvK_KpAjo
    const calendarId = "calendar.shpeuf@gmail.com";
    const API_KEY = "AIzaSyDhRwnhGImjvUkGXxiwYDN0AVEvK_KpAjo";

    function showEvent(event){
        setEvent(event);
        setOpenModal(!openModal);
    }
 
    function getAllEvents(){
        fetch('https://www.googleapis.com/calendar/v3/calendars/'+calendarId+'/events?key='+API_KEY)
            .then(response => response.json())
            .then(data => setEvents(data.items));
    }
    
    function setEvents(dataItems){
        var allEvents = [];
        for(var i =0; i < dataItems.length; i++){
            allEvents.push({
                id: dataItems[i].id,
                title: dataItems[i].summary,
                allDay: false,
                start: dataItems[i].start.dateTime,
                end: dataItems[i].end.dateTime,
                desc: dataItems[i].description ? dataItems[i].description : "",
                resource: dataItems[i].htmlLink,
                color: "ff0000",
            });
        }
        console.log(allEvents);
        getEvents(allEvents);
    }
 
    /* function createEventDesc(event){
        return <div>
            <p>{ReactHTMLParser(event.desc)}</p>
            <div><p>{ReactHTMLParser(event.start)}
            -{ReactHTMLParser(event.end)}</p></div>
        </div>;
    } */

    useEffect(() => {
        getAllEvents();
    }, []);

    return (
        <div style={{padding: '1% 10%' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                step={60}
                onSelectEvent={event => showEvent(event)}
                style={{height: 575}}
            />
            <Modal
            onClose={() => setOpenModal(false)}
            onOpen={() => setOpenModal(true)}
            open={openModal}
            >
            <Modal.Header>{currEvent.title}</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                <div>{ReactHTMLParser (currEvent.desc)}</div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpenModal(false)}>
                Cancel
                </Button>
                <Button color='blue' onClick={() => window.open(currEvent.resource)}>
                Save Event
                </Button>
            </Modal.Actions>
        </Modal>
        </div>
    )
}
export default MyCalendar;
 
