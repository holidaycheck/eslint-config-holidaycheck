'use strict';

var assign = require('object-assign'),
    cloneDeep = require('lodash.clonedeep'),
    config = require('../createBaseConfig')();

config.env.es6 = true;
config.parserOptions = assign({}, config.parserOptions, {
    sourceType: 'module',
    ecmaVersion: 6
});

config.rules = assign({}, config.rules, {
    'arrow-parens': 2,
    'arrow-spacing': [ 2, { before: true, after: true } ],
    'constructor-super': 2,
    'generator-star-spacing': [ 2, { before: true, after: false } ],
    'no-confusing-arrow': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-empty-pattern': 2,
    'no-invalid-this': 0,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': [ 2, 'always' ],
    'one-var': [ 2, { var: 'always', let: 'never', const: 'never' } ],
    'prefer-const': 2,
    'prefer-reflect': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2
});

module.exports = function () {
    return cloneDeep(config);
};
