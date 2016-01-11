var Match = Backbone.Model.extend({});

var Champion = Backbone.Model.extend({
	parse: function(response, options) {
		console.log("-- Response | Options --");
		console.log(response);
		console.log(options);
	}
});
