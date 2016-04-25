#!/bin/env node
var watson = require('watson-developer-cloud');
function toneAnalyzer () { 
	this.analyzer = function (t,f) {
		t = t || "";

		var tone_analyzer = watson.tone_analyzer({
			username: 'ffdb8673-d6cd-4b40-87a5-8a2a8351dd2f',
			password: 'TmeUAugUKUmb',
			version: 'v3-beta',
			version_date: '2016-02-11'
		});

		tone_analyzer.tone({ text: t },f);
	}
}

module.exports = toneAnalyzer;