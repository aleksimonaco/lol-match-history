var lolApp = angular.module('lolApp', ['angular-loading-bar']);

lolApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('/*');
  $interpolateProvider.endSymbol('*/');
});

lolApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}]);
