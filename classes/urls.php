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
    if ($summoner !== null) {
        $match = $app->matchService->getRecentMatchInfoBySummonerId($summoner->getId());
        $responseBody = [
            "summoner" => $summoner->serializeDataToArray(),
            "match" => $match
        ];
    } else {
        $responseBody = ["error" => "SUMMONER_NOT_FOUND"];
    }

	$response = $app->response();
    $response['Content-Type'] = 'application/json';
    $response->body(json_encode($responseBody));

    return $response;
});

?>
