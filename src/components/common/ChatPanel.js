import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {ArrowForward, Done, MoreVert, DoneAll, Search, Send} from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import appBarStyle from "../../styles/appBarStyle";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Message from "./Message";
import DevSearchBox from "./DevSearchBox";

ChatPanel.propTypes = {
    setPage: PropTypes.func
};
const useStyles = makeStyles((theme) => ({
    content: {
        // position: "relative",
        overflowY: "auto",
        height: "100%",
        paddingBottom: '11vh',
        // flexGrow: 1,
    },
    form: {
        backgroundColor: "#bbb8f5",
        margin: '1px 0px',
        borderRadius: 25,
        border: "2px #000 double",
        display: 'flex',
        alignItems: 'center',
        width: "calc(100% - 290px)",
        position: "fixed",
        zIndex: 1,
        height: 72,
        bottom: 0,
        // marginBottom: "10vh",
        [theme.breakpoints.down('md')]: {
            width: "95%",
            height: 100,
        },

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 22,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
const data = [{seen: true, message: "سلام احمد کجایی", time: "10:49", type: "received"},
    {seen: true, message: "سلام چایی", time: "10:50", type: "sent"},
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "received"
    },
    {seen: true, message: "سلام ", time: "10:51", type: "sent"},
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: true,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: false,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: false,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
    {
        seen: false,
        message: "سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟ سلام ممد خوبی؟",
        time: "10:51",
        type: "sent"
    },
];

function ChatPanel(props) {
    const {setPage} = props;
    const classes = {...appBarStyle(), ...useStyles()};
    return (<div className="animate__slideInRight animate__animated">
            <AppBar className={classes.appBar} position="fixed" color="primary">
                <Toolbar>
                    <IconButton onClick={() => {
                        setPage("chatHistory")
                    }} edge="start" color="inherit" aria-label="open drawer">
                        <ArrowForward className={classes.appBarIcon}/>
                    </IconButton>
                    <DevSearchBox/>
                    <div style={{flexGrow: 1}}/>
                    <IconButton edge="end" color="inherit">
                        <MoreVert className={classes.appBarIcon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.content}>
                {data.map((value, index) => (<Message data={value} key={index}/>))}
            </div>
            <div className={classes.form}>
                <InputBase
                    className={classes.input}
                    placeholder="لطفا پیام خورد را بنویسید"
                    inputProps={{'aria-label': 'search google maps'}}
                />
                <Divider className={classes.divider} orientation="vertical"/>
                <IconButton dir={"ltr"} type="submit" className={classes.iconButton} aria-label="search">
                    <Send transform="rotate(180)"/>
                </IconButton>


            </div>

        </div>

    );
}

export default ChatPanel;