'use strict';

const Builder = require('../lib/Builder.js');
const expect = require('chai').expect;

let builder = null;

describe('Webpack Builder', () => {
	it('should have a function called "js"', () => {
		builder = new Builder();
		expect(builder.js).to.be.a('function');
	});
	it('should have a function called "sass"', () => {
		builder = new Builder();
		expect(builder.sass).to.be.a('function');
	});
	it('should have a function called "build"', () => {
		builder = new Builder();
		expect(builder.build).to.be.a('function');
	});

	it('should have an empty "_js" array after init', () => {
		builder = new Builder();
		expect(builder._js).to.be.an('array').that.is.empty;
	});

	it('should have an empty "_sass" array after init', () => {
		builder = new Builder();
		expect(builder._sass).to.be.an('array').that.is.empty;
	});

	it('should add a resource to the "_js" array after calling "::js"', () => {
		builder = new Builder();
		let resource = "test.js";
		builder.js(resource);
		expect(builder._js).to.contain(resource);
	});

	it('should add a resource to the "_sass" array after calling "::sass"', () => {
		builder = new Builder();
		let resource = "test.scss";
		builder.sass(resource);
		expect(builder._sass).to.contain(resource);
	});

	it('should ')
});

