'use strict';

// Declare app level module which depends on partials, and components
angular.module('Dataworks', [
  'ngRoute',
  'Dataworks.controllers',
  'Dataworks.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/employees'});
}]);
