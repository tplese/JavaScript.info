"use strict";

/*
 * SLOW SOLUTION WITH RECURSION: 
 *
function fib(n) {
    if (n <= 1) {
        return n;
    } else {
      return fib(n - 1) + fib(n - 2);
    };
}
*/

let fibonacciNums = [0, 1, 1];

function fib(n) {
    if (fibonacciNums[n] === undefined) {
        return fibonacciNums[n] = fib(n - 1) + fib(n - 2);
    } else {
        return fibonacciNums[n];
    };
}

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77) ); // 55279397008847571