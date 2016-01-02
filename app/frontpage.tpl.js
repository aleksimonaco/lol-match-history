(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['frontpage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <img src=\"http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.profileIconId : stack1), depth0))
    + ".png\" />\r\n                <h5>Id: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.id : stack1), depth0))
    + "</h5>\r\n                <h5>Name: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h5>\r\n                <h5>profileIconId: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.profileIconId : stack1), depth0))
    + "</h5>\r\n                <h5>revisionDate: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.revisionDate : stack1), depth0))
    + "</h5>\r\n                <h5>summonerLevel: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.summonerLevel : stack1), depth0))
    + "</h5>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.match : depth0)) != null ? stack1.games : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <div class=\"col-xs-12 text-center\">\r\n                <h1>Total kills in last 10 matches</h1>\r\n                <canvas id=\"totalKills\" width=\"1200\" height=\"400\"></canvas>\r\n            </div>\r\n        </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div class=\"col-xs-12 text-center\">\r\n                "
    + alias2(alias1((depth0 != null ? depth0.championId : depth0), depth0))
    + "\r\n                <img alt=\"Champion icon\" src=\"http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/"
    + alias2(alias1((depth0 != null ? depth0.championId : depth0), depth0))
    + ".png\" style=\"float: left;\" />\r\n                    <h2>Hello</h2>\r\n                </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1 class=\"col-xs-12 col-sm-10 col-sm-offset-1 page-header\">Welcome to LolPerformance! <small>Check how you've performed lately</small></h1>\r\n    <div class=\"row col-xs-12 col-sm-10 col-sm-offset-1\">\r\n        <h2 class=\"col-xs-12\">Type in your summoner name and hit search!</h2>\r\n        <form id=\"search-form\" class=\"col-xs-12 col-sm-4\"action=\""
    + alias4(((helper = (helper = helpers.DOMAIN || (depth0 != null ? depth0.DOMAIN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DOMAIN","hash":{},"data":data}) : helper)))
    + "/search\" method=\"POST\">\r\n            <input id=\"search-keyword\" class=\"form-control\" name=\"search_keyword\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.search_keyword || (depth0 != null ? depth0.search_keyword : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"search_keyword","hash":{},"data":data}) : helper)))
    + "\"/>\r\n            <input class=\"form-control\" name=\"submit\" type=\"submit\" value=\"Search\" />\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </form>\r\n        <div class=\"col-xs-12 col-sm-6\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.summoner : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.match : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();