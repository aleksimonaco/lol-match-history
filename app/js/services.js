lolApp.service('apiService', function($http) {
  return ({
    getRecentMatches: getRecentMatches
  });

  function getRecentMatches(summonerName) {
    var request = $http({
		  method: 'POST',
		  url: '/lol-match-history/search',
		  data: { "search_keyword": summonerName }
		});

    function handleSuccess(response) {
      return(response.data);
    }

    function handleError(response) {
        console.log(response); //TO-DO: handle http error properly
    }

    return(request.then(handleSuccess, handleError));
  }
});

lolApp.factory('recentMatchesService', function() {
  var matches = [];

  function setMatches(newData) {
    matches = newData;
  }

  function getMatches() {
    return matches;
  }

  function getMatch(id) {
    return _.findWhere(matches, {gameId: id});
  }

  return {
    setMatches: setMatches,
    getMatches: getMatches,
    getMatch: getMatch
  }
});

lolApp.service('dateService', function() {
  return {
    getSince: getSince
  }

  function getSince(timestamp) {
    return moment(timestamp).fromNow();
  }
});
