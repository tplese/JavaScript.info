<<<<<<< HEAD
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
  
=======
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
  
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
  alert( unique(values) ); // Hare, Krishna, :-O