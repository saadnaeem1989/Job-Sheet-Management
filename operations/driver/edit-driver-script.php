<html lang="en">
<head>
<link rel="shortcut icon" href="../../favicon.ico" />
  <title>Edit Manager Details</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <style>    
 .footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: black;
   color: orange;
   text-align: center;
}
  
  </style>

  </head>
<body>






<div class="container">
<?php $id=$_POST['id'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query  = "SELECT * FROM drivers where id='$id'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);
$rows = $result->num_rows;

$row = $result->fetch_array(MYSQLI_ASSOC);
?>
  
    <h1 align="center">Edit Record</h1>      
   <form  action="background-edit-driver.php" method="get">
   
   
    
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Driver Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" value="<?php echo $row['drivername'];?>" name="drivername" required>
      </div>
    </div>
    
      <div class="form-group">
      <label class="control-label col-sm-2" for="email">License Number:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" value="<?php echo $row['licensenumber'];?>" name="licensenumber" required>
      </div>
    </div>
    
      <div class="form-group">
      <label class="control-label col-sm-2" for="email">License Type:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" value="<?php echo $row['licensetype'];?>" name="licensetype" required>
      </div>
    </div>
    
    
    

      
      
  <div class="row">
  <div class="col-sm-5"></div>
  <div class="col-sm-4">
  
  <?php
  echo " <input type='hidden' name='id' value=".$_POST['id'].">";
  echo '<input type="hidden" name="submitted" value="yes">';?>
   <button type="submit" value="update" class="btn btn-primary btn-success">
 <span class="glyphicon glyphicon-list-alt"></span> Update Driver Record
</button>
 </div>
 <div class="col-sm-4"></div>
 </div>
   
        <td><?php// echo $_POST['id']?></td> 
        </form>
  
  
  </div>
  
</div>
      

 
 
 
 
  </form>
   
   
  </div>


</body>
</html>
