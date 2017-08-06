# Webpack Builder
[![Build Status](https://travis-ci.org/ranbogmord/webpack-builder.svg?branch=master)](https://travis-ci.org/ranbogmord/webpack-builder)
[![Coverage Status](https://coveralls.io/repos/github/ranbogmord/webpack-builder/badge.svg?branch=master)](https://coveralls.io/github/ranbogmord/webpack-builder?branch=master)

Simple Laravel Mix-like webpack configuration builder.

## Example
webpack.config.js
```
const builder = require('webpack-builder');

const config = builder
	.js('./src/js/app.js')
	.sass('./src/scss/main.scss')
	.build();

module.exports = config;
```

This will output the files to `./dist/{js,css}`