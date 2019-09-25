"use strict";

function sumTo(n) {
    if (n == 1) {
        return n;
    };

    return n + sumTo(n - 1);
}

alert( sumTo(100) );

// benchmark
let timestamp = Date.now();
for (let i = 0; i < 100000; i++) sumTo(100);
let elapsedTime = Date.now() - timestamp;
alert(`RECURSION took: ${elapsedTime} ms`);