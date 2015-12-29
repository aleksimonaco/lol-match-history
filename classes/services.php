<?php

class SummonerService {
	static function getSummonerByName($name, $apiKey) {

		try {
			$requestResult = file_get_contents("https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/" . rawurlencode($name) . "?api_key=" . $apiKey, false);
		} catch (ErrorException $e) {
			echo $e;
			return false;
		}
		
		$jsonResult = json_decode($requestResult, true);

		return SummonerSearchResultMapper::mapSingleSearchResult($jsonResult);
	}
}

?>