"use strict";

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);

let repeats = 100;


// RESULT FROM BOTTOM: whichever loop is run first (head of pockets), takes more time

// head loop
let averageHead = 0;
for (let k = 0; k < repeats; k++) {
    let nowHead = Date.now();

    for (let i = 0; i < 99999; i++) {
        let j = head.glasses;
    };
    
    averageHead += (Date.now() - nowHead);
}
alert( "From head: " + (averageHead / repeats) );

// pocket loop
let averagePockets = 0;
for (let k = 0; k < repeats; k++) {
    let nowPockets = Date.now();

    for (let i = 0; i < 99999; i++) {
        let j = pockets.glasses;
    };
    
    averagePockets += (Date.now() - nowPockets);
}
alert( "From pockets: " + (averagePockets / repeats) );