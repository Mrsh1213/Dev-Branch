import React from 'react';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import DevTextField from "./DevTextField";
import PropTypes from 'prop-types';

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

DevComboAutocomplete.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
    getOptionLabel: PropTypes.func,
    onBlur: PropTypes.func,
    getOptionSelected: PropTypes.func
};

function DevComboAutocomplete(props) {
    const {getOptionLabel, getOptionSelected, url, label, onBlur} = props;
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([{id: 1, userName: "javad yeganeh"},
        {id: 2, userName: "pedram sadi"}, {id: 3, userName: "ahmad zoghi"},
        {id: 4, userName: "karim benzxema"}, {id: 5, userName: "farhad majidi"}]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const countries = await axios.get(url).then(response => response.data);
            await sleep(1e3); // For demo purposes.
            // if (active) {
            //     setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
            // }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            // setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            loadingText={"درحال بارگذاری..."}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={getOptionSelected}
            getOptionLabel={getOptionLabel}
            options={options}
            loading={loading}
            renderInput={(params) => {
                return (
                    <DevTextField
                        {...params}
                        label={label}
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={15}/> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )
            }}
        />
    );
}

export default (DevComboAutocomplete);