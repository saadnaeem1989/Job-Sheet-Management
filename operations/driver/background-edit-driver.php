<?php 

$id            = $_GET['id'];
$drivername          = $_GET['drivername'];
$licensenumber          = $_GET['licensenumber'];
$licensetype          = $_GET['licensetype'];
//$userpassword     = $_GET['userpassword'];

//$email         = $_GET['email'];
//$mobile        = $_GET['mobile'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE drivers SET drivername='$drivername', licensenumber='$licensenumber', licensetype='$licensetype', WHERE id='$id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";


?>

<script>

window.location.assign("drivers.php")
</script>