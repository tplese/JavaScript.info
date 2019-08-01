"use strict";

function Calculator () {
    
    this.read = function() {
        this.intOne = Number(prompt("Give 1st integer", 0));
        this.intTwo = Number(prompt("Give 2nd integer", 0));
    }

    this.sum = function() {
        return this.intOne + this.intTwo;
    }

    this.mul = function() {
        return this.intOne * this.intTwo;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );