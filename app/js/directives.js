lolApp.directive("recentMatch", ["dateService", function(dateService) {
  return {
    restrict: 'E',
    scope: {
      match: "="
    },
    templateUrl: "/lol-match-history/app/js/templates/matchInfo.html",
    link: function(scope, element, attrs) {
      scope.match.since = dateService.getSince(scope.match.createDate);
    }
  };
}]);
