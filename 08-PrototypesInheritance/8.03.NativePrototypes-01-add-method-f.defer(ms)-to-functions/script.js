"use script";

function f() {
    alert("Hello!");
}

function x() {
    alert("Bye!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};

f.defer(1000); // shows "Hello!" after 1 second
x.defer(5000);