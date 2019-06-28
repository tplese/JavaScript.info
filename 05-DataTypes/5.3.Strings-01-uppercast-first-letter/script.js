"use strict";

function ucFirst(str) {
    if (!str) return str;
    
    let firstLetter = str[0].toUpperCase();
    let otherLetters = str.slice(1);

    str = firstLetter + otherLetters;
    
    return str;
}

alert( ucFirst("john") );