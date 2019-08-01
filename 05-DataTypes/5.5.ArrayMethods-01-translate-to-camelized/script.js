"use strict";

function camelize(str) {
    let array1 = str.split("-");


    let array2 = array1.map(function(item, index) {
        if (index > 0) {
            return item[0].toUpperCase() + item.slice(1);
        };
        return item;
    });

    array1 = array1.filter(word => word.length > 0);

    str = array2.join("");

    return str;
}

console.log( camelize("background-color") ); // == 'backgroundColor';
console.log( camelize("list-style-image") ); // == 'listStyleImage';
console.log( camelize("-webkit-transition") ); // == 'WebkitTransition';