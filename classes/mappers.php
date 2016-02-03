<?php

/**
 * Mapper
 *
 */
abstract class Mapper {
	abstract public function mapToSingleModel($values);
	abstract public function mapToMultipleModels($values);
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
	 * @param array $values Array that needs to be mapped
	 * @return Summoner $summoner mapped model for summoner data
	 */
	public function mapToSingleModel($values) {

		$summoner = new Summoner(
			(int)			$values["id"],
			(string)	$values["name"],
			(int)			$values["profileIconId"],
			(int)			$values["revisionDate"],
			(int)			$values["summonerLevel"]
		);

		return $summoner;
	}

	/**
	 *
	 * Map array values to multiple Summoner models
	 *
	 * @param array $values Array that needs to be mapped
	 * @return Array $summoners Array of mapped Summoner models
	 */
	public function mapToMultipleModels($values) {

	}
}

class MatchMapper {

	public function __construct() {}

	/**
	 *
	 * Map array values to a single Match model
	 *
	 * @param array $values Array that needs to be mapped
	 * @return Match $match mapped model for single match data
	 */
	public function mapToSingleModel($values) {
		// TO-DO
	}

	/**
	 *
	 * Map array values to multiple Summoner models
	 *
	 * @param array $values Array that needs to be mapped
	 * @return Array $matches Array of mapped Match models
	 */
	public function mapToMultipleModels($values) {

		$matches = [];
		foreach ($values as $key => $value) {
			$match = new Match(
				/*$this->gameId = $gameId;
				$this->gameMode = $gameMode;
				$this->gameType = $gameType;
				$this->subType = $subType;
				$this->mapId = $mapId;
				$this->teamId = $teamId;
				$this->championId = $championId;
				$this->spell1 = $spell1;
				$this->spell2 = $spell2;
				$this->level = $level;
				$this->ipEarned = $ipEarned;
				$this->createDate = $createDate;
				$this->stats = $stats;*/
			);
		}
	}
}

?>
