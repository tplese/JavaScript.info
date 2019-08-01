"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakMap();

readMessages.set( messages[0], new Date(2019, 7, 13) );

alert( readMessages.get(messages[0]) );