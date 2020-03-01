describe('throttle', function () {
    let testf1000;
    
    before(function() {
        this.clock = sinon.useFakeTimers();
    });

    after(function () {
        this.clock.restore();
    });

    it('always passes the first call to f', function () {
        function f(x) {
            return x;
        }

        testf1000 = throttle(f, 1000);

        assert.equal(testf1000(1), 1);
    });

    it('after first call, passes the call to f once per 1000 ms', function () {
        let f = sinon.spy();
        
        testf1000 = throttle(f, 1000);
        testf1000("test 1"); // shows
        testf1000("test 2"); // (throttling, 1000ms not out yet)
        testf1000("test 3"); // (throttling, 1000ms not out yet)
        setTimeout(() => testf1000("test 4"), 100); // shows
        setTimeout(() => testf1000("test 5"), 1100);
        setTimeout(() => testf1000("test 6"), 1500); // shows
        this.clock.tick(2000);

        sinon.assert.calledThrice(f);
    });

    it("after cooldown, executes ignored call if it's the last one", function () {
        let lastCall;

        function f(...args) {
            lastCall = String(args);
            return lastCall;
        }
        
        testf1000 = throttle(f, 1000);
        testf1000("test 1"); // shows
        testf1000("test 2"); // (throttling, 1000ms not out yet)
        testf1000("test 3"); // (throttling, 1000ms not out yet)
        this.clock.tick(2000);
        // after 1000ms passes without call, outputs "test 3"
        assert.equal(lastCall, "test 3");
    });
});

/*
describe("throttle(f, 1000)", function() {
    let f1000;
    let log = "";
  
    function f(a) {
      log += a;
    }
  
    before(function() {
      f1000 = throttle(f, 1000);
      this.clock = sinon.useFakeTimers();
    });
  
    it("the first call runs now", function() {
      f1000(1); // runs now
      assert.equal(log, "1");
    });
  
    it("then calls are ignored till 1000ms when the last call works", function() {
      f1000(2); // (throttling - less than 1000ms since the last run)
      f1000(3); // (throttling - less than 1000ms since the last run)
      // after 1000 ms f(3) call is scheduled
  
      assert.equal(log, "1"); // right now only the 1st call done
  
      this.clock.tick(1000); // after 1000ms...
      assert.equal(log, "13"); // log==13, the call to f1000(3) is made
    });
  
    it("the third call waits 1000ms after the second call", function() {
      this.clock.tick(100);
      f1000(4); // (throttling - less than 1000ms since the last run)
      this.clock.tick(100);
      f1000(5); // (throttling - less than 1000ms since the last run)
      this.clock.tick(700);
      f1000(6); // (throttling - less than 1000ms since the last run)
  
      this.clock.tick(100); // now 100 + 100 + 700 + 100 = 1000ms passed
  
      assert.equal(log, "136"); // the last call was f(6)
    });
  
    after(function() {
      this.clock.restore();
    });
  
  });
  
  describe('throttle', () => {
  
    it('runs a forwarded call once', done => {
      let log = '';
      const f = str => log += str;
      const f10 = throttle(f, 10);
      f10('once');
  
      setTimeout(() => {
        assert.equal(log, 'once');
        done();
      }, 20);
    });
  
  });
  */