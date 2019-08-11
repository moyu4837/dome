<?php
$con = mysqli_connect("127.0.0.1", "root", "", "nsg");
$sql = "SELECT car.*,list.title,list.sale_price,list.src FROM car , list WHERE car.goodid = list.gid";
$result = mysqli_query($con, $sql);
// if (!$result) {
//     printf("Error: %s\n", mysqli_error($con));
//     exit();
// }
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>