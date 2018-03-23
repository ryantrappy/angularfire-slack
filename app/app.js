'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://slack.firebaseio.com/')
.config(function(){
  var config = {
    apiKey: "AIzaSyBByqPpebUqk3yAn4_eTNbShOG18xeWv00",
    authDomain: "connectandroidslack.firebaseapp.com",
    databaseURL: "https://connectandroidslack.firebaseio.com",
    storageBucket: "connectandroidslack.appspot.com",
    messagingSenderId: "940447367686",
  };
  firebase.initializeApp(config);
})
