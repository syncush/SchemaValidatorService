const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/api', router);

module.exports = server;
