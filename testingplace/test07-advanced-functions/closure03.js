function makeWorker() {
    let name = "Pete";
    console.log(name + "2");
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  //work();