/*global define*/
define([
  'jquery',
  'backbone',
  'views/collections',
  'views/home',
  'views/contact',
  'views/aboutus',
  'views/designer'
], function ($, Backbone, collectionsView, homeView, contactView, aboutusView, designerView) {
  'use strict';

  var CollectionsView = new collectionsView(),
	  HomeView = new homeView(),
    ContactView = new contactView(),
    AboutUsView = new aboutusView(),
    DesignerView = new designerView(),
    Router = Backbone.Router.extend({
      routes: {
          '':     'home',
          'home': 'home',
          'collection': 'collection',
          'contact': 'contact',
          'about': 'about',
          'designer': 'designer'
      },

      initialize: function() {
      },

      home: function() {
          HomeView.render();
      },

      collection: function() {
          CollectionsView.render();
      },

      contact: function() {
          ContactView.render();
      },

      about: function() {
          AboutUsView.render();
      },

      designer: function() {
          DesignerView.render();
      }
  });
  return Router;
});


