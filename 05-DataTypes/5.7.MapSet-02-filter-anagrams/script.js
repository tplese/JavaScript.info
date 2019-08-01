<<<<<<< HEAD
"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let containerMap = new Map();
    
    let alphabetize = function(str) {
        return str.toLowerCase().split("").sort().join("");
    };

    for (let item of arr) {
        if ( !containerMap.has( alphabetize(item) ) ) {
            containerMap.set(alphabetize(item), item);
        };
    };

    let noAnagramsArray = [];

    for (let item of containerMap.values()) {
        noAnagramsArray.push(item);
    }

    return noAnagramsArray;
}


=======
"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let containerMap = new Map();
    
    let alphabetize = function(str) {
        return str.toLowerCase().split("").sort().join("");
    };

    for (let item of arr) {
        if ( !containerMap.has( alphabetize(item) ) ) {
            containerMap.set(alphabetize(item), item);
        };
    };

    let noAnagramsArray = [];

    for (let item of containerMap.values()) {
        noAnagramsArray.push(item);
    }

    return noAnagramsArray;
}


>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"