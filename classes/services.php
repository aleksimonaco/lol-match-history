<?php

/**
* Service
* 
*/
class Service {

	protected $mapper, $apiKey, $riotGamesAPI;

	public function __construct($mapper) {
		$this->mapper = $mapper;

        $this->apiKey = getenv("API_KEY");
        $this->riotGamesAPI = new RiotGamesAPI();
	}
}

/**
* SummonerService
* 
*/
class SummonerService extends Service {

	public function __construct($mapper) {
        parent::__construct($mapper);
    }

    /**
	 * 
	 * Get summoner data by name
	 *
	 * @param string $name summoner name
	 * @return Summoner $summoner model for summoner data
	 */
	function getSummonerByName($name) {

		$json = $this->riotGamesAPI->callAPI("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" . rawurlencode($name) . "?api_key=" . $this->apiKey);
		return $json;

		$summoner = $this->mapper->mapToSingleModel(reset($json));
		return $summoner;
	}
}

/**
* MatchService
* 
*/
class MatchService extends Service {

	public function __construct($mapper) {
        parent::__construct($mapper);
    }

    /**
	 * 
	 * Get recent match info for summoner by id
	 *
	 * @param int $id summoner id
	 * @return 
	 */
	function getRecentMatchInfoBySummonerId($id) {

		try {
			$requestResult = file_get_contents("https://euw.api.pvp.net/api/lol/euw/v1.3/game/by-summoner/" . $id . "/recent?api_key=" . $this->apiKey, false);
			$json = json_decode($requestResult, true);

			return $json;
		} catch (ErrorException $e) {
			return $http_response_header;
		}
	}
}

?>