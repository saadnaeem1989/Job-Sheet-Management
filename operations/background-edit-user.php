<?php 

$id            = $_GET['id'];
$username          = $_GET['username'];
$userpassword     = $_GET['password'];
$level     = $_GET['level'];
//$email         = $_GET['email'];
//$mobile        = $_GET['mobile'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE users SET username='$username',password='$userpassword',level='$level' WHERE id='$id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";

?>
<script>

window.location.assign("addusers.php")
</script>