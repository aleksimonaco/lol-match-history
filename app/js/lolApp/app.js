var lolApp = angular.module('lolApp',
  ['angular-loading-bar', 'ngAnimate', 'ngRoute', 'LocalStorageModule']);

lolApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('/*');
  $interpolateProvider.endSymbol('*/');
});

lolApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}]);

lolApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/app/js/templates/search.html',
        controller: 'searchController'
      }).
      when('/match/:id', {
        templateUrl: '/app/js/templates/matchDetails.html',
        controller: 'matchDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);

lolApp.config(['localStorageServiceProvider',
  function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('lolApp')
      .setStorageType('sessionStorage');
  }
]);
