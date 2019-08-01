<<<<<<< HEAD
"use strict";

let map = new Map();

map.set("name", "John");

let keys = Array.from( map.keys() );

// Error: keys.push is not a function
keys.push("more");

=======
"use strict";

let map = new Map();

map.set("name", "John");

let keys = Array.from( map.keys() );

// Error: keys.push is not a function
keys.push("more");

>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert(keys)