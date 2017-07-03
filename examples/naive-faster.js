'use strict'

var benchSetImmediate = require('./benchSetImmediate')
var benchNaive = require('./naive')
var bench = require('fastbench')
var max = 1000000

function parallel (tasks, done) {
  var count = 0
  var length = tasks.length

  for (var i = 0; i < length; i++) {
    tasks[i](wrap)
  }

  function wrap (err) {
    if (err) { return done (err) }
    if (++count === length) {
      done()
    }
  }
}

function benchNaiveFaster (cb) {
  parallel([immediate, immediate, immediate], cb)
}

function immediate (cb) {
  setImmediate(cb)
}

module.exports = benchNaiveFaster

if (require.main == module) {
  var run = bench([
    benchNaive,
    benchNaiveFaster,
    benchSetImmediate
  ], max)
  run(run)
}
