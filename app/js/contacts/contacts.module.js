var contactsComponent = require('./components/contacts.component.js'),
    contactsRoute = require('./contacts.route');

module.exports = angular.module("app.contacts", [
  // components
  'app.contacts.component',
  contactsRoute.name


]);
