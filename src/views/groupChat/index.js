import React, {useCallback, useState} from 'react';
import InputMessage from "./InputMessage";
import MessageList from "./MessageList";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyle = makeStyles(theme => ({
    inputMessage: {
        marginTop: "86px",
        justifyContent: "center"
    }
}));

Index.propTypes = {};

function Index(props) {

    const classes = useStyle();

    const [value, setValue] = useState("");

    const [messages, setMessages] = useState([]);

    function inputChangeHandler(event) {
        setValue(event.target.value);
    }

    const scrollToBotttom = () => {
        let elmnt = document.getElementById("bottom");
        elmnt.scrollIntoView(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addMessage();
        setValue("");
    }

    const addMessage = useCallback(function () {
        if (!value) return;
        setMessages(messages.concat({
            text: value,
            id: (Math.random() * 10).toFixed(0),
            avatar: "",
            username: "testUser",
            children: []
        }));
        setValue("");
        scrollToBotttom()
    }, [value, messages])

    const deleteMessage = useCallback(function (id) {
        setMessages(messages.filter(message => message.id !== id));
    }, [messages])

    const addReply = useCallback(function(textReply,id) {
        if (!textReply) return;
        messages.map(message=>{
            if(message.id===id){
                message.children.push({
                    text:textReply,
                    id: (Math.random()*10).toFixed(0),
                    avatar: "",
                    children:[],
                    username: "testUser"
                })
                setMessages(prevState => [...prevState])
            }
        })
    } , [messages])

    return (
            <Grid container justify="center" className={classes.page}>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
                <MessageList
                    messages={messages}
                    inputChangeHandler={inputChangeHandler}
                    addMessage={addMessage}
                    deleteMessage={deleteMessage}
                    addReply={addReply}
                />
                </Grid>
                <Grid item xs={12} className={classes.inputMessage} >
                    <InputMessage
                        value={value}
                        inputChangeHandler={inputChangeHandler}
                        addMessage={addMessage}
                    />
                </Grid>
            </Grid>
    );
}

export default Index;