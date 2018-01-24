module.exports = {
  increment(counterName) {
    let newCounter
      newCounter = {
        name: counterName,
        count: 1
      }
    return newCounter       

  }
}
