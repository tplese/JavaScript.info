"use strict";

let hamster = {
    stomach: [],
  
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // empty array
lazy.eat("mango");
lazy.eat("melon");
alert( lazy.stomach ); // mango, melon
alert( hamster.stomach ); // empty array