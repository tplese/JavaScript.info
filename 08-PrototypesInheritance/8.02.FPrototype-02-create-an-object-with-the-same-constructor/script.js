"use strict";

function ExampleObj(elem) {
    this.name = elem;
}

let obj = new ExampleObj("Proton");

let obj2 = new obj.constructor("Electron");

alert(obj2.constructor == ExampleObj);
alert(ExampleObj.prototype.constructor == ExampleObj);

alert(obj.name);
alert(obj2.name);