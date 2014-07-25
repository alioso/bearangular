sections.controller('sectionscontroller', function($scope, $http) {
  $http.get('/json/sections').success(function(result) {
    $scope.sections = (function () {
      return result.taxonomy;
    })();
  });
});
