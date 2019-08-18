"use strict";

function getSecondsToTomorrow() {
    let currentTime = Date.now();
    
    let startOfNextDay = new Date();
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);
    startOfNextDay.setHours(0, 0, 0, 0);

    let difference = startOfNextDay.getTime() - currentTime; 
    return Math.round(difference / 1000);
}
alert( getSecondsToTomorrow() );