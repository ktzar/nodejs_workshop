const cluster = require('node:cluster')
const http = require('node:http')
const { cpus } = require('node:os')
const process = require('node:process')

const numCPUs = cpus().length;

// Create a clustered http server that initialises a http server for each CPU​

