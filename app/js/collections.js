var Matches = Backbone.Collection.extend({
	url: "http://localhost/lol-match-history/search",
	model: Match,
	parse: function(response) {
		console.log(response);

		var matches = response.match.games;

		_.each(matches, function(match) {
			/*var championsKilled = parseInt(match["stats"]["championsKilled"]);
			var assists = parseInt(match["stats"]["assists"]);
			var numDeaths = parseInt(match["stats"]["numDeaths"]);*/

			match["since"] = moment(match["createDate"]).fromNow();
			match["stats"]["championsKilled"] = match["stats"]["championsKilled"] ? match["stats"]["championsKilled"] : 0;
			match["stats"]["assists"] = match["stats"]["assists"] ? match["stats"]["assists"] : 0;
			match["stats"]["numDeaths"] = match["stats"]["numDeaths"] ? match["stats"]["numDeaths"] : 0;

			if (match["stats"]["numDeaths"] === 0) {
				match["kda"] = parseFloat(match["stats"]["championsKilled"] + match["stats"]["assists"]).toFixed(2);
			} else {
				match["kda"] = parseFloat(((match["stats"]["championsKilled"] + match["stats"]["assists"]) / match["stats"]["numDeaths"])).toFixed(2);
			}
			
		});

    	return matches;
  	}
});
