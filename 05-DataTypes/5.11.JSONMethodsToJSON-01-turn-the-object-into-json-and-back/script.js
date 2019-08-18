"use strict";

let user = {
    name: "John Smith",
    age: 35
};

let userJSON = JSON.stringify(user);
alert(userJSON);

let userBackToObject = JSON.parse(userJSON);
alert(userBackToObject);