define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/styling.html'
], function ($, _, Backbone, styling_template) {
  'use strict';
  var StylingView = Backbone.View.extend({
    el: '.content',
    styling_template: _.template(styling_template),
    events: {
      'click .imagePreview img': 'viewImg'
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      $('#bodyContainer').removeClass();
      $('.circleBase').removeClass('here');
      $('.circleBase5').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.styling_template());
      $("html, body").animate({ scrollTop: 0 }, 'slow');
    },

    viewImg: function(e){
      $(".imageView")
        .fadeOut(500, function() {
            $(".imageView").attr("src","assets/img/"+e.currentTarget.className+".jpg");
        })
        .fadeIn(200);
    }
  });

  return StylingView;
});

