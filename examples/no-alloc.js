
var benchSetImmediate = require('./benchSetImmediate')
var benchNaive = require('./naive')
var benchNaiveFaster = require('./naive-faster')
var bench = require('fastbench')
var max = 1000000

var head = new Holder()
var tail = head

function parallel (tasks, done) {
  var count = 0
  var length = tasks.length
  var holder = get()

  holder.count = length
  holder.done = done

  for (var i = 0; i < length; i++) {
    tasks[i](holder.release)
  }
}

function get () {
  var holder = head
  if (!holder.next) {
    head = new Holder()
    tail = head
  } else {
    head = holder.next
  }
  return holder
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
      release(that)
    }
  }
}

function release (holder) {
  tail.next = holder
  tail = holder
}

function noop () {}

function benchNoAlloc (cb) {
  parallel([immediate, immediate, immediate], cb)
}

function immediate (cb) {
  setImmediate(cb)
}

module.exports = benchNoAlloc

if (require.main == module) {
  var run = bench([
    benchNaive,
    benchNaiveFaster,
    benchNoAlloc,
    benchSetImmediate
  ], max)
  run(run)
}
