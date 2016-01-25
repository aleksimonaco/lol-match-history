var lolApp = angular.module('lolApp', []);

 lolApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('/*');
    $interpolateProvider.endSymbol('*/');
 });

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

lolApp.directive('loading', ['$http', function ($http) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };

            scope.$watch(scope.isLoading, function (v) {
                if (v) {
                    element.show();
                } else {
                    element.hide();
                }
            });
        }
    };
}
]);
