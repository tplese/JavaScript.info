<<<<<<< HEAD
"use strict";

let theArray = [];

function sumInput() {
    let userInput = 0;

    do {
        userInput = prompt("Give me an integer", 0);
        
        if (userInput === "" || userInput === null) {
            break;
        } else if ( isFinite(userInput) ) {
            theArray.push( Number(userInput) );
        };

    } while ( isFinite(userInput) && userInput != null )
    
    let sum = 0;
    
    for (let item of theArray) {
        sum += item;
    };

    return sum;
}

=======
"use strict";

let theArray = [];

function sumInput() {
    let userInput = 0;

    do {
        userInput = prompt("Give me an integer", 0);
        
        if (userInput === "" || userInput === null) {
            break;
        } else if ( isFinite(userInput) ) {
            theArray.push( Number(userInput) );
        };

    } while ( isFinite(userInput) && userInput != null )
    
    let sum = 0;
    
    for (let item of theArray) {
        sum += item;
    };

    return sum;
}

>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert (sumInput() );