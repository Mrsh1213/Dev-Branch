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

const useStyles = makeStyles((theme) => ({


    root: {
        margin: "-6px 0 0 0",
        zIndex: 10

    },
    media: {
        height: 0,
        paddingTop: '60%',
        margin: "-6.5px 10px 20px 10px", // 16:9
    },
    avatar: {
        backgroundColor: "#B3AFAF",
        margin: "-10px -10px 0 0",
        width: "50px",
        height: "50px",

    },
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
            margin: "-8.5px 0px 0 0",
            fontFamily: "IRANSans"

        },
    subheader:
        {
            fontSize: "16px",
            margin: "-3.5px 0px 0 0",
            fontFamily: "IRANSans"

        },
    actionsList:
        {
            margin: "-42px -5px 0 0",
        },

    expand: {
        float: "left",
        transform: 'rotate(0deg)',
        // marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function Post(props) {
    const classes = useStyles();
    const {content, title, creator, picture, comments} = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    var parse = require('html-react-parser');


    let media = null;
    if (picture) {
        media = <CardMedia
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
                    subheader: classes.subheader
                }}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    </Avatar>
                }
                title={title}

                subheader={creator}
            />
            {media}
            <CardContent xs={12} className={classes.content}>
                <div dangerouslySetInnerHTML={{
                    __html: content
                }} color="textSecondary" component="p">
                </div>
            </CardContent>
            <CardActions className={classes.actionsList} disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <MessageIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Grid xs={12} item>

                        {comments.map(comment => {
                            return (<Grid  key={comment.content} item xs={12} lg={3}>
                                <Comment content={comment.content} creator={comment.creator}/>
                            </Grid>)
                        })}


                        {/*<Grid direction={"row-reverse"} className={classes.footer} item>*/}

                        {/*    <Fab onClick={() => history.push("/dashboard/project/wikiProject/createPost")} color="secondary"*/}
                        {/*         aria-label="add" className={classes.fabButton}>*/}
                        {/*        <AddIcon/>*/}
                        {/*    </Fab>*/}
                        {/*</Grid>*/}
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>

    );
}

export default Post;