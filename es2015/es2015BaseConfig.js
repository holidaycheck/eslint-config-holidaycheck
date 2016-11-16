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
    'arrow-parens': 'error',
    'arrow-spacing': [ 'error', { before: true, after: true } ],
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', { before: true, after: false } ],
    'no-confusing-arrow': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-pattern': 'error',
    'no-invalid-this': 'off',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'object-shorthand': [ 'error', 'always' ],
    'one-var': [ 'error', { var: 'always', let: 'never', const: 'never' } ],
    'prefer-const': 'error',
    'prefer-reflect': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'no-useless-rename': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'prefer-rest-params': 'error'
});

module.exports = function () {
    return cloneDeep(config);
};
