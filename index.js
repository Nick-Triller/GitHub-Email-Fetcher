'use strict';

var mailExtractor = require('./mail-extractor');

var defaultUserAgent = 'GitHub-Email-Fetcher';
var username = process.argv[2];
var userAgent = process.argv[3];

if (username == null) {
	throw new Error('Please add a username as a command line argument. Example: node index.js octocat');
}
if (userAgent == null) {
	userAgent = defaultUserAgent;
}

mailExtractor.getEmails(username, userAgent)
	.on('result', function (result) {
		result.forEach(function(element) {
			console.log(element);
		});	
	})
	.on('error', console.log);
