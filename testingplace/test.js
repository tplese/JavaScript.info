it('calls console.log', function () {
    // save reference to the actual console.log method
    var prev = console.log;
    var called = false;
    console.log = function (arg) {
      called = true;
    };
    console.foo();
    // restore console.log
    console.log = prev;
    assert(called);
  });