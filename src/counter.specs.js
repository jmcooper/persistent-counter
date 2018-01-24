let counter = require('./counter')

describe('when I increment a new counter', () => {
  let newCounter
  before(() => {
    newCounter = counter.increment('sheep')
  })

  it('should return a new counter with name that was passed in', () => {
    expect(newCounter.name).to.eql('sheep')
  })

  it('should return a new counter the count set to 1', () => {
    expect(newCounter.count).to.eql(1)
  })
})
