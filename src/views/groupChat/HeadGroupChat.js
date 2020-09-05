import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {AppBar} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CallIcon from '@material-ui/icons/Call';
import IconButton from "@material-ui/core/IconButton";
import VideocamIcon from '@material-ui/icons/Videocam';
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
    header: {
        position: "sticky",
        backgroundColor: "#0d47a1"
    },
    avatarGroup: {
        width: "3rem",
        height: "3rem",
        margin: "8px"
    },
    voiceCall: {
        width: "1.5rem",
        height: "1.5rem",
        padding: "0px"
    },
    videoCall: {
        width: "1.5rem",
        height: "1.5rem",
        padding: "0px"
    }
}));

HeadGroupChat.propTypes = {

};

function HeadGroupChat(props) {

    const classes = useStyle();

    return (
        <AppBar className={classes.header}>
        <Grid container alignItems={"center"}>
            <Grid item xs={3}  >
                <Avatar className={classes.avatarGroup} />
            </Grid>
            <Grid item xs={5} sm={6} >
                <Typography variant="h6" component="h2" align={"center"} >
                    نام گروه
                </Typography>
            </Grid>
            <Grid item container xs={4} sm={3} >
                <Grid item xs={6} >
                    <IconButton className={classes.voiceCall}>
                        <CallIcon  />
                    </IconButton>
                </Grid>
                {/*<Grid item xs={1} />*/}
                <Grid item xs={6} >
                    <IconButton className={classes.videoCall}>
                        <VideocamIcon />
                    </IconButton>
                </Grid>
                {/*<Grid item xs={2}/>*/}

            </Grid>
        </Grid>
        </AppBar>
    );
}

export default HeadGroupChat;