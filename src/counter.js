const counterRepository = require('counter-repository')

module.exports = {
  increment(counterName) {
    let newCounter
    // const counter = counterRepository.getCounter(counterName)

    newCounter = {
      name: counterName,
      count: 1
    }
    
    return newCounter       

  }
}
