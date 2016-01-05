<?php

$app->get('/', function () use ($app) {
	$app->render("base.twig", [
		"DOMAIN" => DOMAIN
	]);
});

$app->post('/search', function () use ($app) {

	$data = json_decode($app->request->getBody());
    $formattedKeyword = trim(strtolower($data->search_keyword));

    if ($formattedKeyword === "") {
        $app->httpHelper->json(["error" => "EMPTY_SEARCH_KEYWORD"], 200);
    }

    $summoner = $app->summonerService->getSummonerByName($formattedKeyword);

    if (!array_key_exists("error", $summoner)) {
        $match = $app->matchService->getRecentMatchesBySummonerId($summoner->getId());

        foreach ($match["games"] as &$game) {
            $game["championData"] = $app->databaseManager->getChampionByKey($game["championId"]);
        }

        $responseBody = [
            "summoner" => $summoner->serializeDataToArray(),
            "match" => $match
        ];
    } else {
        $responseBody = ["error" => $summoner];
    }

	$app->httpHelper->json($responseBody, 200);
});

/*$app->get('/db_test/', function() use ($app) {
    print_r($app->databaseManager->getChampionByKey("266"));
});*/

?>
