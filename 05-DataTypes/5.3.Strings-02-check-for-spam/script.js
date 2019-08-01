<<<<<<< HEAD
"use strict";

function checkSpam(str) {
    str = str.toLowerCase();

    if ( str.includes('viagra') || str.includes("xxx") ) {
        return true;
    } else {
        return false;
    };
}

alert( checkSpam('buy ViAgRA now') ); // == true
alert( checkSpam('free xxxxx') ); // == true
=======
"use strict";

function checkSpam(str) {
    str = str.toLowerCase();

    if ( str.includes('viagra') || str.includes("xxx") ) {
        return true;
    } else {
        return false;
    };
}

alert( checkSpam('buy ViAgRA now') ); // == true
alert( checkSpam('free xxxxx') ); // == true
>>>>>>> aeeb1565fdcf99dca9886dfc2a676754d51abdc4
alert( checkSpam("innocent rabbit") ); //== false