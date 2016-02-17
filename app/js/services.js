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
    var length = matches.length;
    //TO-DO: return single match object
  }

  return {
    setMatches: setMatches,
    getMatches: getMatches
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
