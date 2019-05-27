<!DOCTYPE html>
<html lang="en">
<head>
<link rel="shortcut icon" href="../favicon.ico" />
   <script>
function myFunction() {
  var txt;
  if (confirm("Are You Sure You Want To Delete ?")) {
    return true;
  } else {
    return false;
  }
 
}

</script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<style type="text/css">

.files input {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear;
    padding: 120px 0px 85px 35%;
    text-align: center !important;
    margin: 0;
    width: 100% !important;
}
.files input:focus{     outline: 2px dashed #92b0b3;  outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear; border:1px solid #92b0b3;
 }
.files{ position:relative}
.files:after {  pointer-events: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
    right: 0;
    height: 56px;
    content: "";
    background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
    display: block;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
}
.color input{ background-color:#f1f1f1;}
.files:before {
    position: absolute;
    bottom: 10px;
    left: 0;  pointer-events: none;
    width: 100%;
    right: 0;
    height: 57px;
    content: " or drag it here. ";
    display: block;
    margin: 0 auto;
    color: #2ea591;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
}



</style>
<title>PDF (Melbourne)</title>
  </head>
  <body>

 <?php include 'header.php';?>








<!-- 



<form method="post" enctype="multipart/form-data" action="pdf-upload-script.php">
<input type="file" name="file">
<input type="submit" value="upload">


</form>


 -->


<!------ Include the above in your HEAD tag ---------->
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"></div>
  <div class="col-sm-4"></div>
</div><div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"></div>
  <div class="col-sm-4"></div>
</div>
<br>
<div class="container">
	<form method="post" enctype="multipart/form-data" action="pdf-upload-script.php">
    <fieldset>
        <div class="form-horizontal">
            <div class="form-group">
                <div class="row">
                <label class="control-label col-md-2 text-right" for="filename"><span></span></label>
                <div class="col-md-12">
                    <div class="input-group">
                        <input type="hidden" id="filename" name="filename" value="">
                        <input type="file" id="uploadedFile" name="file" class="form-control form-control-sm" >
                        <div class="input-group-btn">
                            <input type="submit" value="Upload" class="rounded-0 btn btn-primary">
                        </div>
                    </div>
                </div>
                </div>
            </div>                        
        </div>
    </fieldset>    
</form>
</div>






<br>


<div class="row">
  <div class="col-sm-3"></div>
  <div class="col-sm-9">
   <table>
  
  <?php 
$files=scandir("uploads");

for($a=2;$a<count($files);$a++){
    //displaying links to download
    ?>
    <p>
 	 <form method="post" action="delete-pdf-script.php" onsubmit='return myFunction(this)'>
 	
 	 <tr>
 	 <td>
 	<a download="<?php echo $files[$a]?>" href="uploads/<?php echo $files[$a]?>"><?php echo $files[$a]?></a>    </td>
 	<td>
 	<a href="uploads/<?php echo $files[$a]?>" class="btn btn-xs btn-success"><span class="glyphicon glyphicon-cloud-download"></span>View/Download  </a>
 	</td>
     <td><button type="submit" name="pdf-to-delete" value="<?php echo $files[$a]?>" class="btn btn-xs btn-danger">
 <span class="glyphicon glyphicon-trash"></span>Delete
</button></td>

</tr>

</form>
    
    
    </p>
    <?php 
}
?>
 </table>
</div>

</div>
 <br><br>
 <div class="row">

  <div class="col-sm-4"></div>
  <div class="col-sm-6"><a href="../operations-interface.php" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-fast-backward"></span> Back to Operations Menu</a></div>
  <div class="col-sm-4"></div>
</div>




</body>
</html>