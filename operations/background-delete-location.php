
<?php 
$id=$_POST['id'];
//echo $id;
//echo $_POST['customername'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query  = "DELETE FROM locations WHERE id='$id'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);


?>

<!-- <input type="hidden" name="customername" value="<?php// echo $_POST['customername'];?>"> -->

<script>

window.location.assign("customers.php")
</script>