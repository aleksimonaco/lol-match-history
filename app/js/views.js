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
		var searchResultView = new SearchResultView();

		var self = this;
		var searchKeyword = this.$el.find("#search-keyword").val();

		var matches = new Matches();
		matches.fetch({
			type: "POST",
			data: JSON.stringify({search_keyword: searchKeyword}),
			contentType: "application/json; charset=utf-8",
			success: function(collection, response, options) {
				// Clear error if any
				self.render({"search_keyword": searchKeyword});

				searchResultView.collection = collection;
				searchResultView.render();
				searchResultView.renderTotalKillsChart();
			},
			error: function(collection, response) {
				// Render error and empty result view content
				self.render(response.responseJSON);
				searchResultView.$el.html("");
			},
			complete: function(data) {
				self.$el.find('#search-button').attr("disabled", false);
			}
		});
	}
});

var SearchResultView = Backbone.View.extend({
	el: "#search-result",
	template: Handlebars.templates.searchresult,
	initialize: function() {
		this.render();
	},
	render: function() {
		var data = this.collection ? {"matches": this.collection.toJSON()} : {};
		this.$el.html(this.template(data));
		return this;
	},
	// Render chart for total kills for recent matches with data
	renderTotalKillsChart: function() {
		var matches = this.collection.toJSON();
		var context = this.$el.find("#totalKills").get(0).getContext("2d");
		var dates = [], totalKills = [];

		_.each(matches, function(match) {
			var championsKilled = match["stats"]["championsKilled"],
				createDate = match["createDate"];

			dates.unshift(moment(createDate).format("DD/MM HH:mm"));
			totalKills.unshift(championsKilled);
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
 