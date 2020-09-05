import React, {useRef, useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Message from "./Message";
import PropTypes from 'prop-types';
import HeadGroupChat from "./HeadGroupChat";
import ScrollToBottom, { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';

const useStyle = makeStyles(theme => ({
    messageList: {
        position: "relative"
    }
}))

MessageList.propTypes = {
    messages: PropTypes.array
};

function MessageList(props) {

    const {messages, deleteMessage, addReply} = props;

    const classes = useStyle();

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    };
    useEffect( () => {scrollToBottom()}, [messages]);

    // const scrollToBottom = useScrollToBottom();

    return (
        <Grid container className={classes.messageList}>
            <HeadGroupChat />
            {/*<ScrollToBottom>*/}
            {messages.map((message) => {
                return (<Grid item xs={12} key={message.id} >
                    <Message
                        username={message.username}
                        text={message.text}
                        id={message.id}
                        avatar={message.avatar}
                        time={message.time}
                        deleteMessage={deleteMessage}
                        replies={message.children}
                        addReply={addReply}
                    />
                </Grid>)

            })}
            {/*</ScrollToBottom>*/}
            <div inputRef={messagesEndRef} >
        </div>
        </Grid>
    );

}

export default MessageList;