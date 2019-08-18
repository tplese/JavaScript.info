<<<<<<< HEAD
"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakMap();

readMessages.set( messages[0], new Date(2019, 7, 13) );

=======
"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakMap();

readMessages.set( messages[0], new Date(2019, 7, 13) );

>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert( readMessages.get(messages[0]) );