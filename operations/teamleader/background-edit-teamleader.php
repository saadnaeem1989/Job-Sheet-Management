<?php 

$id            = $_GET['id'];
$teamleadername          = $_GET['teamleadername'];
//$userpassword     = $_GET['userpassword'];

//$email         = $_GET['email'];
//$mobile        = $_GET['mobile'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE teamleaders SET teamleadername='$teamleadername' WHERE id='$id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";


?>

<script>

window.location.assign("teamleaders.php")
</script>