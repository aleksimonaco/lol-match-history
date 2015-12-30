<?php

/**
 * Mapper
 *
 */
abstract class Mapper {
	abstract public function mapToSingleModel($values);
}

/**
 * Summoner Mapper
 *
 */
class SummonerMapper extends Mapper {

	public function __construct() {}

	/**
	 * 
	 * Map array values to a Summoner model
	 *
	 * @param array $valeus Values that where returned from the API
	 * @return Summoner $summoner mapped model for summoner data
	 */
	public function mapToSingleModel($values) {

		$summoner = new Summoner(
			(int) 		$values["id"],
			(string)	$values["name"], 
			(int) 		$values["profileIconId"], 
			(int)		$values["revisionDate"], 
			(int)		$values["summonerLevel"]
		);

		return $summoner;
	}
}

class MatchMapper {

	public function __construct() {}

	/**
	 * 
	 * Map array values to a single Match model
	 *
	 * @param array $values Attributes that where returned from the API
	 * @return Match $match mapped model for single match data
	 */
	public function mapToSingleModel($values) {

	}
}

?>