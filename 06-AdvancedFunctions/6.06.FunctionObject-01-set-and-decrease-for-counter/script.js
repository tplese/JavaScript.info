"use strict";

function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.set = function(x) {
    return counter.count = x;
  }

  counter.decrease = function() {
    return --counter.count;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

console.log( counter() ); // 10


counter.set(2);
console.log( counter() );