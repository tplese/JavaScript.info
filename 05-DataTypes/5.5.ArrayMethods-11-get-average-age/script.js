"use strict";

function getAverageAge(users) {
    let sumOfAges = users.reduce( (sum, current) => sum + current.age, 0);

    return sumOfAges / users.length;
}