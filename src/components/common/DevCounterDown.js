import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "../../assets/css/counterDown.css";
import Countdown from 'react-countdown';
import Grid from "@material-ui/core/Grid";


const renderer = ({total, days, hours, minutes, seconds, completed}) => {
    if (completed) {
        // Render a complete state
        return <small className="text-muted text-center">اعلان شد</small>
    } else {
        // Render a countdown
        return (
            <>
                <div className="counter-down">
                    <div className="counter__time"
                         data-content="روز">{days}
                    </div>
                    :
                    <div className="counter__time "
                         data-content="ساعت">{("0" + hours).slice(-2)}</div>:
                    <div className="counter__time "
                         data-content="دقیقه">{("0" + minutes).slice(-2)}</div>:
                    <div className="counter__time "
                         data-content="ثانیه">{("0" + seconds).slice(-2)}</div>
                </div>
                <div className="counter-down">
                    <div className="counter_label text-muted">روز</div>
                    <div className="counter_label text-muted">ساعت</div>
                    <div className="counter_label text-muted">دقیقه</div>
                    <div className="counter_label text-muted">ثانیه</div>
                </div>
            </>

        );
    }
};
DevCounterDown.propTypes = {
    title: PropTypes.string,
    start: PropTypes.number,
    createDate: PropTypes.number
};

function DevCounterDown(props) {
    const {start, createDate, title} = props;
    return (
        <>
            <CircularProgressbarWithChildren maxValue={start} minValue={createDate} value={new Date().getTime()}>

                <Countdown renderer={renderer} date={start}/>
            </CircularProgressbarWithChildren>
            <small className="text-muted text-center">{title}</small>
        </>
    );
}

export default DevCounterDown;