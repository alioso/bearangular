<div id="sections-app" ng-controller="sectionscontroller">
  <div class="section" ng-repeat="section in sections">
    <a href="/#/section/mixins/articles">
      <div class="wrapper">
        <h2>{{section.term.name}}</h2>
        <div class="description">{{section.term.description}}</div>
      </div>
    </a>
  </div>
</div>
