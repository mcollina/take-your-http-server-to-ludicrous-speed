'use strict'

const server = require('fastify')()

server.register(require('fastify-helmet'))

server.register(require('point-of-view'), {
  engine: {
    marko: require('marko')
  }
})

server.register(require('./subsystem'), {
  prefix: '/subsystem'
})

server.get('/json', (req, reply) => {
  reply.send({ hello: 'world' })
})

server.get('/', (req, reply) => {
  reply.view('/index.marko', { hello: 'world' })
})

server.listen(3000)
