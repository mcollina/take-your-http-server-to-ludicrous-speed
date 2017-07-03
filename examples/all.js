'use strict'

var benchSetImmediate = require('./benchSetImmediate')
var benchNaive = require('./naive')
var benchNaiveFaster = require('./naive-faster')
var benchNoAlloc = require('./no-alloc')
var benchWithReusify = require('./with-reusify')
var bench = require('fastbench')
var fastparallel = require('fastparallel')({ results: false })
var async = require('async')
var neo = require('neo-async')
var steed = require('steed')()
var max = 1000000

function benchFastParallel (cb) {
  fastparallel(null, [immediateFP, immediateFP, immediateFP], null, cb)
}

function benchSteed (cb) {
  steed.parallel([immediateFP, immediateFP, immediateFP], cb)
}

function benchAsyncParallel (done) {
  async.parallel([immediate, immediate, immediate], done)
}

function benchNeoParallel (done) {
  neo.parallel([immediate, immediate, immediate], done)
}

function immediate (cb) {
  setImmediate(cb)
}

function immediateFP (arg, cb) {
  setImmediate(cb)
}

if (require.main == module) {
  var run = bench([
    benchSetImmediate,
    benchNaive,
    benchNaiveFaster,
    benchNoAlloc,
    benchWithReusify,
    benchFastParallel,
    benchSteed,
    benchAsyncParallel,
    benchNeoParallel
  ], max)

  run(run)
}
