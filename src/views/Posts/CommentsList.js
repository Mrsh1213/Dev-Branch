import Card from '@material-ui/core/Card' ;
import React, {useState} from 'react';
import {Fragment} from "react";
import {makeStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MessageIcon from '@material-ui/icons/Message';
import Grid from "@material-ui/core/Grid";
import Comment from "./Comment";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import {useHistory} from "react-router";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({


    root: {
        margin: "44px 0 0 0",
        width: "99%",
        float: "right",
        marginRight: "2px",
        borderBottomWidth: 2,
        borderTopWidth: 0,
        borderStyle: 'solid',
        borderRight: "0px",
        borderLeft: "0px",
        zIndex: 0,


    },
    media: {
        paddingTop: '100%',
        margin: "7.5px 0px 8.5px 0px", // 16:9
    },
    avatar: {
        backgroundColor: "#B3AFAF",
        margin: "-10px 0px 0 0",
        width: "50px",
        height: "50px",

    },
    commentFormClass:
        {
            width: "95%",
            float: "right",
            marginRight: "8px",
            padding: "10px 0px 0px 0px"

        },
    content:
        {
            margin: "-30px 0 0 0",
            color: "black",
            fontWeight: "400",
            fontSize: "17px",
        },

    title:
        {
            fontSize: "16px",
            fontStyle: "bold",
            fontWeight: "450",
            margin: "-8.5px 0px 0 -8px",
            fontFamily: "IRANSans"

        },

    menuButton: {
        marginLeft: 'auto',
        marginTop: "-13px",
        backgroundColor: "#ECE8E7",
        padding: "3.5px"

    },


    appBarClass: {
        marginTop: "-2px",
        boxShadow: "2px 0px 3px 0px #9E9E9E",
        backgroundColor: "white",
        classesolor: "gray",
        height: "43px"
    },

    toolBarClass: {
        boxShadow: "0px",
    },
    subheader:
        {
            fontSize: "16px",
            margin: "-3.5px 0px 0 -8px",
            fontFamily: "IRANSans"

        },
    actionsList:
        {
            margin: "-39px 0px -20px -5px",
        },
    hrClass:
        {


            // border-top: 3px double #333;
            // color: #333;
            // overflow: visible;
            // text-align: center;
            height: "25px",

        },
    paper: {
        float: "right",
        width: "90%",
        margin: "200px 20px 0px  0",
        backgroundColor: "white",
        border: '0px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    wikiClass:
        {
            fontSize: "15.3px",
            fontWeight: "600",
            padding: "12px 10px 8px 0"
        },
    modalClass:
        {},
    buttonsClass:
        {
            width: "95%",
            float: "right",
            marginRight: "8px",
            padding: "10px 0px"
        },
    confirmClass:
        {
            float: "right",
            width: "60%",
            backgroundColor: "#2E6E8E",
            fontWeight: "600",
            color: "white"

        },
    closeClass:
        {
            float: "left",
            width: "25%",
            fontWeight: "600",

        }
}));




function CommentsList(props) {
    const classes = useStyles();
    const {comments} = props;
    const history = useHistory();

    var parse = require('html-react-parser');

    return (
        <Grid>

                <hr color="#D7D1CF"/>


                {comments.map(comment => {
                    return (
                        <Grid item xs={12} key={comment.content}>
                            <Comment content={comment.content} creator={comment.creator}/>
                        </Grid>


                    )
                })}


         </Grid>
           
       

    );
}

export default CommentsList;