var lolApp = angular.module('lolApp', ['angular-loading-bar', 'ngAnimate']);

lolApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('/*');
  $interpolateProvider.endSymbol('*/');
});

lolApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}]);
