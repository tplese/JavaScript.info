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

  alert( topSalary(salaries) );