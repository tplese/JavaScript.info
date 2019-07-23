"use strict";

let john = { name: "John" };

let visitsCountMap = new WeakMap();

visitsCountMap.set(john, 123);

// now john leaves us, we don't need him anymore
john = null;

delete window.john;
console.log("test");
console.log("var: " + john);