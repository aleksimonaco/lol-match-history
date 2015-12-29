<?php

class SummonerSearchResultMapper {

	public function __construct() {}

	public function mapSingleSearchResult($result) {
		if (sizeof($result) === 1) {
			$resultAttributes = reset($result);

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