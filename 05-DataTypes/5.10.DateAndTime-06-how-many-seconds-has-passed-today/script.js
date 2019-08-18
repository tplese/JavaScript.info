"use strict";

function getSecondsToday() {
    let currentDate = Date.now();
    
    let startOfDay = new Date(currentDate);
    startOfDay.setHours(0, 0, 0, 0);
        
    return Math.round( (currentDate - startOfDay.getTime()) / 1000 );
}

alert( getSecondsToday() );