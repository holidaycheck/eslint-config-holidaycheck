'use strict';

var config = require('./createBaseConfig')();

config.env.browser = true;

config.rules.strict = [ 'error', 'function' ];

module.exports = config;
