(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['frontpage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<h1 class=\"col-xs-12 col-sm-10 col-sm-offset-1 page-header\">Welcome to LolPerformance! <small>Check how you've performed lately</small></h1>\r\n    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1\">\r\n        <h2 class=\"col-xs-12\">Type in your summoner name and hit search!</h2>\r\n        <form id=\"search-form\" class=\"col-xs-12 col-sm-4\"action=\""
    + alias1(((helper = (helper = helpers.DOMAIN || (depth0 != null ? depth0.DOMAIN : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"DOMAIN","hash":{},"data":data}) : helper)))
    + "/search\" method=\"POST\">\r\n            <input id=\"search-keyword\" class=\"form-control\" name=\"search_keyword\" type=\"text\" />\r\n            <input class=\"form-control\" name=\"submit\" type=\"submit\" value=\"Search\" />\r\n        </form>\r\n        <div class=\"col-xs-12 col-sm-6\">\r\n            <img src=\"http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.profileIconId : stack1), depth0))
    + ".png\" />\r\n            <h5>Id: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.id : stack1), depth0))
    + "</h5>\r\n            <h5>Name: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h5>\r\n            <h5>profileIconId: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.profileIconId : stack1), depth0))
    + "</h5>\r\n            <h5>revisionDate: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.revisionDate : stack1), depth0))
    + "</h5>\r\n            <h5>summonerLevel: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.summonerLevel : stack1), depth0))
    + "</h5>\r\n        </div>\r\n    </div>";
},"useData":true});
})();