"use strict";

function sumTo(n) {
    return n * (1 + n) / 2;
}

alert( sumTo(100) );

// benchmark
let timestamp = Date.now();
for (let i = 0; i < 100000; i++) sumTo(100);
let elapsedTime = Date.now() - timestamp;
alert(`ARITHMETIC PROGRESSION took: ${elapsedTime} ms`);