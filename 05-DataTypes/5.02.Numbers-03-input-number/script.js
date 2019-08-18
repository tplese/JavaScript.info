"use strict";

function readNumber() {
    let userNumber;

    do {
        userNumber = prompt("Give me a number", "");
    } while( !isFinite(userNumber) );
    
    if ( Object.is(userNumber, "") || Object.is(userNumber, null) ) {
        return null;
    };

    return Number(userNumber);
}

alert( "I read: " + readNumber() );
