'use strict'

var bench = require('fastbench')
var max = 1000000

var nextDone
var nextCount

function benchSetImmediate (done) {
  nextCount = 3
  nextDone = done
  setImmediate(somethingImmediate)
  setImmediate(somethingImmediate)
  setImmediate(somethingImmediate)
}

function somethingImmediate () {
  nextCount--
  if (nextCount === 0) {
    nextDone()
  }
}

module.exports = benchSetImmediate

if (require.main === module) {
  var run = bench([benchSetImmediate], max)
  run(run)
}
