var sectionsDirectives = angular.module('sectionsDirectives', []);

sectionsDirectives.directive('keyNav', function() {
  return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
          angular.element(element).keynav();
        }
      };
});

sectionsDirectives.directive('prism', ['$compile', function($compile) {
    return function(scope, elem, attrs) {

        scope.$watch('article.article.body', function (value) {
            Prism.highlightAll();
        });

        //create an angular element. (this is still our "view")
        var el = angular.element(html),

        //compile the view into a function.
        compiled = $compile(el);

        //append our view to the element of the directive.
        elem.append(el);

        //bind our view to the scope!
        //(try commenting out this line to see what happens!)
        compiled(scope);
    };
}]);
