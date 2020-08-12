import React, {useEffect} from 'react';
import {API_SERVER} from "../../../config/constans";
import "../../../assets/css/backgroundDynamic.css";
import _ from "lodash"
import DevCounterDown from "../DevCounterDown";
import Grid from "@material-ui/core/Grid";
import DevItemEvent from "../Calandar/DevItemEvent";
import List from "@material-ui/core/List";
import DevTextField from "../DevTextField";
import {SwipeableList, SwipeableListItem} from '@sandstreamdev/react-swipeable-list';
import '../../../assets/css/swipeable.css';
import DevSearchBox from "../DevSearchBox";
import {func} from "prop-types";
// class CustomView extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount() {
//         console.log("this.props", this.props)
//     }
//
//     render() {
//         console.log(this.props);
//         let segs = sliceEvents(this.props, true); // allDay=true
//         console.log("this.defs", this.props)
//         console.log("segs", segs)
//         return (
//             <>
//                 <div>
//                     {this.props.dateProfile.currentRange.start.toUTCString()}
//                 </div>
//                 <div>
//                     {segs.length} events
//                 </div>
//             </>
//         );
//     }
//
// }

function EventView(props) {
    const [notifications, setNotifications] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [nearTime, setNearTime] = React.useState(new Date().getTime() + 10000000);

    useEffect(() => {

        console.log(props);
        let eventSource = getAllNotifications(title);
        eventSource.onerror = err => {
            eventSource.close();
        }
        getNearTime();
        return function () {
            eventSource.close()
        }

    }, [])
    const getDebounceNotifications = _.debounce((title) => {
        getAllNotifications(title)
    }, 2000);
    useEffect(() => {
        console.log("nearTime ", nearTime);

    }, [nearTime]);
    useEffect(() => {
        if (notifications.length > 0) {
            getNearTime();
        }
    }, [notifications]);
    useEffect(() => {

        getDebounceNotifications(title);

    }, [title]);

    function getAllNotifications(title) {
        setNotifications([]);
        let eventSource = new EventSource(API_SERVER + "/search/eventsBy/v2/?userName=" + localStorage.getItem("user") + "&param=" + title);
        eventSource.addEventListener('message', (data) => {
            let vNotifications = JSON.parse(data.data);
            console.log("vNotifications", vNotifications)
            setNotifications(noti => [...noti, {
                id: vNotifications.id,
                type: vNotifications.type,
                text: vNotifications.title,
                backgroundColor: vNotifications.backgroundColor,
                time: vNotifications.start
            }]);
        });
        eventSource.onerror = err => {
            eventSource.close();

        }
        return eventSource;
    }

    function getNearTime() {
        setNearTime(notifications.filter(notification => {
                console.log(notification.time > new Date().getTime());
                return notification.time > new Date().getTime();
            }
        ))
    }

    return (
        <Grid container>
            <Grid xs={1} item>
                {props.BackButton()}
            </Grid>
            <Grid xs={10} item/>
            <Grid xs={1} item>
                {props.AddEvent()}
            </Grid>

            <Grid style={{height: 200}} xs={12} container item>
                <Grid id="Clouds" xs={12} container item>
                    <Grid xs={4} item/>

                    <Grid style={{backgroundColor: "#ffffffd6"}} xs={4} item>
                        {nearTime.length > 0 && <DevCounterDown title={nearTime[0].text} start={nearTime[0].time}
                                                                createDate={new Date().getTime() - 9000000}/>}

                    </Grid>
                    <Grid xs={4} item/>

                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Foreground"></div>
                    <div className="Cloud Background"></div>
                    <div className="Cloud Background"></div>

                </Grid>
            </Grid>
            <Grid style={{padding: 5}} xs={12} item>
                {/*<DevTextField fullWidth={true} label={"جستجو"} value={title} onChange={(e) => {*/}
                {/*    setTitle(e.target.value)*/}
                {/*}}/>*/}
                <DevSearchBox border={true}/>
            </Grid>
            <Grid xs={12}>

                <SwipeableList>
                    <List style={{
                        maxHeight: "calc(67vh - 50px)",
                        overflowY: "scroll"
                    }} component="nav" aria-label="main mailbox folders">
                        {notifications.map(notification => <DevItemEvent data={{
                            id: notification.id,
                            title: notification.text,
                            backgroundColor: "#ccaa2f",
                            date: notification.time
                        }}/>)}

                    </List>
                </SwipeableList>
            </Grid>

            {/*<DevTable*/}
            {/*    columns={[*/}
            {/*        {name: "id", title: "شناسه"},*/}
            {/*        {name: "text", title: "عنوان رویداد"},*/}
            {/*        {name: "time", title: "زمان", type: "PersianDate"}]}*/}
            {/*    rows={notifications}/>*/}

        </Grid>
    );
}

export default EventView