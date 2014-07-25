var sections = angular.module('sections', ['ngRoute']);

    sections.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/sections', {
          templateUrl: 'popo.html',
        })
        // .when('/home/features/:projectId', {
        //   templateUrl: function (params) {
        //     return 'pages/features/' + params.projectId + '.html';
        //   },
        //   //controller: ProjectCtrl,
        //   activetab: 'home'
        // })
        // .when('/privacy', {
        //   templateUrl: 'pages/privacy.html',
        //   //controller: PrivacyCtrl,
        //   activetab: 'privacy'
        // })
        // .when('/about', {
        //   templateUrl: 'pages/about.html',
        //   //controller: AboutCtrl,
        //   activetab: 'about'
        // })
        .otherwise({ redirectTo: '/' });
    }]);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('sections-app'), ['sections']);
});
