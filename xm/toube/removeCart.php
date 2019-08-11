<?php
$con = mysqli_connect("127.0.0.1", "root", "", "nsg");
$goodid = $_REQUEST["goodid"];
$sql = "DELETE FROM car  WHERE goodid='$goodid'";
mysqli_query($con, $sql);
?>