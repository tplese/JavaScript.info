"use strict";

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

if (styles.length % 2 != 0) {
    let middle = (styles.length - 1) / 2;
    styles[middle] = "Classics";
};

alert( styles.shift() );

styles.unshift("Rap", "Reggae");

alert ( styles );