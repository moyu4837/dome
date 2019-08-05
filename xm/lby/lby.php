<?php
$con = mysqli_connect("127.0.0.1", "root", "", "nsg");
$data = file_get_contents("lby.json");
$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
    $title = $arr[$i]["title"];
    $src = $arr[$i]["src"];
    $sale_price = $arr[$i]["sale_price"];
    $market_price = $arr[$i]["market_price"];
    $names = $arr[$i]["names"];
    $sql = "INSERT INTO `list`(`title`,`src`,`sale_price`,`market_price`,`names`) VALUES('$title','$src','$sale_price','$market_price','$names')";
    echo $sql;
    mysqli_query($con, $sql);
}

?>