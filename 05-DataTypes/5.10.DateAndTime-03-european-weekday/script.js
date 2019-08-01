"use strict";

function getLocalDay(date) {
    let dayOfWeek = date.getDay();
    if ( dayOfWeek == 0) dayOfWeek = 7;

    return dayOfWeek;
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2