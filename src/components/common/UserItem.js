import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AvatarStatus from "../Layout/parts/AvatarStatus";
import {makeStyles} from "@material-ui/styles";

UserItem.propTypes = {
    setPage: PropTypes.func,
    user: PropTypes.object
};

const styles = makeStyles((theme) => ({
    avatar: {
        // [theme.breakpoints.down('md')]: {
        //     width: '5rem',
        //     height: '5rem',
        // }, [theme.breakpoints.up('md')]: {
        //     width: '2.5rem',
        //     height: '2.5rem',
        // }
    },
    lastMessageDate: {},
    lastMessage: {},
    username: {}
}));

function UserItem(props) {
    const {setPage, user} = props;
    const classes = styles();
    return (
        <>
            <ListItem onClick={() => {
                setPage("chatPanel")
            }} alignItems="flex-start" style={{paddingTop: 12, paddingBottom: 12}} button>
                <ListItemAvatar style={{paddingLeft: 10}}>
                    <AvatarStatus img={user.img} status={user.status}
                                  className={{avatar: classes.avatar}}
                        // style={{
                        //     width: '3rem',
                        //     height: '3rem',
                        // }}
                    />
                </ListItemAvatar>
                <ListItemText>
                    <div style={{display: "inline"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                className={classes.username}
                                style={{display: "block"}}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {user.name}
                            </Typography>
                            <div style={{flexGrow: 1}}/>
                            <Typography
                                className={classes.lastMessageDate}
                                style={{display: "block"}}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >{user.lastMessageDate}</Typography>
                        </div>
                        <Typography
                            className={classes.lastMessage}
                            style={{display: "block"}}
                            component="span"
                            variant="caption"
                            color="textPrimary"
                        > {user.lastMessage.substring(0, 40)}{user.lastMessage.length >= 40 ? "..." : ""}</Typography>

                    </div>
                </ListItemText>
            </ListItem>
            <Divider variant="middle" component="li"/>
        </>
    );
}

export default UserItem;