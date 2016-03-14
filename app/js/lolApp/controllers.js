/* SearchController */
lolApp.controller("searchController", ['$scope', 'apiService', 'recentMatchesService',
	function($scope, apiService, recentMatchesService) {
		$scope.searchKeyword = "";
		$scope.matches = recentMatchesService.getMatches();

		$scope.search = function() {
			apiService.getRecentMatches($scope.searchKeyword)
				  .then(function(data) {
				    if (data === "SUMMONER_NOT_FOUND") {
							$scope.summonerNotFound = true;
				    } else {
							$scope.summonerNotFound = false;
							recentMatchesService.setMatches(data.matches);
						}
				  });
				};

		// Watch for changes in recent matches data
		$scope.$watch(function() {
			return recentMatchesService.getMatches();
		}, function(newValue, oldValue) {
	  	if (newValue !== oldValue) {
				$scope.matches = newValue;
			}
		}, true);
	}
]);

/* MatchDetailController */
lolApp.controller("matchDetailController", ['$scope', '$routeParams', 'recentMatchesService',
	function($scope, $routeParams, recentMatchesService) {
		$scope.match = recentMatchesService.getMatch(parseInt($routeParams.id));
	}
]);
