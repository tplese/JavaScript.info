"use strict";

function f(...args) {
    console.log(args);
}

function throttle(func, ms) {
    let lastInputs;
    let lastThis;
    let printedInputs;
    let pausing = false;    
    
    function wrapper(...args) {
        if (pausing) {
            lastInputs = args;
            lastThis = this;
            return;
        };

        let result = func.apply(this, args);
        pausing = true;
        printedInputs = lastInputs;
        
        setTimeout(function timer () {
            if (printedInputs != lastInputs) {
                pausing = false;
                wrapper.apply(lastThis, lastInputs);
            };
        }, ms);

        return result;
    }
    return wrapper;
}

let f1000 = throttle(f, 1000);
f1000(1); // printed out
f1000(2); // not printed out
f1000(3); // printed out
setTimeout(() => f1000(4), 1100); // not printed out
setTimeout(() => f1000(5), 1500); // printed out
setTimeout(() => f1000(5), 2500);