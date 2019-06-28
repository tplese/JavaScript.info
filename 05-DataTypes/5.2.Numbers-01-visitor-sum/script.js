"use strict";

let visitorNum1;
let visitorNum2;

function visitorSum(num1, num2) {
    return num1 + num2;
}

function read() {
    visitorNum1 = Number( prompt("Give me 1st integer", 0) );
    visitorNum2 = Number( prompt("Give me 2nd integer", 0) );
}

read();
alert( visitorSum(visitorNum1, visitorNum2) );
