lolApp.service('apiService', function($http) {
  return ({
    getRecentMatches: getRecentMatches
  });

  function getRecentMatches(summonerName) {
    var request = $http({
		  method: 'POST',
		  url: '/lol-match-history/search',
		  data: {"search_keyword": summonerName}
		});

    function handleSuccess(response) {
      return(response.data);
    }

    function handleError(response) {
        console.log(response);
    }

    return(request.then(handleSuccess, handleError));
  }
});
