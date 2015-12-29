'use strict'

let worker = require('../worker')('pipeline_executions')
// let process = require('./process')
let message = require('../message')
let Job = require('./job')

worker.on('message', (msg, next) => new Job(message(msg), next))
worker.start()
