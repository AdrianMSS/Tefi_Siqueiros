define([
  'jquery',
  'underscore',
  'backbone', 
  'text!../templates/shop.html'
], function ($, _, Backbone, shop_template) {
  'use strict';
  var ShopView = Backbone.View.extend({
    el: '.content',
    shop_template: _.template(shop_template),
    events: {
      'click button': 'goCollection'
    },

    initialize: function (options) {
        // ---------------------------------
        // Add the options as part of the instance
        //_.extend(this, options);
    },

    render: function() {   
      $('#bodyContainer').removeClass();
      $('#bodyContainer').addClass('bodyShop');
      $('.circleBase').removeClass('here');
      $('.circleBase3').addClass('here');
      $('.menubar').addClass('menuLeft');
      this.$el.html('').hide().fadeIn().slideDown('slow');
      this.$el.append(this.shop_template());
    },

    goCollection: function(e){
      var ref = '#'+e.currentTarget.id;
      window.location.href = ref;
    }
  });

  return ShopView;
});

