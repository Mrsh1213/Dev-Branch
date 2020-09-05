import React, {Component, useState} from 'react';

class Time extends Component{

    state={
        curTime : new Date().toLocaleTimeString(['ar-EG'], { hour12: false, hour: '2-digit', minute: '2-digit' })
    }
    render(){
        return (
                <p>{this.state.curTime}</p>
        );
    }

}

export default Time;