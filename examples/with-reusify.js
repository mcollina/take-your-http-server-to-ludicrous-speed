'use strict'

var benchSetImmediate = require('./benchSetImmediate')
var benchNaive = require('./naive')
var benchNaiveFaster = require('./naive-faster')
var bench = require('fastbench')
var reusify = require('reusify')
var pool = reusify(Holder)
var max = 1000000

function parallel (tasks, done) {
  var count = 0
  var length = tasks.length
  var holder = pool.get()

  holder.count = length
  holder.done = done

  for (var i = 0; i < length; i++) {
    tasks[i](holder.release)
  }
}

function Holder () {
  this.next = null
  this.done = noop
  this.count = 0

  var that = this
  this.release = function (err) {
    var done = that.done

    if (err) {
      done(err)
    }

    if (--that.count === 0) {
      that.done = noop
      done()
      pool.release(that)
    }
  }
}

function noop () {}

function benchWithReusify (cb) {
  parallel([immediate, immediate, immediate], cb)
}

function immediate (cb) {
  setImmediate(cb)
}

module.exports = benchWithReusify

if (require.main == module) {
  var run = bench([
    benchNaive,
    benchNaiveFaster,
    benchWithReusify,
    benchSetImmediate
  ], max)
  run(run)
}
