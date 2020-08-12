import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import '@fullcalendar/daygrid/main.css'
import '../../../assets/css/calendar.css';
// import moment from "moment";
import EventView from "./EventView";

import allLocales from '@fullcalendar/core/locales-all';
import moment from "moment-jalaali";
import {Alarm, Edit, Delete, ArrowForward, AddAlarm} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import {useSnackbar} from "notistack";
import Toolbar from "@material-ui/core/Toolbar";
// moment.locale("fa");
Index.propTypes = {};
const style= makeStyles((theme) => ({
    titleEvent:{
        color: "#0f0f0e",whiteSpace: 'pre-wrap'
    },
    timeEvent: {
        marginLeft: 5, marginRight: 5
    },
    alarm: {
        fontSize: 12, color: "red"
    },
    iconAction: {
        fontSize: 12
    }
}));

function Index({
                   calendarEvents,
                   handleDateClick,
                   editable,
                   refCalendar
               }) {
    const {enqueueSnackbar} = useSnackbar();
    const classes = style();
    const [tableView, setTableView] = useState(false);

    function renderEventContent(eventInfo) {
        // console.log(eventInfo);
        return (
            <div
                style={{backgroundColor: eventInfo.event.start <= new Date().getTime() ? "#eaeaea" : eventInfo.event.backgroundColor}}>

                <div style={{display: "flex"}}>
                    <span className={classes.timeEvent}>{eventInfo.event.end ? "" :
                        <Alarm className={classes.alarm}/>}{moment(eventInfo.event.start).format("HH:mm")}</span>
                </div>

                <div className={classes.titleEvent}>{eventInfo.event._def.title}</div>

            </div>
        )
    }
    function eventClick(e) {
        // console.log(e);
        enqueueSnackbar(e.event._def.title, {
            variant: "alarm", anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }
        })
        // alert(e.event._def.publicId);

    }

    return (
        !tableView ?
            <FullCalendar
                views={{
                    dayGridMonth: { // name of view
                        titleFormat: {year: 'numeric', month: '2-digit', day: '2-digit'}
                        // other view-specific options here
                    }, timeGrid: { // name of view
                        titleFormat: {year: 'numeric', month: '2-digit', day: '2-digit'}
                        // other view-specific options here
                    },
                    //     week: { // name of view
                    //     titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' }
                    //     // other view-specific options here
                    // },
                    day: { // name of view
                        titleFormat: {year: 'numeric', month: '2-digit', day: '2-digit'}
                        // other view-specific options here
                    },
                }}
                buttonText={{
                    tableView: "رویدادها"
                }}
                // contentHeight={"400px"}
                plugins={[dayGridPlugin, listPlugin, timeGridPlugin, interactionPlugin]}
                // footerToolbar={true}
                direction={"rtl"}
                locale={"fa-ir"}
                locales={allLocales}
                firstDay={6}
                // selectable={true}
                initialView='dayGridMonth'
                // editable={true}
                // selectable={true}
                // selectMirror={true}
                // dayMaxEvents={true}
                headerToolbar={
                    {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridDay,tableView'
                    }}
                customButtons={{
                    tableView: {
                        text: "رویداد ها", click: function (element) {
                            setTableView(prev => !prev)
                        }
                    }
                }}
                ref={refCalendar}
                eventContent={renderEventContent}
                events={calendarEvents}
                eventClick={eventClick}
                dateClick={handleDateClick}
            /> : <> <EventView AddEvent={() => <IconButton onClick={() => {
                handleDateClick({arg: {date: new Date()}})
            }} edge="start" color="inherit" aria-label="open drawer">
                <AddAlarm className={classes.appBarIcon}/>
            </IconButton>} BackButton={() => <IconButton onClick={() => {
                setTableView(false)
            }} edge="start" color="inherit" aria-label="open drawer">
                <ArrowForward/>
            </IconButton>}/></>
    );
}

export default Index;