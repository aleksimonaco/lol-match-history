var lolApp = angular.module('lolApp', []);

 lolApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('/*');
    $interpolateProvider.endSymbol('*/');
 });

lolApp.controller("searchController", function($scope, $http) {

	$scope.searchKeyword = "";
	$scope.errorMessage = "";
	$scope.matches = [];

	$scope.search = function() {

		if ($scope.searchKeyword.trim() === "") {
			$scope.errorMessage = "Can't search with an empty search word!";
			return;
		}

		$scope.errorMessage = "";

		$http({
		  method: 'POST',
		  url: '/lol-match-history/search',
		  data: {"search_keyword": $scope.searchKeyword}
		}).then(function successCallback(response) {
		    $scope.matches = response.data.match.games;
		}, function errorCallback(response) {
			console.log(response);
		});
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
