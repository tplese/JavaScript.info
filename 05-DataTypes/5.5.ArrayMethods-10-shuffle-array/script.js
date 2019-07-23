"use strict";

function shuffle(arr) {
    /*  
     *  sort(() => X) needs to return X = 1, 0 or -1
     *  so, min = -1, and max = 1
     *  formula for that kind of random number: Math.random() * (max + 1 - min) + min;
     *  that way Math.random returns between: -1 and 1.99
     *  Math.floor makes it: 
     *                  from -1 to -0.99 = -1
     *                  from 0 to 0.99 = 0
     *                  from 1 to 1.99 = 1
     * ...which means all 3 options are equally represented
    */
    arr.sort( () => Math.floor( Math.random() * 3 - 1 ) );
}

let arr = [1, 2, 3];
shuffle(arr);