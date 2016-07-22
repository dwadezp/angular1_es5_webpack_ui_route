'use strict';
module.exports = angular
  .module('app.cars.route', [])
  .config(function($stateProvider) {
    $stateProvider.state({ 
	  name: 'cars',
	  url: '/cars', 
	  template: '<car-info-component></car-info-component>'
	  });
  });