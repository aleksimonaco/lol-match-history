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
			$values["id"],
			$values["name"],
			$values["profileIconId"],
			$values["revisionDate"],
			$values["summonerLevel"]
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
	 * @return Match $match mapped model for single Match data
	 */
	public function mapToSingleModel($values) {

		/*
		 * TO-DO: Check MatchStats model class
		 * $matchStats = new MatchStats();
		 */

		$match = new Match(
			$values["gameId"],
			$values["invalid"],
			$values["gameMode"],
			$values["gameType"],
			$values["subType"],
			$values["mapId"],
			$values["teamId"],
			$values["championId"],
			$values["spell1"],
			$values["spell2"],
			$values["level"],
			$values["ipEarned"],
			$values["createDate"],
			$values["stats"]
		);

		return $match;
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
			array_push($matches, $this->mapToSingleModel($value));
		}

		return $matches;
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
			$values["id"],
			$values["version"],
			$values["key"],
			$values["name"],
			$values["title"],
			$values["blurb"],
			$values["info_attack"],
			$values["info_defense"],
			$values["info_magic"],
			$values["info_difficulty"],
			$values["image_full"],
			$values["image_group"],
			$values["image_x"],
			$values["image_y"],
			$values["image_w"],
			$values["image_h"],
			$values["partype"],
			$values["stats_hp"],
			$values["stats_hpperlevel"],
			$values["stats_mp"],
			$values["stats_mpperlevel"],
			$values["stats_movespeed"],
			$values["stats_armor"],
			$values["stats_armorperlevel"],
			$values["stats_spellblock"],
			$values["stats_spellblockperlevel"],
			$values["stats_attackrange"],
			$values["stats_hpregen"],
			$values["stats_hpregenperlevel"],
			$values["stats_mpregen"],
			$values["stats_mpregenperlevel"],
			$values["stats_crit"],
			$values["stats_critperlevel"],
			$values["stats_attackdamage"],
			$values["stats_attackdamageperlevel"],
			$values["stats_attackspeedoffset"],
			$values["stats_attackspeedperlevel"]
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
