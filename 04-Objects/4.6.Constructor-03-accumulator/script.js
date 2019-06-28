"use strict";

function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.userInt = Number( prompt("Give me an int", 0) );
        this.value = this.value + this.userInt; 
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);