lolApp.directive("recentMatch", ["dateService", function(dateService) {
  return {
    restrict: 'E',
    scope: {
      match: "="
    },
    templateUrl: "/lol-match-history/app/js/lolApp/templates/matchInfo.html",
    link: function(scope, element, attrs) {
      scope.match.since = dateService.getSince(scope.match.createDate);
    }
  };
}]);

lolApp.directive("kdDoughnutChart", function() {
  return {
    restrict: 'E',
    scope: {
      matchStats: "="
    },
    templateUrl: "/lol-match-history/app/js/lolApp/templates/ChartJS.html",
    link: function(scope, element, attrs) {
      var data = [{
        value: scope.matchStats.numDeaths,
        color: "#F7464A",
        label: "Deaths"
      }, {
        value: scope.matchStats.championsKilled,
        color: "#46BFBD",
        label: "Kills"
      }];

      var ctx = document.getElementById("chart").getContext("2d");
      var myNewChart = new Chart(ctx).Doughnut(data, {});
    }
  };
});
