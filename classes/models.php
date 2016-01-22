<?php

class Summoner {

	private $id, $name, $profileIconId, $revisionDate, $summonerLevel;

	public function __construct($id, $name, $profileIconId, $revisionDate, $summonerLevel) {
		$this->id = $id;
		$this->name = $name;
		$this->profileIconId = $profileIconId;
		$this->revisionDate = $revisionDate;
		$this->summonerLevel = $summonerLevel;
	}

	public function getId() {
		return $this->id;
	}

	public function serializeDataToArray() {
		return [
			"id" => $this->id,
			"name" => $this->name,
			"profileIconId" => $this->profileIconId,
			"revisionDate" => $this->revisionDate,
			"summonerLevel" => $this->summonerLevel
		];
	}
}

class Match {

	// Match basic info
	private $gameId, $gameMode, $gameType, $subType, $mapId, $teamId, $championId;
	private $spell1, $spell2, $level, $ipEarned, $createDate;

	// Match stats info (MatchStats object)
	private $stats;

	public function __construct($gameId, $gameMode, $gameType, $subType, $mapId, $teamId, $championId,
								$spell1, $spell2, $level, $ipEarned, $createDate, $stats) {
		$this->gameId = $gameId;
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
		$this->stats = $stats;
	}
}

?>
