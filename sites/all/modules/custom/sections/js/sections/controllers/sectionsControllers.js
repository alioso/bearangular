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
      //$scope.orderTerms = 'title';
    })();
  });
}])
.controller('articlesCtrl', ['$scope', '$routeParams', '$http', '$sce',
  function($scope, $routeParams, $http, $sce) {
  $http.get('/json/' + $routeParams.tid + '/articles')
    .success(function(result) {
      $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
      };
      $scope.articles = (function () {
        return result.node;
      })();
  });
}]);
