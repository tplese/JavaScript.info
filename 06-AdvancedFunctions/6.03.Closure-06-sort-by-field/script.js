"use strict";

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

function byField (fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

alert("Sorted by name:");
users.sort( byField('name') );
let nameSorted = users.map(item => " " + item.name + " " + item.surname + ": " + item.age);
alert( nameSorted );

alert("Sorted by age:");
users.sort( byField('age') );
let ageSorted = users.map(item => " " + item.name + " " + item.surname + ": " + item.age);
alert( ageSorted );

alert("Sorted by surname:");
users.sort( byField('surname') );
let surnameSorted = users.map(item => " " + item.name + " " + item.surname + ": " + item.age);
alert( surnameSorted );