lolApp.directive("recentMatch", function() {
  return {
    restrict: 'E',
    scope: {
      match: "="
    },
    templateUrl: "http://localhost/lol-match-history/app/js/templates/matchInfo.html"
  };
});
