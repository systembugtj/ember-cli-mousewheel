/* jshint node: true */
'use strict';
let path = require('path');

module.exports = {
  name: 'ember-cli-mousewheel',
  
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/jquery-mousewheel/jquery.mousewheel.js');
  }
};
