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
