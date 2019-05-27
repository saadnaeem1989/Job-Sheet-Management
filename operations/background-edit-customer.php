<?php 

$id            = $_GET['id'];
$customername          = $_GET['customername'];
$contactname          = $_GET['contactname'];
$contactphone          = $_GET['contactphone'];


//$email         = $_GET['email'];
//$mobile        = $_GET['mobile'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "UPDATE customers SET customername='$customername', contactname='$contactname', contactphone='$contactphone' WHERE id='$id'";
$result= $conn->query($query);
if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";

?>
<script>
window.location.assign("customers.php");
</script>