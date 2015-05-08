define([
  'jquery',
  'underscore',
  'backbone', 
  'polyglot',
  'text!../templates/home.html'
], function ($, _, Backbone, Polyglot, home_template) {
  'use strict';
  var HomeView = Backbone.View.extend({
    el: '.content',
    home_template: _.template(home_template),
    events: {
      'keydown': 'keyPressed'
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() { 
      var pol = new Polyglot({
        "hello": "Hello",
        "bye": "Goodbye"
      });
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyHome');
      $('.circleBase').removeClass('here');
      $('.menubar').removeClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.home_template());
    },

    keyPressed: function(e) {
    }
  });

  return HomeView;
});

