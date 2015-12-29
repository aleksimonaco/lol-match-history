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

    $summoner = $app->summonerService->getSummonerByName($formatted_keyword, API_KEY);

	$app->render("searchResult.twig", ["DOMAIN" => DOMAIN, "summoner" => $summoner->serializeDataToArray()]);
}); 
?>
