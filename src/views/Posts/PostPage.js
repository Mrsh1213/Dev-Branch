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
        margin: "53px 0 0 0",
        width:"99/5%",
        float:"left",
        borderBottomWidth:2,
        borderTopWidth: 0,
        borderStyle: 'solid',
        borderRight:"0px",
        borderLeft:"0px",
        zIndex:0,


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
            marginTop:"-5px",
            backgroundColor:"#ECE8E7",
            padding:"5px"
   
               },
  

  appBarClass:{
    boxShadow:"2px 0px 0px #9E9E9E",
    backgroundColor:"white",
classesolor:"gray",
height:"50px"
},
  
  toolBarClass:{
  boxShadow:"0px",
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
    position: 'absolute',
    width: "98%",
    backgroundColor: theme.palette.background.paper,
    border: '0px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },


}));



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


function PostPage(props) {
    const classes = useStyles();
    const {post} = props;
    const history = useHistory();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const body = (
    <div style={modalStyle} className={classes.paper}>
      
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
   
    </div>
  );

    var parse = require('html-react-parser');


    let media = null;
    if (post.picture) {
        media = <CardMedia
            className={classes.media}
            image="https://picsum.photos/200"
            title="تصویر"

        />;
    }


    return (
    <Fragment>
       
       <AppBar position="fixed" color="inherit" className={classes.appBarClass}>
  <Toolbar  variant="regular" className={classes.toolBarClass}>
    
        <IconButton  onClick={()=>history.push("/dashboard/project/wikiProject/")} className={classes.menuButton} color="inherit" aria-label="menu">
      <ArrowBackIcon />
    </IconButton>
    
   
  </Toolbar>
</AppBar>


        <Card variant="outlined" key={post.title} className={classes.root}>

            <CardHeader
                classes={{
                    title: classes.title,
                    subheader: classes.subheader
                }}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    </Avatar>
                }
                title={post.title}

                subheader={post.creator}
            />

            <CardContent xs={12} className={classes.content}>
                {media}
                <div dangerouslySetInnerHTML={{
                    __html: post.content
                }} color="textSecondary" component="p">
                </div>
            </CardContent>
            <CardActions className={classes.actionsList} disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderOutlinedIcon style={{ fontSize: 25 }}/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon style={{ fontSize: 25 }}/>
                </IconButton>
                <IconButton onClick={handleOpen}>
                    <MessageOutlinedIcon style={{ fontSize: 25 }}/>
                </IconButton>
            </CardActions>

       <hr  color="#D7D1CF"/>
        

                    {post.comments.map(comment => {
                            return (
                                <Grid item xs={12} key={comment.content}>
                                <Comment content={comment.content} creator={comment.creator}/>
                                </Grid>


                            )
                        })}

          
          
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
       </Fragment>

 );
}

export default PostPage;