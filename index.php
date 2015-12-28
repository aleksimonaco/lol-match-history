<?php
require 'vendor/autoload.php';

define("DOMAIN", (getenv("DOMAIN") !== false ? getenv("DOMAIN") : "http://localhost/SteamTest"));

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

require 'classes/urls.php';

$app->run();

?>