<?php
$app->get('/', function () use ($app) {
	$app->render("searchResult.twig", array(
		"DOMAIN" => DOMAIN
	));
});

/**
*
*
*/
$app->post('/search', function () use ($app) {
	$keyword = $app->request->post('search_keyword');
	$formatted_keyword = trim(strtolower($keyword));

    $summoner = SummonerService::getSummonerByName($formatted_keyword, "a288f1f8-be11-4345-a178-98d619f4d763");

	$app->render("searchResult.twig", ["DOMAIN" => DOMAIN, "summoner" => $summoner]);
}); 
?>
