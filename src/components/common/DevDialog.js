import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/Button";
import {useMediaQuery} from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    Dialog: {
        [theme.breakpoints.down('md')]: {
            minWidth: "80%"
        },
        [theme.breakpoints.up('md')]: {
            minWidth: "40%"
        },

    }
}));

DevDialog.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleAccept: PropTypes.func,
    title: PropTypes.string,
    titleAccept: PropTypes.string,
    titleCancel: PropTypes.string,
};


function DevDialog(props) {
    const {open, titleAccept, titleCancel, handleClose, handleAccept, children, title, className} = props;
    const classes = useStyles();


    return (

        <Dialog
            className={className}
            classes={{paper: classes.Dialog}}
            // fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title"><span
                style={{color: "#000", fontSize: "1rem"}}>{title}</span></DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} variant={"outlined"}>
                    {titleCancel ? titleCancel : "انصراف"}
                </Button>
                <div style={{marginLeft: "8px"}}/>
                <Button onClick={handleAccept} variant={"outlined"} autoFocus>
                    {titleAccept ? titleAccept : "ثبت"}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default memo(DevDialog);