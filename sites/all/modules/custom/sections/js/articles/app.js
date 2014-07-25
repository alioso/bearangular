var sections = angular.module('sections', ['ngRoute']);
var articles = angular.module('articles', []);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('articles-app'), ['articles']);
});
