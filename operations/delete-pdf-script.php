<?php 

$delete=$_POST['pdf-to-delete'];
//echo $delete;
unlink("uploads/$delete");
header('Location:pdf-module.php');



?>