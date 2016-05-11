var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');
var EaseEffects = require ('jquery-ui/effect'); // big bloated library just for the easOutQuart effect!

module.exports = Backbone.View.extend({

  el: 'a[href*="#"]:not([href="#"])',

  events: {
    'click': 'smoothScroll'
  },

  smoothScroll: function(e) {

    var target = $(e.target.hash);

    $('html, body').animate(
      {
        // scrollTop: this.$el.offset().top
        scrollTop: target.offset().top
      },
      {
        duration: 2000
        ,easing: "easeOutExpo"
        // ,easing: "easeInOutBounce"
      }
    );
    return false;

  }


});
