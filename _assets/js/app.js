
var WindowStatsModel = require('./models/window_stats_model');
var WindowStatsView = require('./views/window_stats_view');

var SmoothScrollView = require('./views/smooth_scroll_view');

var domReady = require('domready');


module.exports = {
  // this is the the whole app initter
  blastoff: function () {
    var self = window.app = this;

    // wait for document ready to render our main view
    // this ensures the document has a body, etc.
    domReady(function () {

      app.windowStatus = new WindowStatsModel();
      app.windowStatusView = new WindowStatsView({ model : app.windowStatus });

      app.smoothScrollView = new SmoothScrollView();

    });

  }
}

// run it
module.exports.blastoff();
