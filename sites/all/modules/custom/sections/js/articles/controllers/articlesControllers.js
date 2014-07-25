sections.controller('articlescontroller', function($scope, $http) {
  $http.get('/json/articles').success(function(result) {
    $scope.articles = (function () {
      return result.node;
    })();
  });
});
