import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import {SwipeableList, SwipeableListItem} from "@sandstreamdev/react-swipeable-list";

DevItemEvent.propTypes = {
    data: PropTypes.object
};

function Pill({backgroundColor}) {
    return (
        <Chip style={{backgroundColor: backgroundColor, width: 30, height: 30}}/>
        // <div />
    )
}

function DevItemEvent(props) {
    const {title, backgroundColor, date, id} = props.data;
    return (<SwipeableListItem
            swipeLeft={{
                content: <div style={{display:"flex",alignItems: "center",
                    backgroundColor:"#CC4A29",height:"100%",width:"100%",}}><span style={{paddingRight:"15px"}}>حذف</span></div>,
                action: () => alert('حذف')
            }}
            swipeRight={{
                content: <div style={{display:"flex",flexDirection:"row-reverse",alignItems: "center",
                    backgroundColor:"#ccca24",height:"100%",width:"100%",textAlign:"left"}}><span style={{paddingLeft:"15px"}}>ویرایش</span></div>,
                action: () => alert('ویرایش')
            }}
            onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
        >
            <ListItem style={{backgroundColor: "rgb(247 247 247)", height: 70, marginBottom: 2}} button id={id}>
                <Grid justify={"center"} alignItems={"center"} alignContent={"center"} container>
                    <Grid xs={2} item><Pill backgroundColor={backgroundColor}/></Grid>
                    <Grid alignContent={"center"} xs={7} item> <small>{title}</small></Grid>
                    <Grid xs={3} item> <small>{new Date(date).toLocaleDateString('fa-IR', {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })}</small></Grid>
                </Grid>


            </ListItem>
        </SwipeableListItem>
    );
}

export default DevItemEvent;