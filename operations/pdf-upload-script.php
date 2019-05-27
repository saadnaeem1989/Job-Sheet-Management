<?php 
$file=$_FILES["file"];
//print_r($file);
move_uploaded_file($file["tmp_name"], "uploads/" .$file["name"]);
//redirect


header("Location:pdf-module.php");



?>