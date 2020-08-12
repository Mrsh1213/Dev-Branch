import React from 'react';
import PropTypes from 'prop-types';
import {Search} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/styles";
import {fade} from "@material-ui/core";

DevSearchBox.propTypes = {};

const searchBar = makeStyles((theme) => ({
    search: {
        border: props => props.border ? "solid 1px" : "unset",
        position: 'relative',
        // fontSize:"4rem",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        [theme.breakpoints.down('md')]: {
            fontSize: "1.2rem"
        },
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

}));

function DevSearchBox(props) {
    const classes = searchBar(props);
    return (
        <div className={classes.search}>

            <div className={classes.searchIcon}>
                <Search className={classes.appBarIcon}/>
            </div>
            <InputBase
                placeholder="جستجو"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    );
}

export default DevSearchBox;