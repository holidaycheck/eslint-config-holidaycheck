'use strict';

var expect = require('chai').expect,
    eslintDefaults = require('eslint/conf/eslint-all'),
    eslintReplacements = require('eslint/conf/replacements.json'),
    eslintEnvironments = require('eslint/conf/environments'),
    ecmaFeatures = require('espree/lib/features'),
    eslintConfigHolidaycheck = require('../');

describe('eslint-config-holidaycheck', function () {
    describe('eslint core rules', function () {
        var rules = Object.keys(eslintDefaults.rules);

        rules.forEach(function (ruleName) {
            it('should configure ' + ruleName, function () {
                expect(eslintConfigHolidaycheck).to.have.deep.property('rules.' + ruleName);
            });
        });
    });

    describe('removed core rules', function () {
        var rules = Object.keys(eslintConfigHolidaycheck.rules);

        rules.forEach(function (ruleName) {
            var isCoreRule = ruleName.indexOf('/') === -1;

            if (isCoreRule) {
                it('should only contain ' + ruleName + ' if it still exists upstream', function () {
                    expect(eslintDefaults).to.have.deep.property('rules.' + ruleName);
                });
            }
        });
    });

    describe('deprecated rules', function () {
        var rules = Object.keys(eslintReplacements.rules);

        rules.forEach(function (ruleName) {
            it('should not have deprecated rule ' + ruleName + ' configured', function () {
                expect(eslintConfigHolidaycheck).not.to.have.deep.property('rules.' + ruleName);
            });
        });
    });

    describe('environments', function () {
        var environments = Object.keys(eslintEnvironments);

        environments.forEach(function (envName) {
            it('should configure environment ' + envName, function () {
                expect(eslintConfigHolidaycheck).to.have.deep.property('env.' + envName);
            });
        });
    });

    it('should configure all ECMA features', function () {
        var features = Object.keys(ecmaFeatures);

        features.forEach(function (featureName) {
            expect(eslintConfigHolidaycheck).to.have.deep.property('parserOptions.ecmaFeatures.' + featureName);
        });
    });

    it('should configure the correct ecmaVersion', function () {
        expect(eslintConfigHolidaycheck).to.have.deep.property('parserOptions.ecmaVersion', 5);
    });

    it('should configure the correct sourceType', function () {
        expect(eslintConfigHolidaycheck).to.have.deep.property('parserOptions.sourceType', 'script');
    });
});
