import {makeStyles} from "@material-ui/styles";
import {fade} from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar: {
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            height: 65
        },
        [theme.breakpoints.up('md')]: {
            height: 64,
            width: `calc(100% - 260px)`,
            marginLeft: 260,
        },
    },
    appBarIcon: {
        // [theme.breakpoints.down('md')]: {
        //     fontSize: "2.1rem"
        // },
        // [theme.breakpoints.up('md')]: {
        //     width: '1.9rem',
        // },
    },

}));