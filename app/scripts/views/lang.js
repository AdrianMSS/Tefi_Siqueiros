define([
  'jquery',
  'underscore',
  'backbone',
  'text!../templates/video.html',
  'text!../templates/language.html'
], function ($, _, Backbone, video_template, language_template) {
  'use strict';
  var MenuView = Backbone.View.extend({
    el: '.content',
    video_template: _.template(video_template),
    language_template: _.template(language_template),
    events: {
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
      $('.siqVideo')[0].autoplay = true;  
      $('.siqVideo')[0].onended = function(e) {
        this.videoEnded();
      }.bind(this); 
    },

    videoEnded: function(){
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.language_template());
    }
  });

  return MenuView;
});

