import React, {useEffect} from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import {Button, Modal} from 'semantic-ui-react';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import ReactHTMLParser from 'html-react-parser'; 
 
const localizer = momentLocalizer(moment);

function MyCalendar() {

    const [openModal, setOpenModal] = React.useState(false);
    const [currEvent, setEvent] = React.useState({});
    const [events, getEvents] = React.useState([]);
    const calendarId = "calendar.shpeuf@gmail.com";
    const API_KEY = process.env.REACT_APP_API_KEY;

    function showEvent(event){
        setEvent(event);
        setOpenModal(!openModal);
        console.log('Current Event:', event);
    }
 
    function getAllEvents(){
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        console.log('https://www.googleapis.com/calendar/v3/calendars/'+calendarId+'/events?timeMin='+oneYearAgo.toISOString()+'&key='+API_KEY);
        fetch('https://www.googleapis.com/calendar/v3/calendars/'+calendarId+'/events?timeMin='+oneYearAgo.toISOString()+'&key='+API_KEY)
            .then(response => response.json())
            .then(data => setEvents(data.items));
    }
    
    //Google calendar formats all-day event end times exclusively. react-big-calendar takes inclusive end dates.
    function fixAllDayEventHack(date){
        const dateObj = new Date(date);
        dateObj.setDate(dateObj.getDate() - 1);
        return dateObj;
    }

    function setEvents(dataItems){
        console.log(allEvents);
        var allEvents = [];
        let allday = false;
        for(var i =0; i < dataItems.length; i++){
            allday = dataItems[i].start.date ? true : false;
            allEvents.push({
                id: dataItems[i].id,
                title: dataItems[i].summary,
                allDay: allday,
                start: new Date(
                    allday 
                    ? dataItems[i].start.date
                    : dataItems[i].start.dateTime),
                end: allday
                ? fixAllDayEventHack(dataItems[i].end.date)
                : new Date(dataItems[i].end.dateTime),
                desc: dataItems[i].description ? dataItems[i].description : "No description available",
                resource: dataItems[i].htmlLink,
                color: "ff0000",
            });
        }
        console.log('All Events:', allEvents);
        getEvents(allEvents);
    }

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
                step={15}
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
            <Modal.Content>
    <Modal.Description>
        <div style={{padding: '1% 10%' }}>
            <strong>Description: </strong>
            {ReactHTMLParser(currEvent.desc)}
        </div>
        <div style={{padding: '1% 10%' }}>
        <div>
        <strong>Start Time:</strong>{' '}
        {moment(currEvent.start).format('MMMM Do YYYY, h:mm a')}
    </div>
    <div>
        <strong>End Time:</strong>{' '}
        {moment(currEvent.end).format('MMMM Do YYYY, h:mm a')}
    </div>
        </div>
    </Modal.Description>
</Modal.Content>

            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpenModal(false)}>
                Close
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