<<<<<<< HEAD
"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet(messages);
alert("Message 2 read? " + readMessages.has(messages[2]) );

readMessages.add(messages[2]);
alert("Message 2 read? " + readMessages.has(messages[2]) );

messages.pop();
=======
"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet(messages);
alert("Message 2 read? " + readMessages.has(messages[2]) );

readMessages.add(messages[2]);
alert("Message 2 read? " + readMessages.has(messages[2]) );

messages.pop();
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert("Message 2 read? " + readMessages.has(messages[2]) );