'use strict'

var bench = require('fastbench')
var benchSetImmediate = require('./benchSetImmediate')
var max = 1000000

function parallel (tasks, done) {
  var count = 0
  var length = tasks.length
  tasks.forEach(function (task) {
    task(function (err) {
      if (err) { return done (err) }
      if (++count === length) {
        done()
      }
    })
  })
}

function benchNaive (cb) {
  parallel([immediate, immediate, immediate], cb)
}

function immediate (cb) {
  setImmediate(cb)
}

module.exports = benchNaive

if (require.main === module) {
  var run = bench([
    benchNaive,
    benchSetImmediate
  ], max)
  run(run)
}
