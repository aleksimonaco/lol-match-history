<?php
require 'vendor/autoload.php';

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

// Require all the necessary php files
require 'classes/urls.php';
require 'classes/models.php';
require 'classes/services.php';
require 'classes/mappers.php';

$app->run();

?>