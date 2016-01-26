var lolApp = angular.module('lolApp', ['angular-loading-bar']);

 lolApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('/*');
    $interpolateProvider.endSymbol('*/');
 });

 lolApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])

lolApp.controller("searchController", function($scope, apiService) {

	$scope.searchKeyword = "";
	$scope.errorMessage = "";
	$scope.matches = [];

	$scope.search = function() {

		if ($scope.searchKeyword.trim() === "") {
			$scope.errorMessage = "Can't search with an empty search word!";
			return;
		}

		$scope.errorMessage = "";

    apiService.getRecentMatches($scope.searchKeyword)
      .then(function(data) {
        if (data !== undefined) {
          $scope.matches = data.match.games;
        }
      });
	}

  function generateTotalKillGraph() {
    // TO-DO
  }

});

lolApp.service('apiService', function($http) {
  return ({
    getRecentMatches: getRecentMatches
  });

  function getRecentMatches(summonerName) {
    var request = $http({
		  method: 'POST',
		  url: '/lol-match-history/search',
		  data: {"search_keyword": summonerName}
		});

    function handleSuccess(response) {
      return(response.data);
    }

    function handleError(response) {
        console.log(response);
    }

    return(request.then(handleSuccess, handleError));
  }
});
