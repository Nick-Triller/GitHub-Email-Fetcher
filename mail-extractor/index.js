'use strict';

var Extractor = require('./extractor');
var EventEmitter = require('events').EventEmitter;

module.exports.getEmails = function getEmails(username, userAgent) {
	var em = new EventEmitter();
	var emails = [];
	var counter = 0;
	
	var extractor = new Extractor(userAgent);
	
	function saveUniqueEmail(d) {
		if(emails.indexOf(d) === -1) emails.push(d);
	}
	
	function end() {
		counter++; if(counter === 2) em.emit('result', emails);
		console.log('end', counter);
	}
	
	var url1 = 'https://api.github.com/users/' + username + '/events/public';
	var url2 = 'https://api.github.com/users/' + username;
	
	extractor.getEmails(url1)
		.on('data', saveUniqueEmail)
		.on('end', end);
		
	extractor.getEmails(url2)
		.on('data', saveUniqueEmail)
		.on('end', end);
	
	return em;
};