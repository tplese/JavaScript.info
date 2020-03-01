"use strict";

function f(x) {
    alert(x);
}

function delay(f, ms) {
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
}

let f1000 = delay(f, 1000);

f1000("test");