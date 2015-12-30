<?php

$app->get('/', function () use ($app) {
	$app->render("searchResult.twig", [
		"DOMAIN" => DOMAIN
	]);
});

$app->post('/search', function () use ($app) {

	$data = json_decode($app->request->getBody());
    $formattedKeyword = trim(strtolower($data->search_keyword));

    $summoner = $app->summonerService->getSummonerByName($formattedKeyword);
    $match = $app->matchService->getRecentMatchInfoBySummonerId($summoner->getId());

	$response = $app->response();
    $response['Content-Type'] = 'application/json';
    $response->body(json_encode([
        "summoner" => $summoner->serializeDataToArray(),
        "match" => $match
    ]));

    return $response;
});

?>
