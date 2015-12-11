var app = angular.module('space', []);

app.controller("Main", function($scope){
  $scope.today = new Date();
});

app.factory("Page", function($resource){
  return $resource('/pages/:id', { id: '@id' });
});
