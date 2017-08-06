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

	it('should throw an error when calling "::js" without a resource', () => {
		builder = new Builder();
		expect(builder.js.bind(builder)).to.throw();
	});

	it('should throw an error when calling "::sass" without a resource', () => {
		builder = new Builder();
		expect(builder.sass.bind(builder)).to.throw();
	});

	it('should throw an error if building with no assets', () => {
		builder = new Builder();
		expect(builder.build.bind(builder)).to.throw();
	});

	it('should return an object when calling "::build"', () => {
		builder = new Builder();
		builder.js('temp.js');
		expect(builder.build()).to.be.an('object');
	});

	it('should have two plugins loaded', () => {
		builder = new Builder();
		builder.js('temp.js');
		let cfg = builder.build();
		expect(cfg.plugins).to.be.an('array');
		expect(cfg.plugins).to.have.lengthOf(2);
	});

	it('should have an object of entries after build', () => {
		builder = new Builder();
		builder.js('test.js');
		let cfg = builder.build();

		expect(cfg.entry).to.be.an('object');
	});

	it('should have a key named after the file in "entry"', () => {
		builder = new Builder();
		let name = "test";
		builder.js(name + '.scss');
		let cfg = builder.build();

		expect(cfg.entry).to.have.all.keys('test');
	});

	it('should be able to handle multiple items with the same name', () => {
		builder = new Builder();
		let name = "test";
		builder.js(name + '.js');
		builder.sass(name + '.scss');

		let cfg = builder.build();

		expect(cfg.entry).to.have.all.keys(name);
		expect(cfg.entry[name]).to.be.an('array');
		expect(cfg.entry[name]).to.contain(name + '.js');
		expect(cfg.entry[name]).to.contain(name + '.scss');
	});
});

