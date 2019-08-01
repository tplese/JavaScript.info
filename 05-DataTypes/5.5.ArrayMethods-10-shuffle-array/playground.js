"use strict";

let arr = [1, 2, 3];

function shuffle(arr) {
    arr.sort( () => Math.floor( Math.random() * 3 - 1 ) );

    return arr;
}


let testTries = 1000000;
let count_123 = 0;
let count_132 = 0;
let count_213 = 0;
let count_231 = 0;
let count_312 = 0;
let count_321 = 0;

for (let i = 0; i < testTries; i++) {
    shuffle(arr);

    if (arr.join() === "1,2,3") count_123++;
    if (arr.join() === "1,3,2") count_132++;
    if (arr.join() === "2,1,3") count_213++;
    if (arr.join() === "2,3,1") count_231++;
    if (arr.join() === "3,1,2") count_312++;
    if (arr.join() === "3,2,1") count_321++;
};

console.log("123: " + count_123);
console.log("132: " + count_132);
console.log("213: " + count_213);
console.log("231: " + count_231);
console.log("312: " + count_312);
console.log("321: " + count_321);
