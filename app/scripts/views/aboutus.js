define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/about.html'
], function ($, _, Backbone, about_template) {
  'use strict';
  var AboutView = Backbone.View.extend({
    el: '.content',
    about_template: _.template(about_template),
    events: {
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyAbout');
      $('.circleBase').removeClass('here');
      $('.circleBase1').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.about_template());
    }
  });

  return AboutView;
});

