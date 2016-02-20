'use strict';

var config = require('./createBaseConfig')();

config.rules['no-console'] = 0;
config.rules['no-process-env'] = 0;
config.rules['no-process-exit'] = 0;
config.rules['no-sync'] = 0;

module.exports = config;
