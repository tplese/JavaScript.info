<<<<<<< HEAD
"use strict";

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user

alert( name ); // John
alert( age ); // 30
=======
"use strict";

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user

alert( name ); // John
alert( age ); // 30
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert( isAdmin ); // false