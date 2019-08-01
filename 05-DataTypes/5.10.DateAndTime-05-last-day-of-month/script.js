"use strict";

function getLastDayOfMonth(year, month) {
    let nextMonth = new Date(year, month + 1);
    let lastDay = new Date( nextMonth.getTime() - (24 * 3600 * 1000) );

    return lastDay.getDate();
}

alert( getLastDayOfMonth(2019, 6) );