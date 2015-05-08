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
  'views/lang',
  'views/insulation',
  'views/styling',
  'views/shop',
  'text!../../assets/locales/es.json',
  'text!../../assets/locales/en.json',
  'text!../../assets/locales/fr.json'
], function ($, Backbone, Polyglot, collectionsView, homeView, contactView, aboutusView, designerView, menuView, langView, insulationView, stylingView, shopView, localEs, localEn, localFr) {
  'use strict';

  var CollectionsView = new collectionsView(),
	  HomeView = new homeView(),
    ContactView = new contactView(),
    AboutUsView = new aboutusView(),
    DesignerView = new designerView(),
    MenuView = new menuView(),
    LangView = new langView(),
    InsulationView = new insulationView(),
    StylingView = new stylingView(),
    ShopView = new shopView(),
    Router = Backbone.Router.extend({
      routes: {
          'home': 'home',
          'collection': 'collection',
          'contact': 'contact',
          'about': 'about',
          'designer': 'designer',
          'collection': 'collection',
          'en': 'en',
          'es': 'es',
          'fr': 'fr',
          'lang': 'lang',
          'insulation': 'insulation',
          'styling': 'styling',
          'shop': 'shop'
      },
      objectLocal : {},
      menuRender : false,

      initialize: function() {
        this.objectLocal = {
          'es': localEs,
          'en': localEn,
          'fr': localFr
        };
        var locale = localStorage.getItem('locale');
        if(locale == null){
          window.location.href ='#lang';
        }
        else{
          var localArray = this.objectLocal[locale].split("'");
          window.polyglot = new Polyglot();
          for(var i=0; i<=localArray.length-2; i++){
            var x = localArray[i+1].toString(),
                y = localArray[i+3],
                phrase = {};
              phrase[x] = y;
            window.polyglot.extend(phrase);
            i=i+3;
          };
          window.location.href ='#home';
        }
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
          window.polyglot.extend(phrase);
          i=i+3;
        };
        if(this.menuRender){
          this.menuRender = false;
          window.history.back(); 
        }
        else{
          window.location.href ='#home'; 
        }
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
          window.polyglot.extend(phrase);
          i=i+3;
        };
        if(this.menuRender){
          this.menuRender = false;
          window.history.back(); 
        }
        else{
          window.location.href ='#home'; 
        }
      },

      fr: function() {
        localStorage.setItem('locale', 'fr');
        var localArray = this.objectLocal['fr'].split("'");
        window.polyglot = new Polyglot();
        for(var i=0; i<=localArray.length-2; i++){
          var x = localArray[i+1].toString(),
              y = localArray[i+3],
              phrase = {};
            phrase[x] = y;
          window.polyglot.extend(phrase);
          i=i+3;
        };
        if(this.menuRender){
          this.menuRender = false;
          window.history.back(); 
        }
        else{
          window.location.href ='#home'; 
        }
      },

      lang: function(){
        LangView.render();
      },

      home: function() {
          if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          HomeView.render();
      },

      collection: function() {
          if(!this.menuRender){
            MenuView.render();
            this.menuRender = true;
          }
          CollectionsView.render();
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
      },

      insulation: function(){
          if(!this.menuRender){
            InsulationView.render();
            this.menuRender = true;
          }
          InsulationView.render();
      },

      styling: function(){
          if(!this.menuRender){
            StylingView.render();
            this.menuRender = true;
          }
          StylingView.render();
      },

      shop: function(){
          if(!this.menuRender){
            ShopView.render();
            this.menuRender = true;
          }
          ShopView.render();
      }
  });
  return Router;
});


