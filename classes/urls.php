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
    $app->httpHelper->json($summoner, 200);
    //$app->httpHelper->json(["summoner" => $summoner->serializeDataToArray()], 200);

    if ($summoner !== null) {
        $match = $app->matchService->getRecentMatchInfoBySummonerId($summoner->getId());
        $responseBody = [
            "summoner" => $summoner->serializeDataToArray(),
            "match" => $match
        ];
    } else {
        $responseBody = ["error" => $summoner];
    }

	$app->httpHelper->json($responseBody, 200);
});

?>
