"use strict";

// didn't finish the exercise myself
function sum(a) {
    let sumAll = a;

    function nestedFunc(b) {
        sumAll += b;
        return nestedFunc;
    }
    
    nestedFunc.toString = function() {
        return sumAll;
    };

    return nestedFunc; 
}

alert( sum(1)(2) );
alert( sum(5)(-1)(2) );
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) );