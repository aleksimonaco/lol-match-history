<?php

class SummonerSearchResultMapper {
	public static function mapSingleSearchResult($result) {
		if (sizeof($result) === 1) {
			$resultAttributes = reset($result);
			return $resultAttributes;

			$summoner = new Summoner($resultAttributes["id"],
										$resultAttributes["name"], 
										$resultAttributes["profileIconId"], 
										$resultAttributes["revisionDate"], 
										$resultAttributes["summonerLevel"]);

			return $summoner;
		} else {
			throw new Exception('Found multiple summoners');
		}
	}
}

?>