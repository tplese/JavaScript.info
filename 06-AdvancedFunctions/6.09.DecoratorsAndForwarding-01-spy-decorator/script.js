"use strict";

function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}
  
function spy(func) {
    let calls = [1, 2];

}

//work = spy(work);
  
work(1, 2); // 3
work(4, 5); // 9
  
for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}