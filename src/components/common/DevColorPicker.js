import React, {useEffect, useState} from "react";
import {CirclePicker} from "react-color";
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
import {ColorLens} from "@material-ui/icons";
import Popover from "@material-ui/core/Popover";

DevColorPicker.propTypes = {
    getColor: PropTypes.func
};

function DevColorPicker(props) {
    const [color, setColor] = useState({hex: "#668c3e8c"});
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleChange = color => {
        console.log(color);
        setColor({...color, hex: color.hex + "8c"})
    };
    useEffect(() => {
        props.getColor(color.hex)
    }, [color])
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (<>
            <IconButton aria-describedby={id} onClick={handleClick} title={"رنگ رویداد"}>
                <ColorLens style={{color: color.hex}}/>
            </IconButton>
            <Popover

                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div style={{padding: 14}}><CirclePicker
                    colors={["#f44336", "#e91e63", "#e337ff", "#b991ff", "#3f51b5", "#2196f3", "#03a9f4",
                        "#00bcd4", "#01ff95", "#4caf50", "#8bc34a",
                        "#cddc39", "#ffeb3b", "#ffc107", "#ff9800",
                        "#ff5722", "#ff9586", "#607d8b"]} color={color} onChangeComplete={handleChange}/></div>
            </Popover>

        </>
    );
}

export default DevColorPicker;