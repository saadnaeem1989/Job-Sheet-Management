<?php   
require_once 'header.php';
if (!$loggedin){
header("Location:index.php");
exit();
}?>
<!DOCTYPE html>
<head>

  <meta charset="UTF-8">

<link rel="shortcut icon" href="favicon.ico" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    

    <title>Admin</title>

    <!-- Bootstrap core CSS -->
    <link href="../../css/editor.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="offcanvas.css" rel="stylesheet">
  </head>

  <body class="bg-light">
  <?php include 'jobsheetheader.php';?>

    <?php include 'logout-button.php';?>

    

    

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="../../js/vendor/popper.min.js"></script>
    <script src="../../js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/holderjs@2.9.4/holder.js"></script>
    <script src="offcanvas.js"></script>
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">

<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="none" style="display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;"><defs><style type="text/css"></style></defs><text x="0" y="2" style="font-weight:bold;font-size:2pt;font-family:Arial, Helvetica, Open Sans, sans-serif">32x32</text></svg><div class="btn-group" role="group" aria-label="Basic example" style=""> </div><h1 style=""><div class="jumbotron" style="border: 1px dashed rgb(66, 133, 244);">
<h1 class="display-3"></h1>		
<div class="row">

 <div class="col-sm-3" style="background-color:lavender;"><a href="jobsheets.php" class="btn btn-lg btn-primary "><span class="glyphicon glyphicon-credit-card"></span>&nbsp;&nbsp; Job Sheets&nbsp;&nbsp;</a></div>
  
   
   

  </div>    

 
 
  </div></p>
  
  

</html>