'use strict';

var sectionsApp = angular.module('sectionsApp', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'sectionsDirectives',
  'sectionsControllers'
]);

sectionsApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/sites/all/modules/custom/sections/templates/sections.html',
      controller: 'sectionsCtrl'
    })
    .when('/section/:tid', {
      templateUrl: '/sites/all/modules/custom/sections/templates/articles.html',
      controller: 'articlesCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('sections-app'), ['sectionsApp']);
});
