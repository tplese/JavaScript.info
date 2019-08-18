<<<<<<< HEAD
"use strict";

function topSalary(salaries) {
    let topSalary = 0;
    let topPaidPerson = null;

    for (let [person, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topPaidPerson = person;  
        };
    };

    return topPaidPerson;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

=======
"use strict";

function topSalary(salaries) {
    let topSalary = 0;
    let topPaidPerson = null;

    for (let [person, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topPaidPerson = person;  
        };
    };

    return topPaidPerson;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
  alert( topSalary(salaries) );