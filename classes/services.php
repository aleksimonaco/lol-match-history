<?php

/**
* Service
* 
*/
class Service {

	public function __construct() {}
}

/**
* SummonerService
* 
*/
class SummonerService extends Service {

	protected $mapper, $apiKey;

	public function __construct(SummonerMapper $mapper, $apiKey) {
        parent::__construct();
        $this->mapper = $mapper; 
        $this->apiKey = $apiKey;
    }

    /**
	 * 
	 * Get summoner data by name
	 *
	 * @param string $name summoner name
	 * @return Summoner $summoner model for summoner data
	 */
	function getSummonerByName($name) {

		try {
			$requestResult = file_get_contents("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" . rawurlencode($name) . "?api_key=" . $this->apiKey, false);
			$json = json_decode($requestResult, true);
		} catch (ErrorException $e) {
			echo $e;
			return null;
		}

		$summoner = $this->mapper->mapToSingleModel(reset($json));
		return $summoner;
	}
}

/**
* MatchService
* 
*/
class MatchService extends Service {
	protected $mapper, $apiKey;

	public function __construct(MatchMapper $mapper, $apiKey) {
        parent::__construct();
        $this->mapper = $mapper; 
        $this->apiKey = $apiKey;
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
			return null;
		}
	}
}

?>