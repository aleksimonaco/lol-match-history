(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['frontpage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <div class=\"alert alert-danger\">"
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1 class=\"col-xs-12 col-sm-10 col-sm-offset-1 page-header\">Welcome to LolPerformance! <small>Check how you've performed lately</small></h1>\r\n<div class=\"row col-xs-12 col-sm-10 col-sm-offset-1\">\r\n    <h2 class=\"col-xs-12\">Type in your summoner name and hit search!</h2>\r\n    <form id=\"search-form\" class=\"col-xs-12 col-sm-4\"action=\""
    + alias4(((helper = (helper = helpers.DOMAIN || (depth0 != null ? depth0.DOMAIN : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"DOMAIN","hash":{},"data":data}) : helper)))
    + "/search\" method=\"POST\">\r\n        <input id=\"search-keyword\" class=\"form-control\" name=\"search_keyword\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.search_keyword || (depth0 != null ? depth0.search_keyword : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"search_keyword","hash":{},"data":data}) : helper)))
    + "\"/>\r\n        <input id=\"search-button\" class=\"form-control\" name=\"submit\" type=\"submit\" value=\"Search\" />\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </form>\r\n</div>\r\n    \r\n";
},"useData":true});
})();