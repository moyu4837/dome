<?php
$con = mysqli_connect("127.0.0.1", "root", "", "test");
$data = file_get_contents("lby1.json");
$arr = json_decode($data, true);
for ($i = 0; $i < count($arr); $i++) {
    $titles = $arr[$i]["titles"];
    $srcs = $arr[$i]["srcs"];
    $goods_price = $arr[$i]["goods_price"];
    $sql = "INSERT INTO `list`(`titles`,`srcs`,`goods_price`) VALUES('$titles','$srcs','$goods_price')";
    echo $sql;
    mysqli_query($con, $sql);
}

?>