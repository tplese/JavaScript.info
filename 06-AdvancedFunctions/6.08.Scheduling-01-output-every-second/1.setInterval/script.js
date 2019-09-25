"use strict";

function printNumbers(from, to) {
    let timerID = setInterval(() => {
        if (from <= to) {
            console.log(from++);
        } else {
            clearInterval(timerID);
        };
    }, 1000, from, to);
}

printNumbers(3, 10);
