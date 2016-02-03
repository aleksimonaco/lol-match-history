<?php
require 'vendor/autoload.php';
include_once 'config.php';

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
require_once "classes/database.php";
require_once 'classes/urls.php';
require_once 'classes/models.php';
require_once 'classes/services.php';
require_once 'classes/mappers.php';
require_once 'classes/helpers.php';

// Initalize required service classes
$app->summonerService = new SummonerService(new SummonerMapper());
$app->matchService = new MatchService(new MatchMapper());
$app->databaseManager = new DatabaseManager();

//Initialize helpers
$app->httpHelper = new HTTPHelper($app);

//Start Session
session_start();

$app->run();

?>
