<?php

$serverName = "free-tier.gcp-us-central1.cockroachlabs.cloud";
$dBUsername = "xarber";
$dBPassword = "!Vuarlmnbsvdc9";
$dBName = "X-Center";

$conn = cockroachdb_connect($serverName, $dBUsername, $dBPassword, $dBName);

if (!$conn) {
    die("Connection failed: " . cockroachdb_connect_error());

}