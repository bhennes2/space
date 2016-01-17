var app = angular.module('space', ['ngResource', 'ngSanitize']);

app.factory("CMS", function($resource){
  return $resource('http://space.launchpadlab.com/locomotive/api/v3/:path/:content_type/:subpath', {},
    {
      homePage: {
        method: 'GET',
        isArray: true,
        params: {
          path: 'pages.json'
        },
        headers: {
          "X-Locomotive-Account-Email": "dev@launchpadlab.com",
          "X-Locomotive-Account-Token": "UTqEUsnvqq8aGtG131sb",
          "X-Locomotive-Site-Handle": "space"
        }
      },
      missions: {
        method: 'GET',
        isArray: true,
        params: {
          path: 'content_types',
          content_type: 'missions',
          subpath: 'entries.json'
        },
        headers: {
          "X-Locomotive-Account-Email": "dev@launchpadlab.com",
          "X-Locomotive-Account-Token": "UTqEUsnvqq8aGtG131sb",
          "X-Locomotive-Site-Handle": "space"
        }
      },
      token: {
        method: 'POST',
        params: {
          path: 'tokens.json'
        },
        cache: false,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        transformRequest: function(obj) {
          var str = [];
          for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        }
      }
    }
  );
});

app.controller("Main", function($scope, CMS){
  $scope.now = new Date();
  $scope.page = {};
  $scope.missions = CMS.missions();
  CMS.homePage(function(pages){
    angular.forEach(pages, function(page){
      if (page.fullpath === 'index'){
        $scope.page = page;
      }
    });
  });
});
