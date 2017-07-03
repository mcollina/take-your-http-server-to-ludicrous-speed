'use strict'

var bench = require('fastbench')
var neo = require('neo-async')
var async = require('async')
var steed = require('steed')()
var max = 1000000

function benchSteed (cb) {
  steed.map(new State(cb, 2), [1, 2, 3], multiply, done)
}

function State (cb, factor) {
  this.cb = cb
  this.factor = factor
}

function multiply (arg, cb) {
  setImmediate(cb, null, arg * this.factor)
}

function done (err, results) {
  if (err) { return this.cb(err) }

  var acc = 0
  for (var i = 0; i < results.length; i++) {
    acc += results[i]
  }

  this.cb(null, acc)
}

function benchNeo (cb) {
  var factor = 2
  neo.map([1, 2, 3], function work (arg, cb) {
    setImmediate(cb, null, arg * factor)
  }, function (err, results) {
    if (err) { return cb(err) }

    var acc = 0
    for (var i = 0; i < results.length; i++) {
      acc += results[i]
    }

    cb(null, acc)
  })
}

function benchAsync (cb) {
  var factor = 2
  async.map([1, 2, 3], function work (arg, cb) {
    setImmediate(cb, null, arg * factor)
  }, function (err, results) {
    if (err) { return cb(err) }

    var acc = 0
    for (var i = 0; i < results.length; i++) {
      acc += results[i]
    }

    cb(null, acc)
  })
}

if (require.main == module) {
  var run = bench([
    benchSteed,
    benchAsync,
    benchNeo
  ], max)

  run(run)
}
