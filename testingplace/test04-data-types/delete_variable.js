<<<<<<< HEAD
"use strict";

let john = { name: "John" };

let visitsCountMap = new WeakMap();

visitsCountMap.set(john, 123);

// now john leaves us, we don't need him anymore
john = null;

delete window.john;
console.log("test");
=======
"use strict";

let john = { name: "John" };

let visitsCountMap = new WeakMap();

visitsCountMap.set(john, 123);

// now john leaves us, we don't need him anymore
john = null;

delete window.john;
console.log("test");
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
console.log("var: " + john);