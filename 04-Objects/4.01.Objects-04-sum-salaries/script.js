"use strict";

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

alert( sum(salaries) );

function sum(salaries) {
    let result = 0;

    if (salaries === undefined) {
        return 0;
    };

    for (let key in salaries) {
        result += salaries[key];
    };

    return result;
}

