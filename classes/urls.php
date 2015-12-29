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

	$json = $app->request->getBody();
    $data = json_decode($json);
    $formattedKeyword = trim(strtolower($data->search_keyword));

    $summoner = $app->summonerService->getSummonerByName($formattedKeyword, API_KEY);

	$response = $app->response();
    $response['Content-Type'] = 'application/json';
    $response->body(json_encode(["summoner" => $summoner->serializeDataToArray()]));

    return $response;
}); 
?>
