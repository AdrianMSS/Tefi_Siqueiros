define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/insulation.html'
], function ($, _, Backbone, insulation_template) {
  'use strict';
  var InsulationView = Backbone.View.extend({
    el: '.content',
    insulation_template: _.template(insulation_template),
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
      $('.circleBase2').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.insulation_template());
    },

    viewImg: function(e){
      $(".imageView")
        .fadeOut(500, function() {
            $(".imageView").attr("src","assets/img/"+e.currentTarget.className+".jpg");
        })
        .fadeIn(200);
    }
  });

  return InsulationView;
});

