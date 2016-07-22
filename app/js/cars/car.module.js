var carInfo = require('./components/car_info.component.js'),
    carUser = require('./components/car_user.component.js'),
    carService = require('./services/car_info.services.js'),
    carRoute = require('./car.route.js');

module.exports = angular.module("app.cars", [
  // components
  carInfo.name,
  carUser.name,
  //services
  carService.name,
  carRoute.name
]);

