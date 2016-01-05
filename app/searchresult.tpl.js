(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['searchresult'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <img src=\"http://ddragon.leagueoflegends.com/cdn/5.24.2/img/profileicon/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.profileIconId : stack1), depth0))
    + ".png\" />\r\n        <h5>Id: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.id : stack1), depth0))
    + "</h5>\r\n        <h5>Name: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h5>\r\n        <h5>profileIconId: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.profileIconId : stack1), depth0))
    + "</h5>\r\n        <h5>revisionDate: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.revisionDate : stack1), depth0))
    + "</h5>\r\n        <h5>summonerLevel: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.summoner : depth0)) != null ? stack1.summonerLevel : stack1), depth0))
    + "</h5>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-body\">\r\n                <h3>Fetching data...</h3>\r\n                <i class=\"fa fa-cog fa-spin fa-4x\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.match : depth0)) != null ? stack1.games : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"col-xs-12 text-center\">\r\n        <h1>Total kills in last 10 matches</h1>\r\n        <canvas id=\"totalKills\" width=\"1200\" height=\"400\"></canvas>\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"col-xs-12 col-md-6 col-md-offset-3 text-center\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">\r\n                    <div class=\"col-xs-4\">\r\n                        <img class=\"match-champion-icon\" alt=\"Champion icon\" src=\"http://ddragon.leagueoflegends.com/cdn/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.championData : depth0)) != null ? stack1.version : stack1), depth0))
    + "/img/champion/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.championData : depth0)) != null ? stack1.image_full : stack1), depth0))
    + "\" />\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h4>"
    + alias2(alias1((depth0 != null ? depth0.gameMode : depth0), depth0))
    + "</h4>\r\n                        <h2>"
    + alias2(alias1((depth0 != null ? depth0.since : depth0), depth0))
    + "</h2>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h4>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.championsKilled : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " / "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.numDeaths : stack1), depth0))
    + " / "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.assists : stack1), depth0))
    + "</h4>\r\n                        <h2>KDA "
    + alias2(alias1((depth0 != null ? depth0.kda : depth0), depth0))
    + "</h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.stats : depth0)) != null ? stack1.championsKilled : stack1), depth0))
    + " ";
},"9":function(container,depth0,helpers,partials,data) {
    return " 0 ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<!-- <div class=\"col-xs-12 col-sm-6\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.summoner : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div> -->\r\n\r\n<div class=\"row\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.match : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();