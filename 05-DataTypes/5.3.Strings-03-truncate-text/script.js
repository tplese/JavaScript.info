"use strict";

function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;

    let ending = maxlength - 1;
    str = str.slice(0, ending) + String.fromCodePoint(8230); 

    return str;
}

alert( truncate("What I'd like to tell on this topic is:", 20) ); // = "What I'd like to te…"
alert( truncate("Hi everyone!", 20) ); // = "Hi everyone!"