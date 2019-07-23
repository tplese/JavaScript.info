"use strict";

function checkSpam(str) {
    str = str.toLowerCase();

    if ( str.includes('viagra') || str.includes("xxx") ) {
        return true;
    } else {
        return false;
    };
}

alert( checkSpam('buy ViAgRA now') ); // == true
alert( checkSpam('free xxxxx') ); // == true
alert( checkSpam("innocent rabbit") ); //== false