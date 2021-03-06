define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/video.html',
  'text!../templates/language.html'
], function ($, _, Backbone, video_template, language_template) {
  'use strict';
  var LangView = Backbone.View.extend({
    el: '.content',
    video_template: _.template(video_template),
    language_template: _.template(language_template),
    events: {
      'click .skipButton': 'videoEnded',
      'onStateChange': 'videoEnded'
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyLang');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.video_template());
    },

    videoEnded: function(){
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.language_template());
    }
  });

  return LangView;
});

