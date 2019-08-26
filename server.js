#!/usr/bin/env node
var { normalizePort, onError, getListeningHandler } = require('./utils/tools')
/**
 * Module dependencies.
 */

var app = require('./app.js');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

var onListening = getListeningHandler(server);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
