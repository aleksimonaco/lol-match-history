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

		console.log("event clicked");

		var searchKeyword = this.$el.find("#search-keyword").val();

		console.log("-- AJAX START --");
		$.ajax({
			url: "search",
			type: "POST",
			data: JSON.stringify({search_keyword: searchKeyword}),
			contentType: "application/json; charset=utf-8",
    		success: function(data) {
    			self.render(data);
    		},
    		error: function(errorMessage) {

    		}
		});
	}
});
