import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

DevTextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    variant: PropTypes.string,
    items: PropTypes.array,
};

function DevTextField(props) {
    const {items} = props;
    return (
        <TextField
            select={Boolean(items)}
            variant={"outlined"}
            {...props}
        >
            {items ? items.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            )) : ""}
        </TextField>
    );
}

export default DevTextField;