"use strict";

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");


// These calls do the same thing or not?
rabbit.sayHi(); // result: "Rabbit" 
Rabbit.prototype.sayHi(); // result: undefined 
Object.getPrototypeOf(rabbit).sayHi(); // result: undefined
rabbit.__proto__.sayHi(); // result: "Rabbit" -> right answer: undefined