'use strict';

const weekDay = new Date().getDay();

const date = (day) => {
    if (day === 0 || day === 6) {
        //if ((day === weekOfDay) = new Date().getDate(1) ) {
        // if ((day === weekOfDay) = 0) {
        console.log(`today is weekend `);
    } else {
        console.log(`this is worked day`);
    }
}
date(weekDay);