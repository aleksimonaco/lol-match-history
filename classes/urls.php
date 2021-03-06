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
	  $app->httpHelper->json(["error" => "EMPTY_SEARCH_KEYWORD"], 404);
	}

  $summoner = $app->summonerService->getSummonerByName($formattedKeyword);

  if (!array_key_exists("error", $summoner)) {
		$matchResponse = [];

		$matches = $app->matchService->getRecentMatchesBySummonerId($summoner->getId());

		foreach ($matches as $match) {
			$matchJSON = $match->toJSON();
			$matchJSON["championData"] = $app->championDAO->getChampionByKey($matchJSON["championId"])->toJSON();
			array_push($matchResponse, $matchJSON);
		}

		$responseBody = ["matches" => $matchResponse];
	} else {
		$app->httpHelper->json(["error" => "SUMMONER_NOT_FOUND"], 404);
	}

	$app->httpHelper->json($responseBody, 200);
});

?>
