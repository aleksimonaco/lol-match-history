<?php

class Summoner {

	private $id, $name, $profileIconId, $revisionDate, $summonerLevel;

	function __construct($id, $name, $profileIconId, $revisionDate, $summonerLevel) {
		$this->id = $id;
		$this->name = $name;
		$this->profileIconId = $profileIconId;
		$this->revisionDate = $revisionDate;
		$this->summonerLevel = $summonerLevel;
	}
}

?>