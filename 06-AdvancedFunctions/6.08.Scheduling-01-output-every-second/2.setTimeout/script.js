"use strict";

function printNumbers(from, to) {
    let timerID = setTimeout(function prolonger() {
        if (from <= to) {
            console.log(from++);
            setTimeout(prolonger, 1000);
        } else {
            clearTimeout(timerID);
        };
    }, 1000);
}

printNumbers(3, 10);