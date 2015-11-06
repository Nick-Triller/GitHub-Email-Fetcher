'use strict';

var request = require('request');
var EventEmitter = require('events').EventEmitter;

function Extractor(userAgent) {
	this.userAgent = userAgent;
	var that = this;
	
	this.getEmails = function getEmails(url) {
		var em = new EventEmitter();
		that.em = em;
		var options = {
			url: url,
			headers: {
				'User-Agent': that.userAgent
			}
		};
		request(options, cb);
		return that.em;
	}
	
	function cb(error, response, body) {
		if (error) {
			throw error;
		}
		body = JSON.parse(body);
		traverse(body, handler);
		that.em.emit('end');
	}
	
	function handler(key, value) {
		if (key == 'email') {
			if (value !== null) {
				that.em.emit('data', value);
			}
		}
	}
	
	function traverse(obj, func) {
		if (obj == null || typeof obj !== 'object') return;
		if (Array.isArray(obj)) {
			obj.forEach(function(element) {
				traverse(element, func);
			});
			return;
		}
		Object.keys(obj).forEach(function(key) {
			var val = obj[key];
			func(key, val);
			traverse(val, func);
		});
	}
}

module.exports = Extractor;