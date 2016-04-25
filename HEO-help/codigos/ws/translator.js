#!/bin/env node

module.exports = function (t,f) {
  var watson = require('watson-developer-cloud');
  var language_translation = watson.language_translation({
    username: '18d80665-e417-4e2b-80fe-5496bc51c09b',
    password: '6cERxCAfKVcn',
    version: 'v2'
  });

  language_translation.translate({
    text: t,
    source: 'pt',
    target: 'en'
  },f);
};