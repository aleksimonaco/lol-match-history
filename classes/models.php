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

class Champion {

	// Key info
	private $id, $version, $key, $name, $title, $blurb;

	// Basic info
	private $infoAttack, $infoDefense, $infoMagic, $infoDifficulty;

	// Image info
	private $imageFull, $imageGroup, $imageX, $imageY, $imageW, $imageH;

	// Stats info
	private $partype, $statsHp, $statsHpPerLevel, $statsMp, $statsMpPerLevel,
		$statsMoveSpeed, $statsArmor, $statsArmorPerLevel, $statsSpellBlock,
		$statsSpellBlockPerLevel, $statsAttackRange, $statsHpRegen, $statsHpRegenPerLevel,
		$statsMpRegen, $statsMpRegenPerLevel, $statsCrit, $statsCritPerLevel,
		$statsAttackDamage, $statsAttackDamagePerLevel, $statsAttackSpeedOffset,
		$statsAttackSpeedPerLevel;

	public function __construct($id, $version, $key, $name, $title, $blurb,
		$infoAttack, $infoDefense, $infoMagic, $infoDifficulty,
		$imageFull, $imageGroup, $imageX, $imageY, $imageW, $imageH,
		$partype, $statsHp, $statsHpPerLevel, $statsMp, $statsMpPerLevel,
		$statsMoveSpeed, $statsArmor, $statsArmorPerLevel, $statsSpellBlock,
		$statsSpellBlockPerLevel, $statsAttackRange, $statsHpRegen, $statsHpRegenPerLevel,
		$statsMpRegen, $statsMpRegenPerLevel, $statsCrit, $statsCritPerLevel,
		$statsAttackDamage, $statsAttackDamagePerLevel, $statsAttackSpeedOffset,
		$statsAttackSpeedPerLevel) {
			$this->id = $id;
			$this->version = $version;
			$this->key = $key;
			$this->name = $name;
			$this->title = $title;
			$this->blurb = $blurb;
			$this->infoAttack = $infoAttack;
			$this->infoDefense = $infoDefense;
			$this->infoMagic = $infoMagic;
			$this->infoDifficulty = $infoDifficulty;
			$this->imageFull = $imageFull;
			$this->imageGroup = $imageGroup;
			$this->imageX = $imageX;
			$this->imageY = $imageY;
			$this->imageW = $imageW;
			$this->imageH = $imageH;
			$this->partype = $partype;
			$this->statsHp = $statsHp;
			$this->statsHpPerLevel = $statsHpPerLevel;
			$this->statsMp = $statsMp;
			$this->statsMpPerLevel = $statsMpPerLevel;
			$this->statsMoveSpeed = $statsMoveSpeed;
			$this->statsArmor = $statsArmor;
			$this->statsArmorPerLevel = $statsArmorPerLevel;
			$this->statsSpellBlock = $statsSpellBlock;
			$this->statsSpellBlockPerLevel = $statsSpellBlockPerLevel;
			$this->statsAttackRange = $statsAttackRange;
			$this->statsHpRegen = $statsHpRegen;
			$this->statsHpRegenPerLevel = $statsHpRegenPerLevel;
			$this->statsMpRegen = $statsMpRegen;
			$this->statsMpRegenPerLevel = $statsMpRegenPerLevel;
			$this->statsCrit = $statsCrit;
			$this->statsCritPerLevel = $statsCritPerLevel;
			$this->statsAttackDamage = $statsAttackDamage;
			$this->statsAttackDamagePerLevel = $statsAttackDamagePerLevel;
			$this->statsAttackSpeedOffset = $statsAttackSpeedOffset;
			$this->statsAttackSpeedPerLevel = $statsAttackSpeedPerLevel;
	}

	public function toJSON() {
		return [
			"id" => $this->id,
			"version" => $this->version,
			"key" => $this->key,
			"name" => $this->name,
			"title" => $this->title,
			"blurb" => $this->blurb,
			"infoAttack" => $this->infoAttack,
			"infoDefense" => $this->infoDefense,
			"infoMagic" => $this->infoMagic,
			"infoDifficulty" => $this->infoDifficulty,
			"imageFull" => $this->imageFull,
			"imageGroup" => $this->imageGroup,
			"imageX" => $this->imageX,
			"imageY" => $this->imageY,
			"imageW" => $this->imageW,
			"imageH" => $this->imageH,
			"partype" => $this->partype,
			"statsHp" => $this->statsHp,
			"statsHpPerLevel" => $this->statsHpPerLevel,
			"statsMp" => $this->statsMp,
			"statsMpPerLevel" => $this->statsMpPerLevel,
			"statsMoveSpeed" => $this->statsMoveSpeed,
			"statsArmor" => $this->statsArmor,
			"statsArmorPerLevel" => $this->statsArmorPerLevel,
			"statsSpellBlock" => $this->statsSpellBlock,
			"statsSpellBlockPerLevel" => $this->statsSpellBlockPerLevel,
			"statsAttackRange" => $this->statsAttackRange,
			"statsHpRegen" => $this->statsHpRegen,
			"statsHpRegenPerLevel" => $this->statsHpRegenPerLevel,
			"statsMpRegen" => $this->statsMpRegen,
			"statsMpRegenPerLevel" => $this->statsMpRegenPerLevel,
			"statsCrit" => $this->statsCrit,
			"statsCritPerLevel" => $this->statsCritPerLevel,
			"statsAttackDamage" => $this->statsAttackDamage,
			"statsAttackDamagePerLevel" => $this->statsAttackDamagePerLevel,
			"statsAttackSpeedOffset" => $this->statsAttackSpeedOffset,
			"statsAttackSpeedPerLevel" => $this->statsAttackSpeedPerLevel
		];
	}
}

?>
