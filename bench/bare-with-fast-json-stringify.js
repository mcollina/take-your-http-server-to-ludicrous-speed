'use strict'

const server = require('http').createServer(handle)
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
  res.setHeader('Content-Type', 'application/json')
  res.end(stringify({ hello: 'world' }))
}
