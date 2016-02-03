<?php

/**
 * DatabaseManager
 *
 */
class DatabaseManager {

	protected $pdo;

	public function __construct() {

		$dbopts = parse_url(getenv("DATABASE_URL"));

		$dsn = "pgsql:"
		. "host=" . $dbopts["host"] . ";"
		. "dbname=" . ltrim($dbopts["path"],'/') . ";"
		. "user=" . $dbopts["user"] . ";"
		. "port=" . $dbopts["port"] . ";"
		. "password=" . $dbopts["pass"];

		$this->pdo = new PDO($dsn);
	}

	/**
	 * Get champion static data by given key
	 *
	 * @param string $key Key for champion
	 *
	 * @return array $champion Champion data is available, otherwise null
	 */
	public function getChampionByKey($key) {
		try {
			$sql = $this->pdo->prepare("SELECT * FROM champion WHERE key = :key");
			$sql->bindParam(":key", $key, PDO::PARAM_STR);
			$sql->execute();

			return $sql->fetch(PDO::FETCH_ASSOC);
		} catch (PDOException $e) {
			echo $e->errorInfo();
			return null;
		}
	}

	/* Utility functions for converting champion json data to database

	private function getChampionJSON() {
		$json = json_decode(file_get_contents("http://ddragon.leagueoflegends.com/cdn/5.24.2/data/en_US/champion.json"), true);

		return $json["data"];
	}

	public function storeChampionStaticData() {
		$championData = $this->getChampionJSON();

		foreach ($championData as $champion) {
			try {
				$sql = $this->pdo->prepare("INSERT INTO champion (
					id, version, key, name, title, blurb,
					info_attack, info_defense, info_magic, info_difficulty,
					image_full, image_group, image_x, image_y, image_w, image_h, partype,
					stats_hp, stats_hpperlevel, stats_mp, stats_mpperlevel, stats_movespeed,
					stats_armor, stats_armorperlevel, stats_spellblock, stats_spellblockperlevel,
					stats_attackrange, stats_hpregen, stats_hpregenperlevel, stats_mpregen,
					stats_mpregenperlevel, stats_crit, stats_critperlevel,
					stats_attackdamage, stats_attackdamageperlevel, stats_attackspeedoffset, stats_attackspeedperlevel)
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

				$sql->bindParam(1, $champion["id"]);
				$sql->bindParam(2, $champion["version"]);
				$sql->bindParam(3, $champion["key"]);
				$sql->bindParam(4, $champion["name"]);
				$sql->bindParam(5, $champion["title"]);
				$sql->bindParam(6, $champion["blurb"]);
				$sql->bindParam(7, $champion["info"]["attack"]);
				$sql->bindParam(8, $champion["info"]["defense"]);
				$sql->bindParam(9, $champion["info"]["magic"]);
				$sql->bindParam(10, $champion["info"]["difficulty"]);
				$sql->bindParam(11, $champion["image"]["full"]);
				$sql->bindParam(12, $champion["image"]["group"]);
				$sql->bindParam(13, $champion["image"]["x"]);
				$sql->bindParam(14, $champion["image"]["y"]);
				$sql->bindParam(15, $champion["image"]["w"]);
				$sql->bindParam(16, $champion["image"]["h"]);
				$sql->bindParam(17, $champion["partype"]);
				$sql->bindParam(18, $champion["stats"]["hp"]);
				$sql->bindParam(19, $champion["stats"]["hpperlevel"]);
				$sql->bindParam(20, $champion["stats"]["mp"]);
				$sql->bindParam(21, $champion["stats"]["mpperlevel"]);
				$sql->bindParam(22, $champion["stats"]["movespeed"]);
				$sql->bindParam(23, $champion["stats"]["armor"]);
				$sql->bindParam(24, $champion["stats"]["armorperlevel"]);
				$sql->bindParam(25, $champion["stats"]["spellblock"]);
				$sql->bindParam(26, $champion["stats"]["spellblockperlevel"]);
				$sql->bindParam(27, $champion["stats"]["attackrange"]);
				$sql->bindParam(28, $champion["stats"]["hpregen"]);
				$sql->bindParam(29, $champion["stats"]["hpregenperlevel"]);
				$sql->bindParam(30, $champion["stats"]["mpregen"]);
				$sql->bindParam(31, $champion["stats"]["mpregenperlevel"]);
				$sql->bindParam(32, $champion["stats"]["crit"]);
				$sql->bindParam(33, $champion["stats"]["critperlevel"]);
				$sql->bindParam(34, $champion["stats"]["attackdamage"]);
				$sql->bindParam(35, $champion["stats"]["attackdamageperlevel"]);
				$sql->bindParam(36, $champion["stats"]["attackspeedoffset"]);
				$sql->bindParam(37, $champion["stats"]["attackspeedperlevel"]);

				$success = $sql->execute();

				if (!$success) {
					print_r($sql->errorInfo());
				} else {
					echo "Success: " . $champion["name"];
				}
			} catch (PDOException $e) {
				echo $e->errorMessage();
			}
		}
	}
	*/

}

?>
