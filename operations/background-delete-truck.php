
<?php 
$id=$_POST['id'];
echo $id;
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query  = "DELETE FROM trucks WHERE id='$id'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);


?>
<script>

window.location.assign("trucks.php");
</script>