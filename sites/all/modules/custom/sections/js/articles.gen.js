var sections = angular.module('sections', ['ngRoute']);
var articles = angular.module('articles', []);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('articles-app'), ['articles']);
});

sections.controller('articlescontroller', function($scope, $http) {
  $http.get('/json/articles').success(function(result) {
    $scope.articles = (function () {
      return result.node;
    })();
  });
});
