/* jshint node: true */
'use strict';

var fs = require('fs-extra');

module.exports = {
  name: 'ember-netlify',
  outputReady: function(result) {
    fs.copySync(".netlifyconfig", "dist/_redirects", { clobber: true });
  }
};
