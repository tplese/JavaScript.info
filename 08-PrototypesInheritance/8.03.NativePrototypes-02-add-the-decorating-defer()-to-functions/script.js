"use strict";

function f(a, b) {
    alert( a + b );
}

function x(a, b) {
    alert( a * b );
}

Function.prototype.defer = function (ms) {
    let func = this;
    
    function wrapper(...args) {
        setTimeout( ()=> func.apply(this, args), ms );
    }

    return wrapper;
};

f.defer(1000)(1, 2); // shows 3 after 1 second
x.defer(5000)(2, 3);