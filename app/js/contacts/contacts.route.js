'use strict';
module.exports = angular
  .module('app.contacts.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'contacts',
	  url: '/contacts', 
	  template: '<contacts></contacts>'
	  });
  });