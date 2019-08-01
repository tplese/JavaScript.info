"use strict";

function getWeekDay(date) {
    let dayOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    
    return dayOfWeek[date.getDay()];
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"