var carsComponent = require('../cars/car.module.js'),
    contactsComponent = require('../contacts/contacts.module.js'),
    mainRoute = require('./main.route'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("app.main", [
  // components
  require('angular-ui-router'),
  carsComponent.name,
  mainComponent.name,
  contactsComponent.name,
  mainRoute.name
]);

