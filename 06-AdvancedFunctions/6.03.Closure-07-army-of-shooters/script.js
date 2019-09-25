"use strict";

function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
      let shooter = function() { // shooter function
        alert( i ); // should show its number
      };
      shooters.push(shooter);
      //console.log(shooters)
      //console.log(i);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // the shooter number 0 shows 10
  army[5](); // and number 5 also outputs 10...
  // ... all shooters show 10 instead of their 0, 1, 2, 3...