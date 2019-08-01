<<<<<<< HEAD
"use strict";

function getAverageAge(users) {
    let sumOfAges = users.reduce( (sum, current) => sum + current.age, 0);

    return sumOfAges / users.length;
=======
"use strict";

function getAverageAge(users) {
    let sumOfAges = users.reduce( (sum, current) => sum + current.age, 0);

    return sumOfAges / users.length;
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
}