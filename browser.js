'use strict';

var config = require('./createBaseConfig')();

config.env.browser = true;

config.rules.strict = [ 2, 'function' ];

module.exports = config;
