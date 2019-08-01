"use strict";

function copySorted(arr) {
    let tempArray = [];
    tempArray = tempArray.concat(arr);

    return tempArray.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(arr);
alert(sorted);