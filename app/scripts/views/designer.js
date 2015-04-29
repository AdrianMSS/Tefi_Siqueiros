define([
  'jquery',
  'underscore',
  'backbone',  
  'polyglot',
  'text!../templates/designer.html'
], function ($, _, Backbone, Polyglot, designer_template) {
  'use strict';
  var DesignerView = Backbone.View.extend({
    el: '.content',
    designer_template: _.template(designer_template),
    phrases: {},
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
      this.$el.append(this.designer_template());
    }
  });

  return DesignerView;
});

