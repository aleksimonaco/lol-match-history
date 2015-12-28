<?php
$app->get('/', function () use ($app) {
	$app->render("games.twig", array(
		"DOMAIN" => DOMAIN
	));
});

$app->get('/game/news', function () use ($app) {
    $response = file_get_contents('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=730&count=3&maxlength=300&format=json', false);
	$json = json_decode($response, true);

	$app->render("games.twig", array(
		"newsitems" => $json["appnews"]["newsitems"],
		"DOMAIN" => DOMAIN
	));
});
?>
