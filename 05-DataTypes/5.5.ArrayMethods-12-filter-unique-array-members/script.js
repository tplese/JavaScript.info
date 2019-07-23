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

console.log( unique(strings) );