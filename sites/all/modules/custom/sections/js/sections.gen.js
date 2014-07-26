'use strict';

var sectionsApp = angular.module('sectionsApp', [
  'ngRoute',
  'ngSanitize',
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

'use strict';

var sectionsControllers = angular.module('sectionsControllers', []);

sectionsControllers
.controller('mainCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.awesomeThings =[
      'AngularJS'
    ];
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
  };
}])
.controller('sectionsCtrl', ['$scope', '$http',
  function($scope, $http) {
  $http.get('/json/sections').success(function(result) {
    $scope.sections = (function () {
      return result.taxonomy;
    })();
  });
}])
.controller('articlesCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
  $http.get('/json/' + $routeParams.tid + '/articles').success(function(result) {
    $scope.articles = (function () {
      return result.node;
    })();
  });
}]);
