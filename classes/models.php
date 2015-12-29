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

?>
