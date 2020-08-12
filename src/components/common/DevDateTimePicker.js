import React, {useState} from "react";
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";

import {MuiPickersUtilsProvider, DateTimePicker, KeyboardDateTimePicker} from "@material-ui/pickers";
import {TextField} from "@material-ui/core";
import DevTextField from "./DevTextField";

jMoment.loadPersian({dialect: "persian-modern", usePersianDigits: true});
moment.updateLocale('fa'
    , {
        jMonthsShort: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    }
);
DevDateTimePicker.propTypes = {};

function DevDateTimePicker({
                               fullWidth,
                               label, maxDate,
                               value, minDate,
                               handleDateChange
                           }) {
    return (
        <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
            <DateTimePicker
                clearable
                minDate={minDate}
                maxDate={maxDate}
                ampm={false}
                animateYearScrolling={true}
                autoOk={true}
                // disableToolbar={true}
                TextFieldComponent={(props) => {
                    return (<DevTextField fullWidth={fullWidth} label={label} {...props}/>)
                }}
                minDateMessage={`تاریخ نمیتواند بزرگتر باشد`}
                maxDateMessage={`تاریخ  نمیتواند کمتر باشد`}
                // mask={"__/__/__/ __:__"}
                format={"jYY/jMM/jDD HH:mm"}
                inputVariant={"outlined"}
                // variant={"inline"}
                cancelLabel="لغو"
                okLabel="تأیید"
                clearLabel={null}
                labelFunc={date => (date ? date.format("jYY/jMM/jDD HH:mm") : "")}
                value={value}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
}

export default DevDateTimePicker;
