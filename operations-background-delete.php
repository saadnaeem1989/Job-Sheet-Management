
<?php 
$id=$_POST['id'];
echo $id;

$conn1 = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query1  = "SELECT * FROM jobsheets WHERE id='$id'";
$result1 = $conn1->query($query1);
if (!$result1) die ("Database acess failed: " .$conn1->error);
$row1 = $result1->fetch_array(MYSQLI_ASSOC);
$match=$row1['timelink'];

$query2  = "DELETE FROM jobsheettrucks WHERE jobsheettimelink='$match'";
$result2 = $conn1->query($query2);
if (!$result2) die ("Database acess failed: " .$conn1->error);


$query3  = "DELETE FROM jobsheets WHERE timelink='$match'";
$result3 = $conn1->query($query3);
if (!$result3) die ("Database acess failed: " .$conn1->error);

  
?>
<script>
window.location.assign("operations-jobsheets.php")
</script>