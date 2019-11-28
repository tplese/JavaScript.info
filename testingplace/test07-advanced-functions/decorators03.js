"use strict";;

function spy(func) {
    function wrapper(...args) {
        // using ...args instead of arguments to store "real" array in wrapper.calls
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    
    wrapper.calls = [];    
    
    return wrapper;
}

function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}

//spy.wrapper.calls = [];

work = spy(work);

work.testprop = 12;

work(1, 2); // 3
work(4, 5); // 9


console.log ("test" + work.testprop);

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
};