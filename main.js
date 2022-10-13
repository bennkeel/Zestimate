

<?
function getWalkScore($lat, $lon, $address) {
 $address=urlencode($address);
 $url = "https://api.walkscore.com/score?format=json&address=$address";
 $url .= "&lat=$lat&lon=$lon&wsapikey=YOUR-API-KEY";
 $str = @file_get_contents($url);
 return $str;
}

$lat = $_GET['lat'];
$lon = $_GET['lon'];
$address = stripslashes($_GET['address']);
$json = getWalkScore($lat,$lon,$address);
echo $json;
?>