<<<<<<< HEAD
"use strict";

function Calculator() {
    let methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
    
    this.calculate = function(str) {
        let operationArray = str.split(" ");
        
        let operand1 = Number(operationArray[0]);
        let operation = operationArray[1];
        let operand2  = Number(operationArray[2]);

        return methods[operation](operand1, operand2);
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
=======
"use strict";

function Calculator() {
    let methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
    
    this.calculate = function(str) {
        let operationArray = str.split(" ");
        
        let operand1 = Number(operationArray[0]);
        let operation = operationArray[1];
        let operand2  = Number(operationArray[2]);

        return methods[operation](operand1, operand2);
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert( result ); // 8