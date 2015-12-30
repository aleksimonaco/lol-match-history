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
				// Add search keyword
				_.extend(data, {"search_keyword": searchKeyword});

				self.render(data);
				if (!data["error"]) {
					self.renderTotalKillsChart(data);
				}
			},
			error: function(errorMessage) {

			}
		});
	},
	renderTotalKillsChart: function(data) {
		var context = this.$el.find("#totalKills").get(0).getContext("2d");
		var dates = [], totalKills = [];

		_.each(data["match"]["games"], function(game) {
			dates.unshift(moment(game["createDate"]).format("DD/MM/YYYY HH:mm"));
			totalKills.unshift(game["stats"]["championsKilled"]);
		});

		var chartData = {
			labels: dates,
			datasets: [
				{
					label: "Your total kills in the past 10 matches",
					labelColor: "white",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: totalKills
				}
			]
		};

		var chart = new Chart(context).Line(chartData, {
			responsive: true,
			scaleStartValue : 0
		});
	}
});
