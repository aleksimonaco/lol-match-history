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
 * SummonerMapper
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

/**
 * MatchMapper
 *
 */
class MatchMapper extends Mapper {

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
	 * Map array values to multiple Match models
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

/**
 * ChampionMapper
 *
 */
 class ChampionMapper extends Mapper {

	public function __construct() {}

	/**
	 *
	 * Map array values to a single Champion model
	 *
	 * @param array $values Array that needs to be mapped
	 * @return Champion $champion mapped model for single champion data
	 */
	public function mapToSingleModel($values) {

		$champion = new Champion(
			(string)	$values["id"],
			(string)	$values["version"],
			(string)	$values["name"],
			(string)	$values["version"],
			(string)	$values["key"],
			(string)	$values["name"],
			(string)	$values["title"],
			(string)	$values["blurb"],
			(int)		$values["info_attack"],
			(int)		$values["info_defense"],
			(int)		$values["info_magic"],
			(int)		$values["info_difficulty"],
			(string)	$values["image_x"],
			(string)	$values["image_y"],
			(string)	$values["image_w"],
			(string)	$values["image_h"],
			(string)	$values["partype"],
			(double)	$values["stats_hp"],
			(double)	$values["stats_hpperlevel"],
			(double)	$values["stats_mp"],
			(double)	$values["stats_mpperlevel"],
			(double)	$values["stats_movespeed"],
			(double)	$values["stats_armor"],
			(double)	$values["stats_armorperlevel"],
			(double)	$values["stats_spellblock"],
			(double)	$values["stats_spellblockperlevel"],
			(double)	$values["stats_attackrange"],
			(double)	$values["stats_hpregen"],
			(double)	$values["stats_hpregenperlevel"],
			(double)	$values["stats_mpregen"],
			(double)	$values["stats_mpregenperlevel"],
			(double)	$values["stats_crit"],
			(double)	$values["stats_critperlevel"],
			(double)	$values["stats_attackdamage"],
			(double)	$values["stats_attackdamageperlevel"],
			(double)	$values["stats_attackspeedoffset"],
			(double)	$values["stats_attackspeedperlevel"]
		);

		return $champion;
	}

	/**
	 *
	 * Map array values to multiple Champion models
	 *
	 * @param array $values Array that needs to be mapped
	 * @return Array $matches Array of mapped Champion models
	 */
	public function mapToMultipleModels($values) {
		// TO-DO
	}

 }

?>
