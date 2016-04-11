var lolApp=angular.module("lolApp",["angular-loading-bar","ngAnimate","ngRoute","LocalStorageModule"]);lolApp.config(function($interpolateProvider){$interpolateProvider.startSymbol("/*"),$interpolateProvider.endSymbol("*/")}),lolApp.config(["cfpLoadingBarProvider",function(cfpLoadingBarProvider){cfpLoadingBarProvider.includeSpinner=!1}]),lolApp.config(["$routeProvider",function($routeProvider){$routeProvider.when("/",{templateUrl:"/lol-match-history/app/js/lolApp/templates/search.html",controller:"searchController"}).when("/match/:id",{templateUrl:"/lol-match-history/app/js/lolApp/templates/matchDetails.html",controller:"matchDetailController"}).otherwise({redirectTo:"/"})}]),lolApp.config(["localStorageServiceProvider",function(localStorageServiceProvider){localStorageServiceProvider.setPrefix("lolApp").setStorageType("sessionStorage")}]);
lolApp.controller("searchController",["$scope","apiService","recentMatchesService",function($scope,apiService,recentMatchesService){$scope.init=function(){$scope.searchKeyword="",$scope.matches=recentMatchesService.getMatches()},$scope.search=function(){apiService.getRecentMatches($scope.searchKeyword).then(function(data){"SUMMONER_NOT_FOUND"===data?$scope.summonerNotFound=!0:($scope.summonerNotFound=!1,recentMatchesService.setMatches(data.matches))})},$scope.$watch(function(){return recentMatchesService.getMatches()},function(newValue,oldValue){newValue!==oldValue&&($scope.matches=newValue)},!0),$scope.init()}]),lolApp.controller("matchDetailController",["$scope","$routeParams","recentMatchesService",function($scope,$routeParams,recentMatchesService){$scope.init=function(){$scope.match=recentMatchesService.getMatch(parseInt($routeParams.id))},$scope.init()}]);
lolApp.directive("recentMatch",["dateService",function(dateService){return{restrict:"E",scope:{match:"="},templateUrl:"/lol-match-history/app/js/lolApp/templates/matchInfo.html",link:function(scope,element,attrs){scope.match.since=dateService.getSince(scope.match.createDate)}}}]),lolApp.directive("kdDoughnutChart",function(){return{restrict:"E",scope:{matchStats:"="},templateUrl:"/lol-match-history/app/js/lolApp/templates/ChartJS.html",link:function(scope,element,attrs){var data=[{value:scope.matchStats.numDeaths,color:"#F7464A",label:"Deaths"},{value:scope.matchStats.championsKilled,color:"#46BFBD",label:"Kills"}],ctx=document.getElementById("chart").getContext("2d");new Chart(ctx).Doughnut(data,{})}}});
lolApp.service("apiService",function($http){function getRecentMatches(summonerName){function handleSuccess(response){return response.data}function handleError(response){return response.data.error}var request=$http({method:"POST",url:"/lol-match-history/search",data:{search_keyword:summonerName}});return request.then(handleSuccess,handleError)}return{getRecentMatches:getRecentMatches}}),lolApp.factory("recentMatchesService",function(localStorageService){function setMatches(newMatchData){matches=newMatchData,localStorageService.isSupported&&(localStorageService.clearAll(),_.each(matches,function(match){localStorageService.set(match.gameId,match)}))}function getMatches(){if(_.isEmpty(matches)&&localStorageService.isSupported){var localStorageMatches=[],ids=localStorageService.keys();_.each(ids,function(id){localStorageMatches.push(localStorageService.get(id))});var sorted=_.sortBy(localStorageMatches,function(match){return-1*match.createDate});return sorted}return matches}function getMatch(id){var match=_.findWhere(matches,{gameId:id});return void 0===match&&(match=getMatchFromLocalStorage(id)),match}function getMatchFromLocalStorage(id){return localStorageService.get(id)}var matches=[];return{setMatches:setMatches,getMatches:getMatches,getMatch:getMatch}}),lolApp.service("dateService",function(){function getSince(timestamp){return moment(timestamp).fromNow()}return{getSince:getSince}});