<?php   
require_once 'header.php';
if (!$loggedin){
header("Location:index.php");
exit();
}?>
<!DOCTYPE html>
<head>
<link rel="shortcut icon" href="favicon.ico" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Operation Manager (Melbourne)</title>

    <!-- Bootstrap core CSS -->
    <link href="../../css/editor.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="offcanvas.css" rel="stylesheet">
    <style type="text/css">
   
    </style>
  </head>

  <body class="bg-light">
  
	    <?php include 'operations/header.php';?>
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
	  




<div class="row">
    <div class="col-sm-3" style="background-color:lavender;"><a href="operations/employees.php" class="btn btn-lg btn-success "><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Wash Crew&nbsp;</a></div>
     <div class="col-sm-3" style="background-color:lavender;"><a href="operations/driver/drivers.php" class="btn btn-lg btn-success "><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Driver&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
      <div class="col-sm-3" style="background-color:lavender;"><a href="operations/teamleader/teamleaders.php" class="btn btn-lg btn-success "><span class="glyphicon glyphicon-user"></span> Team Leader</a></div>
   <div class="col-sm-3" style="background-color:lavender;"><a href="operations/manager/managers.php" class="btn btn-lg btn-success" ><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Manager&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
  
 
 
 

  </div>
<br>
<div class="row">

<div class="col-sm-3" style="background-color:lavender;"><a href="operations/customers.php" class="btn btn-lg btn-warning "><span class="glyphicon glyphicon-euro"></span>&nbsp;&nbsp; Customers&nbsp;&nbsp;&nbsp;</a></div>

 <div class="col-sm-3" style="background-color:lavender;"><a href="operations-jobsheets.php" class="btn btn-lg btn-primary "><span class="glyphicon glyphicon-credit-card"></span>&nbsp;&nbsp; Job Sheets&nbsp;&nbsp;</a></div>

    <div class="col-sm-3" style="background-color:lavender;"><a href="operations/trucks.php" class="btn btn-lg btn-info "><span class="glyphicon glyphicon-plus-sign"></span> Wash Plant  #</a></div>


    <div class="col-sm-3" style="background-color:lavender;"><a href="operations/pdf-module.php" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-edit"></span>&nbsp;&nbsp; &nbsp;&nbsp;PDF Files&nbsp;&nbsp;</a></div>
   
   

  </div>  
  <br>
<div class="row">
  <div class="col-sm-3" style="background-color:lavender;"><a href="operations/addusers.php" class="btn btn-lg btn-info "><span class="glyphicon glyphicon-list-alt"></span>&nbsp;&nbsp;&nbsp;&nbsp;Add Users&nbsp;&nbsp;&nbsp;</a></div>
 


</div>  
<br>
 

 
  
  
 
</html>