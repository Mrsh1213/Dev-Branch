import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {makeStyles} from '@material-ui/core/styles';
import clsx from "clsx";
import MessageIcon from "@material-ui/icons/Message";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    root: {
        width:"110%",
        margin:"-15px 0 0 -18px",
        float:"left",
        borderTopWidth: 2,
        borderStyle: 'solid',
        borderBottom:"0px",
        borderRight:"0px",
        borderLeft:"0px",
    },
    // media: {
    //     height: 0,
    //     paddingTop: '60%',
    //     margin: "-6.5px 10px 20px 10px", // 16:9
    // },
    avatar: {
        backgroundColor: "black",
        margin: "-5px -10px 0 0",
        width: "35px",
        height: "35px",

    },
    content:
        {
            margin: "-25px 7.5px 0 0",
            color: "black",
            fontWeight: "400",
            fontSize: "15px",
        },
    collapseContent:
        {
            margin: "-40px 0 0 0",
            color: "black",
            fontWeight: "300",
            fontSize:"16px"
        },
    title:
        {
            fontSize: "15px",
            fontWeight: "400",
            margin: "-8.5px 0px 0 0",
            fontFamily: "IRANSans"

        },
    // subheader:
    //     {
    //         fontSize: "16px",
    //         margin: "-3.5px 0px 0 0",
    //         fontFamily: "IRANSans"
    //
    //     },
    actionsList:
        {
             margin: "-30px 0px 0 -5px",
        },

});


function Comment(props) {
    const classes = useStyles();
    const {content, creator} = props;
    var parse = require('html-react-parser');




    return (
        <Card variant="outlined" key={content} className={classes.root}>
            <CardHeader
                classes={{
                    title: classes.title,

                }}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    </Avatar>
                }
                title={creator}


            />
            <CardContent xs={12} className={classes.content}>
                <div dangerouslySetInnerHTML={{
                    __html: content
                }} color="textSecondary" component="p">
                </div>
            </CardContent>
            <CardActions className={classes.actionsList} disableSpacing>
                <IconButton style={{ fontSize: "10px" }} aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton style={{ fontSize: "10px" }} aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>

    );
}

export default Comment;