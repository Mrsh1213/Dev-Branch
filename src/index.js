import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "@material-ui/styles";
import {create} from 'jss';
import theme from "./config/themeMain";
import {jssPreset, makeStyles, StylesProvider} from '@material-ui/core/styles'
import rtl from 'jss-rtl';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
                    <App/>
        </StylesProvider>
    </ThemeProvider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
