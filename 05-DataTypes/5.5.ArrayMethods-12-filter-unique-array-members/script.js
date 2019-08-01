<<<<<<< HEAD
"use strict";

function unique(arr) {
    let uniqueElements = [];
    
    for (let item of arr) {
        if ( !uniqueElements.find(current => current === item) ) uniqueElements.push(item);
    };
    
    return uniqueElements;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

=======
"use strict";

function unique(arr) {
    let uniqueElements = [];
    
    for (let item of arr) {
        if ( !uniqueElements.find(current => current === item) ) uniqueElements.push(item);
    };
    
    return uniqueElements;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
console.log( unique(strings) );