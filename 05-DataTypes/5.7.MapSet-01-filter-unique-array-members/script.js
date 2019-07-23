"use strict";

function unique(arr) {
    let tempSet = new Set(arr);
    
    let uniqueArray = [];

    for (let element of tempSet) {
        uniqueArray.push(element);
    };

    return uniqueArray;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O