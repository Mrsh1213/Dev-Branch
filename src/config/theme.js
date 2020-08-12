import {createMuiTheme} from '@material-ui/core/styles'
import {blue, indigo} from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        fontFamily: ['IranSans']
    },
    palette: {
        secondary: {
            main: "#325db3"
        },
        primary: {
            main: indigo[700]
        },
        error: {
            main: "#f44336"
        }
    },
    direction: 'rtl',
    overrides: {
        MuiSvgIcon: {
            root: {color: "rgba(۲۵۵,۲۵۵,۲۵۵,0.6)"},
        },
        MuiTypography: {
            root: {
                color: "#ffffff",
            }
        },
        MuiInputLabel: {
            outlined: {
                transform: "translate(14px, 11px) scale(1)"
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: "12px 14px 6px"
            }
        },
        MuiToolbar: {
            gutters: {
                paddingRight: '16px !important',
                paddingLeft: '16px !important'
            }
        },
        MuiIconButton: {
            root: {
                padding: 8
            }
        },
        MuiListItem: {
            root: {
                paddingTop: 10,
                paddingBottom: 10
            }
        },
        MuiSlider: {
            root: {
                color: "#ca0c85"
            }
        }
    }
});

// theme.typography.body1 = {
//     [theme.breakpoints.up('md')]: {
//         fontSize: '0.8rem'
//     },
//     [theme.breakpoints.down('md')]: {
//         fontSize: '1.6rem'
//     }
// }
export default (theme)