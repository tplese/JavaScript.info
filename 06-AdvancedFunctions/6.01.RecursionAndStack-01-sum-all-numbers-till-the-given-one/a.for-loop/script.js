"use strict";

function sumTo(n) {
    let sum = 0;
    let iterations = n;

    for (let i = 1; i <= iterations; i++) {
        sum += n;
        n--;
    };

    return sum;
}

alert( sumTo(100) );

// benchmark
let timestamp = Date.now();
for (let i = 0; i < 100000; i++) sumTo(100);
let elapsedTime = Date.now() - timestamp;
alert(`FOR LOOP took: ${elapsedTime} ms`);