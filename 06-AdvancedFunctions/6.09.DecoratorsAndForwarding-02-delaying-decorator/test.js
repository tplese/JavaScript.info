describe('delay', function() {
  let oneSecond = 1000;
  let twoSeconds = 2000;
  
  before(function() {
    this.clock = sinon.useFakeTimers();
  });

  after(function() {
    this.clock.restore();    
  });
  
  it('postpones call by 1000 ms', function() {
    let before = Date.now();

    function f() {
      let after = Date.now();
      assert.equal(after - before, oneSecond);
    }

    let f1000Test = delay(f, oneSecond);
    f1000Test();
    this.clock.tick(twoSeconds);
  });

  it('passes all the arguments', function() {
    let testArray = [123, 456]
    
    function f(...args) {
      assert.deepEqual(args, testArray);
    }

    let f1500Test = delay(f, oneSecond);
    f1500Test(...testArray);
    this.clock.tick(twoSeconds);
  });

  it('passes "this"', function() {
    let testObj = {
      f: function(...args) { 
      //alert(this);
      //alert(testObj);
      assert.equal(this, testObj);
      }
    };

    testObj.f = delay(testObj.f, oneSecond);
    testObj.f("test33");
    this.clock.tick(twoSeconds);
  });
});