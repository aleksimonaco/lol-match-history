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
	 * Get summoner data by name
	 *
	 * @param string $name summoner name
	 * @return Summoner $summoner Model for summoner data
	 */
	public function getSummonerByName($name) {

		$result = $this->riotGamesAPI->callAPI("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" . rawurlencode($name) . "?api_key=" . $this->apiKey);

		if (array_key_exists("error", $result)) {
			return $result;
		}

		$summoner = $this->mapper->mapToSingleModel(reset($result));
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
	 * @return array $matches Details for recent matches
	 */
	public function getRecentMatchesBySummonerId($id) {

		$json = $this->riotGamesAPI->callAPI("https://euw.api.pvp.net/api/lol/euw/v1.3/game/by-summoner/" . $id . "/recent?api_key=" . $this->apiKey);
		return $json;

		$matches = $this->mapper->mapToMultipleModel($json["games"]);
		return $matches;
	}
}

?>
