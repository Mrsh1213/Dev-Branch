import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import Time from "./Time";
import IconButton from "@material-ui/core/IconButton";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import withStyles from "@material-ui/core/styles/withStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import ReplyIcon from '@material-ui/icons/Reply';
import EditIcon from '@material-ui/icons/Edit';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const useStyle = makeStyles(theme => ({

    myMessageBox: {
        borderRadius: "8px 8px 8px 0",
        backgroundColor: "#b2dfdb",
        borderColor: "#b2dfdb",
        marginLeft: "1em",
        marginTop: "2em",
        padding: "1em",
        maxWidth: "15rem",
        minWidth: "10em",
        overflow: "hidden",
        wordWrap: "break-word"
    },
    othersMessageBox: {
        borderRadius: "8px 0 8px 8px",
        backgroundColor: "#e0e0e0",
        borderColor: "#e0e0e0",
        marginRight: "1em",
        padding: "0.5em 1em 1em 1em",
        maxWidth: "15rem",
        minWidth: "10em",
        overflow: "hidden",
        wordWrap: "break-word"
    },
    box: {
        direction: "rtl",
        marginTop: "2em"
    },
    avatarHolder: {
        marginRight: "1em",
        display: "flex"
    },
    avatar: {
        width: "2rem",
        height: "2rem",
    },
    time: {
        marginLeft: "5px",
        color: "#37474f",
        marginTop: "12px"
    },
    user: {
        marginBottom: "0.75rem",
        color: "blue",
        fontSize: "medium"
    },
    timeAndIcon: {
        marginBottom: "-1.5rem",
        marginTop: "0.5rem",
        color: "#37474f"
    },
    icon: {
        paddingLeft: "0px",
        paddingRight: "0px"
    }
}))

Message.propTypes = {};

function Message({avatar, id, text, username, deleteMessage}) {


    const user = localStorage.getItem("user")

    const classes = useStyle();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        id < 6 ?
            <div>
            <Grid container onClick={handleClick}>
                <Grid item  border={1} className={classes.myMessageBox}>
                    <Grid item xs={12}>
                        {text}
                    </Grid>
                    <Grid container item xs={12} className={classes.timeAndIcon}>
                        <Grid item >
                            <IconButton className={classes.icon}>
                                <DoneAllIcon fontSize={"small"} />
                            </IconButton>
                        </Grid>
                        <Grid item className={classes.time}>
                            <Time/>
                        </Grid>
                        <Grid item xs={7}/>
                    </Grid>
                </Grid>
            </Grid>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <ListItemIcon>
                            <ReplyIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="پاسخ" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <EditIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="ویرایش" />
                    </StyledMenuItem>
                    <StyledMenuItem >
                        <ListItemIcon onClick={()=>{deleteMessage(id)}} >
                            <DeleteIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="حذف" />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
            :
        <div>
            <Grid container className={classes.box} onClick={handleClick}>
                <Grid item className={classes.avatarHolder}>
                    <Avatar src={avatar} className={classes.avatar}/>
                </Grid>
                <Grid item border={1} className={classes.othersMessageBox}>
                    <Grid item xs={12} className={classes.user}>
                        {username}
                    </Grid>
                    <Grid item xs={12}>
                        {text}
                    </Grid>
                    <Grid item xs={12} className={classes.timeAndIcon}>
                        <Time/>
                    </Grid>

                </Grid>
            </Grid>
    <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
        <StyledMenuItem>
            <ListItemIcon>
                <ReplyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="پاسخ" />
        </StyledMenuItem>
        <StyledMenuItem>
            <ListItemIcon onClick={()=>{deleteMessage(id)}}>
                <DeleteIcon fontSize="small" />
            </ListItemIcon >
            <ListItemText primary="حذف" />
        </StyledMenuItem>
    </StyledMenu>
        </div>
    );
}

export default Message;