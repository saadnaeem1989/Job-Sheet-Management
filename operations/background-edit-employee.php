<?php 

$id            = $_GET['id'];
$username          = $_GET['username'];
$userphone          = $_GET['userphone'];
$useremail          = $_GET['useremail'];
//$userpassword     = $_GET['userpassword'];

//$email         = $_GET['email'];
//$mobile        = $_GET['mobile'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE employees SET username='$username',phone='$userphone',email='$useremail' WHERE id='$id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";


?>

<script>

window.location.assign("employees.php")
</script>