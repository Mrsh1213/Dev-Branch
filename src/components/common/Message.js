import React from 'react';
import PropTypes from 'prop-types';
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import {Done, DoneAll} from "@material-ui/icons";

Message.propTypes = {
    data: PropTypes.object
};
const useStyles = makeStyles((theme) => ({
    messageContainer: {
        margin: 10,
        direction: props => props.data.type === 'received' ? "ltr" : "rtl"
    },
    chip: {
        whiteSpace: 'pre-wrap',
        maxWidth: "49%",
        backgroundColor: props => props.data.type === "received" ? "#cc7e91" : "#fafa"
    }
}));

function Message(props) {
    const {data, key} = props;
    const classes = useStyles(props);
    return (
        <div key={key} className={classes.messageContainer}>
            <Chip
                key={key}
                dir={"rtl"}
                label={<span><spna>{data.time}</spna>
                    {data.message}</span>}
                // color={data.type === "received" ? "secondary":"primary"}
                className={classes.chip}
                // key={data.time}
                icon={data.type === "received" ? undefined : data.seen ? <DoneAll/> : <Done/>}
            />
        </div>
    );
}

export default Message;