describe('console.foo with sinon', function () {
  
  beforeEach(function () {
    sinon.spy(console, 'log');
  });
  afterEach(function () {
    console.log.restore();
  });
  it('calls console.foo', function () {
    assert(!console.log.called);
    console.foo();
    assert(console.log.called);
  });
  it('calls console.foo with right argument', function () {
    console.foo();
    assert(console.log.calledOnce);
    assert(console.log.firstCall.calledWith('foo'));
  });
});