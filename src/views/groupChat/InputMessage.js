import React from 'react';
import Grid from "@material-ui/core/Grid";
import SendSharpIcon from '@material-ui/icons/Send';
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import { useEffect, useRef } from 'react';

const useStyle = makeStyles(theme => ({
    container: {
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#e0e0e0",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        [theme.breakpoints.between('xs', 'sm')]: {
            maxWidth: "100%",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: "80%",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            maxWidth: "60%",
        },
    },
    iconSendMessage: {
        transform: "rotate(180deg)",
        color: "blue",
        fontSize: "xx-large"
    },
    iconHolder: {
        margin: "3px",
        padding: "-12px"
    },
    textField: {
        marginLeft: "1em",
        marginBottom: "1em"
    }
}));


InputMessage.propTypes = {};

function InputMessage(props) {

    const {
        value,
        inputChangeHandler,
        addMessage
    } = props;

    const classes = useStyle();

    const input = useRef(null);

    useEffect(() => {
        scrollToBottom()
    },[])

    const scrollToBottom = () => {
        let elmnt = document.getElementById("bottom");
        elmnt.scrollIntoView(true);
    }

    return (
            <Grid id={"bottom"} container className={classes.container} >
                <Grid item xs={9} sm={10} className={classes.textField}>
                    <form >
                    <Input
                        disableUnderline={true}
                        type="text"
                        onChange={inputChangeHandler}
                        value={value}
                        fullWidth
                        multiline
                        placeholder={"متن پیام"}
                        inputProps={{ autoFocus: true }}
                        inputRef={input}
                    />
                    </form>
                </Grid>
                <Grid item xs={2} sm={1}>
                    <div onClick={() => input.current.focus()}>
                    <IconButton type="submit" className={classes.iconHolder} onClick={addMessage}><SendSharpIcon
                        className={classes.iconSendMessage}/>
                    </IconButton>
                    </div>
                </Grid>
            </Grid>
    );
}

export default InputMessage;