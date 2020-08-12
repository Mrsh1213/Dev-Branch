import {createMuiTheme} from '@material-ui/core/styles'
import {blue, lightBlue} from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        fontFamily: ['IranSans']
    },
    palette: {
        secondary: {
            main: lightBlue[500]
        },
        primary: {
            main: blue[900]
        },
        error: {
            main: "#f44336"
        },
    },
    direction: 'rtl',
    overrides: {
        MuiPickersToolbarText: {
            toolbarTxt: {
                fontSize: '1.6rem'
            }
        },
        MuiAutocomplete: {
            inputRoot: {
                padding: '0px !important'
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
        MuiChip: {
            root: {
                height: "100%",
                padding: 10,
                justifyContent: "right"

            },
            label: {
                whiteSpace: "unset"
            }
        },
        MuiListItemAvatar: {
            alignItemsFlexStart: {
                marginTop: 0
            }
        },
        MuiAvatar: {
            root: {
                width: 48,
                height: 48
            }
        },
        MuiTab: {
            labelIcon: {
                minHeight: 60
            }
        }
    }
});

// theme.overrides.MuiButton = {
//     root: {
//         [theme.breakpoints.up('md')]: {
//             fontSize: '0.8rem'
//         },
//         [theme.breakpoints.down('md')]: {
//             fontSize: '1.5rem'
//         }
//     }
// };

export default (theme)