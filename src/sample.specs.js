let sample = require('./sample.js')

describe('when I run a test', () => {
  it('should pass', () => {
    expect(sample.doSomething()).to.be.true
  })
})
