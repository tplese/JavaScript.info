"use strict";

let obj = {};

function A(obj) { return obj; }
function B(obj) { return obj; }

let a = new A(obj);
let b = new B(obj);

alert( a == b ); // true