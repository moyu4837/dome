<?php
$con = mysqli_connect("127.0.0.1", "root", "", "nsg");
# 查询获取表中的所有内容
// $sql = "SELECT * FROM goods";

// 查询表中的前20条数据
$page = $_REQUEST["page"] * 20;
$type = $_REQUEST["type"];

if ($type == "default") {
    $sql = "SELECT * FROM `list` ORDER by `` limit $page,20";

} else if ($type == "price") {
  // 按照价格从低到高进行排序
    $sql = "SELECT * FROM `list` ORDER BY `sale_price` ASC limit $page,20";
}

// 查询表中的数据(按照某个字段排序)
$result = mysqli_query($con, $sql);
// if (!$result) {
//     printf("Error: %s\n", mysqli_error($con));
//     exit();
// }
// 把数据中的数组转换为数组
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC), true);

?>