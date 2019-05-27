
<?php 
$id=$_POST['id'];
//echo $id;
$conn1 = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query1  = "SELECT customername FROM customers WHERE id='$id'";
$result1 = $conn1->query($query1);
if (!$result1) die ("Database acess failed: " .$conn1->error);
$row1 = $result1->fetch_array(MYSQLI_ASSOC);
$customername=$row1['customername'];


$conn2 = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query2  = "DELETE FROM locations WHERE custname='$customername'";
$result2 = $conn2->query($query2);
if (!$result2) die ("Database acess failed: " .$conn2->error);






$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query  = "DELETE FROM customers WHERE id='$id'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);

   
?>
<script>

window.location.assign("customers.php")
</script>