<?php

/**
 * RiotGamesAPI
 *
 * Used to communicate with the Riot Games API
 *
 */
class RiotGamesAPI {

	private $rateLimiter;

	public function __construct() {
		$this->rateLimiter = new RateLimiter();
	}

    /**
     * Perform a GET request with given url
     * and return the received JSON
     *
     * @param string $url Url to the API from which data is retrieved
     * @return array $json Data from API as an array, otherwise return error message
     * if something went wrong with the HTTP request
     */
	public function callAPI($url) {

		try {
            // Check request count from session
			$this->rateLimiter->limit();

			$requestResult = file_get_contents($url, false);
			$json = json_decode($requestResult, true);

			return $json;
		} catch (ErrorException $e) {
			return ["error" => $e->getMessage()];
		}

	}
}

/**
 * HTTPHelper
 *
 */
class HTTPHelper {

	private $app;

	public function __construct() {
		$this->app = \Slim\Slim::getInstance();
	}

    /**
     * Return json data with response code to client
     *
     * @param array $data JSON data to be sent to client
     * @param int $responseCode HTTP status code to return
     */
	public function json($data, $responseCode) {
		$this->app->response->headers->set('Content-Type', 'application/json');
		$this->app->halt($responseCode, json_encode($data, JSON_PRETTY_PRINT));
	}
}

/**
 * RateLimiter
 *
 */
class RateLimiter {

    protected $timestamp;
    protected $limit;
    protected $frequency;

    /**
     * Create new RateLimiter
     * Default 10 requests every 10 seconds
     *
     * @param int $limit Optional calls per frequency
     * @param int $frequency Optional frequency in seconds
     */
    public function __construct($limit = 5, $frequency = 10) {
        $this->limit = $limit;
        $this->frequency = $frequency;
        $this->timestamp = microtime(true);
    }
    /**
     * Called before every API request
     *
     * Check if rate limit is exceeded
     */
    public function limit() {

        // Check if new session
        if (!isset($_SESSION["request_count"])) {
            $_SESSION["request_count"] = 0;
        }

        // Increment call counter every request
        $_SESSION["request_count"]++;

        // Allow burst of requests until it reaches limit threshold
        if ($_SESSION["request_count"] >= $this->limit) {

            $now = microtime(true);
            $duration = $now - $this->timestamp;

            // Check if we have requested limit requests too fast
            if ($duration < $this->frequency) {
                $wait = ($this->frequency - ($now - $this->timestamp)) * 1000000;
                usleep($wait);
            }
            // Reset current timestamp
            $this->timestamp = microtime(true);

            // Reset call counter
            $_SESSION["request_count"] = 0;
        }
    }
}

?>
