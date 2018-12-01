'use strict'

const router = require('find-my-way')()
const server = require('http').createServer(router.lookup.bind(router))
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

router.on('GET', '/', function root (req, res, params) {
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.end(flatstr(stringify({ hello: 'world' })))
})
