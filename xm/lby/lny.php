<?php
$con = mysqli_connect("127.0.0.1", "root", "", "nsg");
$data = file_get_contents("lby.json");
$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
    $src = $arr[$i]["src"];
    $title = $arr[$i]["title"];
    $sale_price = $arr[$i]["sale_price"];
    $market_price = $arr[$i]["market_price"];
    $sql = "INSERT INTO `list`(`title`,`src`,`sale_price`,`market_price`) VALUES('$title','$src','$sale_price','$market_price')";
    mysqli_query($con, $sql);
}

?>