define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/designer.html'
], function ($, _, Backbone, designer_template) {
  'use strict';
  var DesignerView = Backbone.View.extend({
    el: '.content',
    //about_template: _.template(about_template),
    events: {
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('designerAbout');
      $('.circleBase').removeClass('here');
      $('.circleBase4').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(designer_template);
    }
  });

  return DesignerView;
});

