"use strict";

function extractCurrencyValue(str) {
    if ( str[0] === "$") {
        str = str.slice(1);
    };

    return Number(str);
}

alert( extractCurrencyValue('$120') === 120 ); // true