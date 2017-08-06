# Webpack Builder
[![Build Status](https://travis-ci.org/ranbogmord/webpack-builder.svg?branch=master)](https://travis-ci.org/ranbogmord/webpack-builder)

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
