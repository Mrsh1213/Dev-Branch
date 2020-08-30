import Grid from '@material-ui/core/Grid';
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Post from './Post';
import {makeStyles} from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useHistory} from "react-router";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({

    fabButton: {
        zIndex: 1,
        top: "0",
        float: "right",
        right: "10px",
        color: "white",
        backgroundColor: "red"

    },

    footer: {
        bottom: "20px",
        left: '0',
        width: "100%",
        marginBottom: 44,
        position: "fixed"


    }
    ,
    postClass: {
        background: 'white',
        border: 2,
        borderRadius: 3,
        margin: '7px 0px 0px 0',
        width: 310,
    },
    buttonClass:
        {
            fontFamily: "IRANSans",
            height: "30px",
            margin: "0 0 0 0px"
        },
    appbarClass:
        {
            background: "white",
            color: "black",
            height: "50px"

        },
    textClass:
        {
            fontWeight: "500"
        }
});


function PostsList(props) {
    const {posts} = props;
    const classes = useStyles();
    const history = useHistory();


    return (
        <Grid justify={"flex-end"} container direction="row">

            {posts.map(post => {
                return (<Grid className={classes.postClass} key={post.title} item xs={12} lg={3}>
                    <Post title={post.title} creator={post.creator}
                          content={post.content} picture={post.picture}/>
                </Grid>)
            })}


            <Grid className={classes.footer} item>

                <Fab onClick={() => history.push("/dashboard/project/wikiProject/createPost")} color="secondary"
                     aria-label="add" className={classes.fabButton}>
                    <AddIcon/>
                </Fab>
            </Grid>
        </Grid>

    );
}

export default PostsList;