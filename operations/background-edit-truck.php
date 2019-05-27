<?php 

$id            = $_GET['id'];
$truck          = $_GET['truck'];


//$email         = $_GET['email'];
//$mobile        = $_GET['mobile'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE trucks SET truck='$truck' WHERE id='$id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";

?>
<script>

window.location.assign("trucks.php")
</script>