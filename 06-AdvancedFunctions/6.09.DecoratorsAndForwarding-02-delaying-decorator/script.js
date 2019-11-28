"use strict";

function work(a, b) {
    alert( a + b ); // work is an arbitrary function or method
}
  
function spy(func) {
    let calls = [];

}

//work = spy(work);
  
work(1, 2); // 3
work(4, 5); // 9
  
for (let args of work.calls) {
    alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}