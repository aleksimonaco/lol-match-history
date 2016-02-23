var lolApp = angular.module('lolApp', ['angular-loading-bar', 'ngAnimate', 'ngRoute']);

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
        templateUrl: '/lol-match-history/app/js/templates/search.html',
        controller: 'searchController'
      }).
      when('/match/:id', {
        templateUrl: '/lol-match-history/app/js/templates/matchDetails.html',
        controller: 'matchDetailController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
