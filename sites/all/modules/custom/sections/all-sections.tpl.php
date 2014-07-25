<div id="sections-app" ng-controller="sectionscontroller">
  <div class="section" ng-repeat="section in sections">
    <h2>{{section.node.title}}</h2>
    <div class="body">{{section.node.body}}</div>
  </div>
</div>
