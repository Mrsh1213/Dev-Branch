import Grid from '@material-ui/core/Grid';
import  Card from '@material-ui/core/Card' ;
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

import parse from 'html-react-parser';
import { makeStyles } from '@material-ui/core/styles';

import CardActionArea from '@material-ui/core/CardActionArea';



import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({



  root: {
    margin:"-6px 0 0 0",
    zIndex:10
    
  },
  media: {
    height: 0,
    paddingTop: '60%',
    margin:"-6.5px 10px 20px 10px", // 16:9
  },
  avatar: {
    backgroundColor: "#B3AFAF",
    margin:"-10px -10px 0 0",
    width:"50px",
    height:"50px",

  },
  content:
  {
    margin:"-30px 0 0 0",
    color:"black",
    fontWeight:"400",
    fontSize:"17px",
  },
  collapseContent:
  {
    margin:"-40px 0 0 0",
    color:"black",
    fontWeight:"400"
  },
  title:
  {
     fontSize:"16px",
     fontStyle:"bold",
     fontWeight:"450",
     margin:"-8.5px 0px 0 0",
     fontFamily:"IRANSans"
    
  },
  subheader:
  {
    fontSize:"16px",
    margin:"-3.5px 0px 0 0",
    fontFamily:"IRANSans"
    
  },
  actionsList:
  {
    margin:"-42px -5px 0 0",
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function Post(props)
{
      const classes=useStyles();
	    const {content,title,creator,picture}=props;
      var parse = require('html-react-parser');


      let media=null;
      if (picture)
      {
        media= <CardMedia
        className={classes.media}
        image="https://picsum.photos/200"
        title="تصویر"

      />;
      }
     
     

     
	     

   

return (
<Card key={title} className={classes.root}>
   
      <CardHeader
      classes={{
          title: classes.title,
           subheader : classes.subheader
        }}
        avatar={
          <Avatar  aria-label="recipe" className={classes.avatar}>         
          </Avatar>
        }
        title={title}
        
        subheader={creator}
      />
 {media}
       <CardContent xs={12} className={classes.content}>
        <div dangerouslySetInnerHTML={{
    __html: content
  }}  color="textSecondary" component="p">
        </div>
      </CardContent>
      <CardActions className={classes.actionsList} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
	
	);
}

export default Post;