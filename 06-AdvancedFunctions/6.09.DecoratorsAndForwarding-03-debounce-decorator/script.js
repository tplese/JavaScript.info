//not a perfect solution

"use strict";

function debounce(func, ms) {
    function wrapper(...args) {
        let current = Date.now();

        if (wrapper.firstCall) {
            wrapper.firstCall = false;
            wrapper.callTime = current;
            func(args);
        } else if (current - wrapper.callTime >= ms) {
            wrapper.callTime = current;
            func(args);
        };
        return;
    };

    wrapper.firstCall = true;
    wrapper.callTime = Date.now();

    return wrapper;
}

//let f = debounce(alert, 1000);

//f(1); // runs immediately
//f(2); // ignored

//setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
//setTimeout( () => f(4), 1100); // runs
//setTimeout( () => f(5), 1500); // ignored (less than 1000 ms from the last run)