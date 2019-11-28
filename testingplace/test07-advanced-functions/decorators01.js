function slow(x) {
    // there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
  }
  
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        return "Again: " + cache.get(x); // read the result from it
      }
      console.log ("test1");
      let result = func(x);  // otherwise call func
      
      //console.log (func);
      console.log ("test2");

      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }
  console.log("vanjski1");
  slow = cachingDecorator(slow);
  console.log("vanjski2");
  console.log( slow(1) ); // slow(1) is cached
  console.log( slow(1) ); // the same
  
  console.log( slow(2) ); // slow(2) is cached
  console.log( slow(2) ); // the same as the previous line