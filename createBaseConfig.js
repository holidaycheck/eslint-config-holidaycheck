'use strict';

var cloneDeep = require('lodash.clonedeep'),
    baseConfig = require('./baseConfig.json');

module.exports = function () {
    return cloneDeep(baseConfig);
};
