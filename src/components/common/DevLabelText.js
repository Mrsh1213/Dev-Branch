import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

DevLabelText.propTypes = {
    label: PropTypes.string,
    fontSize: PropTypes.number,
    value: PropTypes.any
};
const style = makeStyles((theme) => ({
        label: {
            [theme.breakpoints.down('md')]: {
                fontSize: props => props.fontSize ? props.fontSize  + "rem" : "0.9rem",
            },
            [theme.breakpoints.up('md')]: {
                fontSize: props => props.fontSize ? props.fontSize + "rem" : "0.9rem",
            },

            color: "#6c757d",
            marginRight: '.25rem'
        },
        value: {
            [theme.breakpoints.down('md')]: {
                fontSize: props => props.fontSize ? props.fontSize + "rem" : "0.9rem",
            },
            [theme.breakpoints.up('md')]: {
                fontSize: props => props.fontSize ? props.fontSize * 1.2 + "rem" : "1rem",
            },

            color: "#24242c"
        }
    }))
;

function DevLabelText(props) {
    const {label, value} = props;
    const classes = style(props);
    return (
        <>
            <span className={classes.label}>
                {label}:
            </span>
            {value &&
            <span>
               <Chip size="small" style={{backgroundColor: "#009ce64a"}} classes={{label: classes.value}}
                     label={value}/>
            </span>}
        </>
    );
}

export default DevLabelText;