import React, {useEffect} from 'react';
import "./assets/css/bootstrap.css";
import "./assets/css/customBS4.css";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./views/SignIn";
import {makeStyles} from "@material-ui/core/styles";
import {SnackbarProvider} from "notistack";
import {Alarm} from "@material-ui/icons";
import "./assets/css/anim.css";
import Demo from "./views/Dashboard/Demo";
import ProjectManagement from "./views/ProjectManagement";


const styles = makeStyles((theme) => ({
    success: {backgroundColor: 'purple'},
    error: {backgroundColor: 'blue'},
    warning: {backgroundColor: 'green'},
    info: {backgroundColor: 'yellow'},
    alarm: {backgroundColor: 'rgb(49, 49, 49)'},
}));
export default function App() {
    const classes = styles();
    return (
        <SnackbarProvider
            className="animate__bounceIn  animate__animated"
            // variant={['default','error','success','warning','info','alarm']}
            classes={{
                // variantSuccess: classes.success,
                // variantError: classes.error,
                // variantWarning: classes.warning,
                // variantInfo: classes.info,
                variantAlarm: classes.alarm,
            }}

            iconVariant={{
                // success: '✅',
                // error: '✖️',
                // warning: '⚠️',
                // info:' |',
                alarm: <Alarm className="animate__headShake  animate__delay-1s  animate__animated"
                              style={{marginLeft: 10, color: "#d32f2f"}}/>,
            }} maxSnack={5}>
            <Router>
                <Route exact path={"/demo"} component={Demo}/>
                <Route exact path={['/signIn', '/','/login']} component={SignIn}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Router>
        </SnackbarProvider>

    )
}

