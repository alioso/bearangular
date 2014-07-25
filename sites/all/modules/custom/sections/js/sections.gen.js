var sections = angular.module('sections', []);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('sections-app'), ['sections']);
});

sections.controller('sectionscontroller', function($scope, $http) {
  $http.get('/json/sections').success(function(result) {
    $scope.sections = (function () {
      return result.nodes;
    })();
  });
});
