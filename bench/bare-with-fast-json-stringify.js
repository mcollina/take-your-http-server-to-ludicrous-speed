'use strict'

const server = require('http').createServer(handle)
const flatstr = require('flatstr')
const stringify = require('fast-json-stringify')({
  type: 'object',
  properties: {
    hello: {
      type: 'string'
    }
  }
})

server.listen(3000)

function handle (req, res) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(flatstr(stringify({ hello: 'world' })))
}
