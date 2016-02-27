'use strict';

var expect = require('chai').expect,
    eslintDefaults = require('eslint/conf/eslint.json'),
    eslintReplacements = require('eslint/conf/replacements.json'),
    eslintEnvironments = require('eslint/conf/environments'),
    ecmaFeatures = require('espree/lib/features'),
    eslintConfigHolidaycheck = require('../');

describe('eslint-config-holidaycheck', function () {
    it('should configure every eslint rule', function () {
        var rules = Object.keys(eslintDefaults.rules);

        rules.forEach(function (ruleName) {
            expect(eslintConfigHolidaycheck).to.have.deep.property('rules.' + ruleName);
        });
    });

    it('should not include rules configuration for remove core rules', function () {
        var rules = Object.keys(eslintConfigHolidaycheck.rules);

        rules.forEach(function (ruleName) {
            var isCoreRule = ruleName.indexOf('/') === -1;

            if (isCoreRule) {
                expect(eslintDefaults).to.have.deep.property('rules.' + ruleName);
            }
        });
    });

    it('should not have deprecated rules configured', function () {
        var rules = Object.keys(eslintReplacements.rules);

        rules.forEach(function (ruleName) {
            expect(eslintConfigHolidaycheck).not.to.have.deep.property('rules.' + ruleName);
        });
    });

    it('should configure all environments', function () {
        var environments = Object.keys(eslintEnvironments);

        environments.forEach(function (envName) {
            expect(eslintConfigHolidaycheck).to.have.deep.property('env.' + envName);
        });
    });

    it('should configure all ECMA features', function () {
        var features = Object.keys(ecmaFeatures);

        features.forEach(function (featureName) {
            expect(eslintConfigHolidaycheck).to.have.deep.property('parserOptions.ecmaFeatures.' + featureName);
        });
    });
});
