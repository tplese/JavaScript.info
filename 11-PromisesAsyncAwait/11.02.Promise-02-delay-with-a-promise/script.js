"use strict";

function delay(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log('runs after 3 seconds'));