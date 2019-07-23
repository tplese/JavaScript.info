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

filterRangeInPlace(startArray, 1, 4);