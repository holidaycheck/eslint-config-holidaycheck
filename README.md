# eslint-config-holidaycheck

Shareable ESLint config from HolidayCheck.

This config aims for ES5 or ES2015 code. It does not define any
[environments](http://eslint.org/docs/user-guide/configuring.html#specifying-environments).
You can use it with any kind of project (e.g. `node` projects or `browser` code)
by extending from the config and setting the correct environment yourself.

## Install and setup

* npm install eslint-config-holidaycheck
* Add `extends: "holidaycheck"` to your `.eslintrc`

## Alternative Flavors

This package includes the following other configuration flavors. The default flavors assuming an ECMAScript 5.1 environment.

### Browser

`extends: "holidaycheck/browser"`

Enables the `browser` environment and sets the `strict` rule to `function` mode.

### CLI

`extends: "holidaycheck/cli"`

Allows the use of `console`, `*Sync` functions, `process.env` and `process.exit`.

### ES 2015 Flavors

The following flavors assuming an ECMAScript 2015 environment.

#### Node

`extends: "holidaycheck/es2015"`

#### CLI

`extends: "holidaycheck/es2015/cli"`

Allows the use of `console`, `*Sync` functions, `process.env` and `process.exit`.
