lolApp.controller("searchController", function($scope, apiService, recentMatchesService) {

	$scope.searchKeyword = "";
	$scope.matches = recentMatchesService.getMatches();

	$scope.search = function() {
		apiService.getRecentMatches($scope.searchKeyword)
			  .then(function(data) {
			    if (data !== undefined) {
						recentMatchesService.setMatches(data.matches);
			    }
			  });
	}

	// Watch for changes in recent matches data
	$scope.$watch(function() {
		return recentMatchesService.getMatches();
	}, function(newValue, oldValue) {
  	if (newValue !== oldValue) {
			$scope.matches = newValue;
		}
	}, true);

});

lolApp.controller("matchDetailController", ['$routeParams', function($routeParams) {
	console.log($routeParams);
}]);
