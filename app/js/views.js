/* View for displaying recent match results */
var SearchView = Backbone.View.extend({
	el: "#content",
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
		var self = this;

		var searchKeyword = this.$el.find("#search-keyword").val();

		$.ajax({
			url: "search",
			type: "POST",
			data: JSON.stringify({search_keyword: searchKeyword}),
			contentType: "application/json; charset=utf-8",
			success: function(data) {
				// Remember search keyword
				_.extend(data, {"search_keyword": searchKeyword});

				self.render(data);
				if (!data["error"]) {
					self.renderTotalKillsChart(data);
				}
			},
			error: function(errorMessage) {
				self.render({"error": errorMessage});
			}
		});
	},
	// Render chart for total kills for recent matches with data
	renderTotalKillsChart: function(data) {
		var context = this.$el.find("#totalKills").get(0).getContext("2d");
		var dates = [], totalKills = [];

		_.each(data["match"]["games"], function(game) {
			var championsKilled = game["stats"]["championsKilled"],
				createDate = game["createDate"];

			dates.unshift(moment(createDate).format("DD/MM/YYYY HH:mm"));
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
});
