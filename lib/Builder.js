const ExtractText = require('extract-text-webpack-plugin');
const ClearConsole = require('webpack-clear-console').WebpackClearConsole;
const path = require('path');

class Builder {
	constructor() {
		this._js = [];
		this._sass = [];
		this._loaders = [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.scss$/,
			use: ExtractText.extract({
				use: ['css-loader', 'sass-loader'],
				fallback: 'style-loader'
			})
		}];
		this._plugins = [
			new ClearConsole(),
			new ExtractText('css/[name].css')
		];
	}

	js(src) {
		if (!src) {
			throw new Error("Missing source file");
		}

		this._js.push(src);

		return this;
	}

	sass(src) {
		if (!src) {
			throw new Error("Missing source file");
		}

		this._sass.push(src);
		return this;
	}

	build() {
		if ((this._js.length + this._sass.length) === 0) {
			throw new Error("No files to build");
		}

		let entry = {};

		this._js.concat(this._sass)
		.forEach(function (item) {
			let name = path.basename(item);

			name = name.split('.').shift();

			if (!(name in entry)) {
				entry[name] = [item];
			} else {
				entry[name].push(item);
			}
		});

		let config = {
			entry: entry,
			output: {
				path: __dirname + '/dist',
				filename: 'js/[name].js'
			},
			module: {
				loaders: this._loaders
			},
			plugins: this._plugins
		};

		return config;
	}
}

module.exports = Builder;
