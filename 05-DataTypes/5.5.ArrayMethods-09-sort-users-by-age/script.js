<<<<<<< HEAD
"use strict";

function sortByAge(users) {
    users.sort( (user1, user2) => user1.age - user2.age );

    return users;
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
=======
"use strict";

function sortByAge(users) {
    users.sort( (user1, user2) => user1.age - user2.age );

    return users;
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert(arr[2].name); // Pete