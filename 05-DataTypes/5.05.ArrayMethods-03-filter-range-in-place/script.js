<<<<<<< HEAD
"use strict";

let startArray = [5, 3, 8, 1, 0];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length;) {
        
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        } else {
            i++;
        };
    };

    console.log(arr);
}

=======
"use strict";

let startArray = [5, 3, 8, 1, 0];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length;) {
        
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        } else {
            i++;
        };
    };

    console.log(arr);
}

>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
filterRangeInPlace(startArray, 1, 4);