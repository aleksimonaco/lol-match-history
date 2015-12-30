<?php
require 'vendor/autoload.php';
include 'config.php';

// Specify domain
define("DOMAIN", (getenv("DOMAIN") !== false ? getenv("DOMAIN") : "http://localhost/lol-match-history"));

$app = new \Slim\Slim(array(
    'view' => new \Slim\Views\Twig()
));

$view = $app->view();
$view->parserOptions = array(
    'debug' => true
);

$view->parserExtensions = array(
    new \Slim\Views\TwigExtension()
);

// Require once all the necessary php files
require_once 'classes/urls.php';
require_once 'classes/models.php';
require_once 'classes/services.php';
require_once 'classes/mappers.php';

// Initalize required classes
$app->summonerService = new SummonerService(new SummonerMapper(), getenv("API_KEY"));
$app->matchService = new MatchService(new MatchMapper(), getenv("API_KEY"));

$app->run();

?>
