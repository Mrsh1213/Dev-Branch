import Card from '@material-ui/core/Card' ;
import React, {useState} from 'react';
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
import PostPage from "./PostPage";
import TextField from '@material-ui/core/TextField';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import {useHistory} from "react-router";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';



const useStyles = makeStyles((theme) => ({


    root: {
        margin: "0px 0 0 0",
        width: "99%",
        float: "right",
        marginRight: "2px",
        borderBottomWidth: 2,
        borderTopWidth: 0,
        borderStyle: 'solid',
        borderRight: "0px",
        borderLeft: "0px",


    },
    media: {
        paddingTop: '100%',
        margin: "7.5px 0px 7.5px 0px", // 16:9
    },
    avatar: {
        backgroundColor: "#B3AFAF",
        margin: "-10px 0px 0 0",
        width: "50px",
        height: "50px",

    },
    // cardContentClass:
    //     {
    //       width:"100%"
    //     },
    content:
        {
            margin: "-30px 0 0 0",
            color: "black",
            fontWeight: "400",
            fontSize: "17px",
        },
    collapseContent:
        {
            margin: "-40px 0 0 0",
            color: "black",
            fontWeight: "400"
        },
    title:
        {
            fontSize: "16px",
            fontStyle: "bold",
            fontWeight: "450",
            margin: "-8.5px 0px 0 -8px",
            fontFamily: "IRANSans"

        },
    subheader:
        {
            fontSize: "16px",
            margin: "-3.5px 0px 0 -8px",
            fontFamily: "IRANSans"

        },
    actionsList:
        {
            margin: "-39px 0px 0 -5px",
        },


}));






function Post(props) {
    const classes = useStyles();
    const {content, title, creator, picture , createComment , ispostpage, handleOpen} = props;
    const history = useHistory();

 

     

    var parse = require('html-react-parser');

    let messageIcon=<IconButton

                    onClick={() => history.push("/dashboard/project/wikiProject/post/" + title)}


                >
                    <MessageOutlinedIcon style={{fontSize: 25}}/>
                </IconButton>;

    if (ispostpage===true)
    {
        messageIcon=<IconButton
                    onClick={()=>handleOpen()} >
                    <MessageOutlinedIcon style={{fontSize: 25}}/>
                </IconButton>
    }            
    let media = null;
    if (picture) {
        media = <CardMedia
            className={classes.media}
            image="https://picsum.photos/200"
            title="تصویر"

        />;
    }

    let postLink = "/dashboard/project/wikiProject/post/";

    return (
        <Card variant="outlined" key={title} className={classes.root}>

            <CardHeader
                classes={{
                    title: classes.title,
                    subheader: classes.subheader
                }}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    </Avatar>
                }
                title={title}

                subheader={creator}
            />

            <CardContent xs={12} className={classes.content}>
                {media}
                <div dangerouslySetInnerHTML={{
                    __html: content
                }} color="textSecondary" component="p">
                </div>
            </CardContent>
            <CardActions className={classes.actionsList} disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderOutlinedIcon style={{fontSize: 25}}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon style={{fontSize: 25}}/>
                </IconButton>

                {messageIcon}
            </CardActions>

        </Card>

    );
}

export default Post;