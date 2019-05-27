<?php 
$unlock_id=$_GET['unlock'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE jobsheets SET exported='0' WHERE id='$unlock_id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";
header('location:jobsheets.php')





?>