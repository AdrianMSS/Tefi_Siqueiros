/*global define*/
define([
  'jquery',
  'backbone', 
  'polyglot',
  'views/collections',
  'views/home',
  'views/contact',
  'views/aboutus',
  'views/designer',
  'views/menu',
  'text!../../assets/locales/es.json',
  'text!../../assets/locales/en.json'
], function ($, Backbone, Polyglot, collectionsView, homeView, contactView, aboutusView, designerView, menuView, localEs, localEn) {
  'use strict';

  var CollectionsView = new collectionsView(),
	  HomeView = new homeView(),
    ContactView = new contactView(),
    AboutUsView = new aboutusView(),
    DesignerView = new designerView(),
    MenuView = new menuView(),
    Router = Backbone.Router.extend({
      routes: {
          '':     'home',
          'home': 'home',
          'collection': 'collection',
          'contact': 'contact',
          'about': 'about',
          'designer': 'designer',
          'en': 'en',
          'es': 'es'
      },
      objectLocal : {},
      menuRender : false,

      initialize: function() {
        this.objectLocal = {
          'es': localEs,
          'en': localEn
        };
        var locale = localStorage.getItem('locale') || 'es',
          localArray = this.objectLocal[locale].split("'");
        window.polyglot = new Polyglot();
        for(var i=0; i<=localArray.length-2; i++){
          var x = localArray[i+1].toString(),
              y = localArray[i+3],
              phrase = {};
            phrase[x] = y;
          console.log(phrase);
          window.polyglot.extend(phrase);
          i=i+3;
        };
      },

      en: function() {
        localStorage.setItem('locale', 'en');
        var localArray = this.objectLocal['en'].split("'");
        window.polyglot = new Polyglot();
        for(var i=0; i<=localArray.length-2; i++){
          var x = localArray[i+1].toString(),
              y = localArray[i+3],
              phrase = {};
            phrase[x] = y;
          console.log(phrase);
          window.polyglot.extend(phrase);
          i=i+3;
        };
        this.menuRender = false;
        window.history.back();
      },

      es: function() {
        localStorage.setItem('locale', 'es');
        var localArray = this.objectLocal['es'].split("'");
        window.polyglot = new Polyglot();
        for(var i=0; i<=localArray.length-2; i++){
          var x = localArray[i+1].toString(),
              y = localArray[i+3],
              phrase = {};
            phrase[x] = y;
          console.log(phrase);
          window.polyglot.extend(phrase);
          i=i+3;
        };
        this.menuRender = false;
        window.history.back();
      },

      home: function() {
          if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          HomeView.render();
      },

      collection: function() {
          /*if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          CollectionsView.render();*/
      },

      contact: function() {
          if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          ContactView.render();
      },

      about: function() {
          if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          AboutUsView.render();
      },

      designer: function() {
          if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          DesignerView.render();
      }
  });
  return Router;
});


