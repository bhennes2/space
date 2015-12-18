var app = angular.module('space', ['ngResource']);

app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.factory("Page", function($resource){
  return $resource('https://space-engine.herokuapp.com/locomotive/space/pages/:id.json', { id: '@id' });
});

app.controller("Main", function($scope, Page){
  $scope.today = new Date();
  console.log(Page.query());
});
