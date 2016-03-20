lolApp.service('apiService', function($http) {
  return {
    getRecentMatches: getRecentMatches
  };

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
        return response.data.error;
    }

    return(request.then(handleSuccess, handleError));
  }
});

lolApp.factory('recentMatchesService', function(localStorageService) {
  var matches = [];

  return {
    setMatches: setMatches,
    getMatches: getMatches,
    getMatch: getMatch
  };

  function setMatches(newMatchData) {
    matches = newMatchData;

    if (localStorageService.isSupported) {
      localStorageService.clearAll(); // Clear any previous data;

      _.each(matches, function(match) {
        localStorageService.set(match.gameId, match);
      });
    }
  }

  function getMatches() {
    if (_.isEmpty(matches)) {
      if (localStorageService.isSupported) {
        var localStorageMatches = [];
        var ids = localStorageService.keys();

        _.each(ids, function(id) {
          localStorageMatches.push(localStorageService.get(id));
        });

        var sorted = _.sortBy(localStorageMatches, function(match) {
          return match.createDate * -1; // Descending from newest to old
        });

        return sorted;
      }
    }

    return matches;
  }

  function getMatch(id) {
    var match = _.findWhere(matches, { gameId: id });

    if (match === undefined) {
      match = getMatchFromLocalStorage(id);
    }

    return match;
  }

  function getMatchFromLocalStorage(id) {
    return localStorageService.get(id);
  }
});

lolApp.service('dateService', function() {
  return {
    getSince: getSince
  };

  function getSince(timestamp) {
    return moment(timestamp).fromNow();
  }
});
