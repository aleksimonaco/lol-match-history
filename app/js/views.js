/* View for displaying recent match results */
var SearchView = Backbone.View.extend({
	el: "#search",
	events: {
		"submit #search-form": "search"
	},
	template: Handlebars.templates.frontpage,
	initialize: function() {
		this.render({});
	},
	render: function(data) {
		this.$el.html(this.template(data));
		return this;
	},
	// When user clicks search button
	search: function(event) {
		event.preventDefault();
		this.$el.find('#search-button').attr("disabled", true);
		var searchResultView = new SearchResultView({ model: { "loading": "true" }});

		var self = this;

		var searchKeyword = this.$el.find("#search-keyword").val();

		$.ajax({
			url: "search",
			type: "POST",
			data: JSON.stringify({search_keyword: searchKeyword}),
			contentType: "application/json; charset=utf-8",
			success: function(data) {
				if (!data["error"]) {
					// Clear error if any
					self.render({"search_keyword": searchKeyword});

					// Remember search keyword
					_.extend(data, {"search_keyword": searchKeyword});
					
					_.each(data["match"]["games"], function(game) {
						game["since"] = moment(game["createDate"]).fromNow();
						game["stats"]["championsKilled"] = game["stats"]["championsKilled"] ? game["stats"]["championsKilled"] : 0;
						game["kda"] = ((game["stats"]["championsKilled"] + game["stats"]["assists"]) / (game["stats"]["numDeaths"])).toFixed(2);
					});

					//TO-DO: Add model for matches
					searchResultView.model = data;
					searchResultView.render();

				} else {
					self.render(data);
					searchResultView.model = null;
					searchResultView.render();
				}
			},
			error: function(errorMessage) {
				self.render({"error": errorMessage});
			},
			complete: function(data) {
				self.$el.find('#search-button').attr("disabled", false);
			}
		});
	},
	
});

var SearchResultView = Backbone.View.extend({
	el: "#search-result",
	template: Handlebars.templates.searchresult,
	initialize: function() {
		this.render();
	},
	render: function() {
		//TO-DO: Add model for matches
		this.$el.html(this.template(this.model));
		this.renderTotalKillsChart();
		return this;
	},
	// Render chart for total kills for recent matches with data
	renderTotalKillsChart: function() {
		if ('summoner' in this.model && 'match' in this.model) {
			var data = this.model;
			var context = this.$el.find("#totalKills").get(0).getContext("2d");
			var dates = [], totalKills = [];

			_.each(data["match"]["games"], function(game) {
				var championsKilled = game["stats"]["championsKilled"],
					createDate = game["createDate"];

				dates.unshift(moment(createDate).format("DD/MM HH:mm"));
				totalKills.unshift(championsKilled === undefined ? 0 : championsKilled);
			});

			var chartData = {
				labels: dates,
				datasets: [
					{
						label: "Your total kills in the past 10 matches",
						labelColor: "white",
						fillColor: "rgba(220, 220, 220, 0.2)",
						strokeColor: "rgba(220, 220, 220, 1)",
						pointColor: "rgba(220, 220, 220, 1)",
						pointStrokeColor: "#fff",
						pointHighlightFill: "#fff",
						pointHighlightStroke: "rgba(220, 220, 220, 1)",
						data: totalKills
					}
				]
			};

			var chart = new Chart(context).Line(chartData, {
				responsive: true,
				scaleBeginAtZero: true
			});
		}
	}
});
