<?php

class RiotGamesAPI {

	private $rateLimiter;

	public function __construct() {
		$this->rateLimiter = new RateLimiter();
	}

	public function callAPI($url) {
		try {
			$this->rateLimiter->limit();
			$requestResult = file_get_contents($url, false);
			$json = json_decode($requestResult, true);

			//return $json;

			return [
				"summoner" => $json,
				"calls" => $this->rateLimiter->calls
			];
		} catch (ErrorException $e) {
			return $http_response_header;
		}

	}
}

class HTTPHelper {

	private $app;

	public function __construct() {
		$this->app = \Slim\Slim::getInstance();
	}

	public function json($data, $response_code) {
		$this->app->response->headers->set('Content-Type', 'application/json');
		$this->app->halt($response_code, json_encode($data, JSON_PRETTY_PRINT));
	}
}

class RateLimiter {
    protected $timestamp = 0;
    public $calls = 0;
    protected $limit;
    protected $frequency;
    /**
     * Create new RateLimiter
     * Default 10 requests every 10 seconds
     *
     * @param int $limit Optional calls per frequency
     * @param int $frequency Optional frequency in seconds
     */
    public function __construct($limit = 5, $frequency = 5) {
        $this->limit = $limit;
        $this->frequency = $frequency;
    }
    /**
     * Call before every API request
     */
    public function limit() {
        // Increment call counter every request
        $this->calls++;
        // Allow burst of requests until it reaches limit threshold
        if ($this->calls >= $this->limit) {
            $now = microtime(true);
            // Determine time taken
            $duration = $now - $this->timestamp;
            // Check if we have requested limit requests too fast
            if ($duration < $this->frequency) {
                // Wait before allowing script to continue sending requests
                $wait = ($this->frequency - ($now - $this->timestamp)) * 1000000;
                usleep($wait);
            }
            // Reset current timestamp
            $this->timestamp = microtime(true);
            // Reset call counter
            $this->calls = 0;
        }
    }
}



?>