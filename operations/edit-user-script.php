<html lang="en">
<head>
<link rel="shortcut icon" href="../favicon.ico" />
  <title>Edit User Details</title>
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
$query  = "SELECT username, password, level FROM users where id='$id'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);
$rows = $result->num_rows;

$row = $result->fetch_array(MYSQLI_ASSOC);
?>
  
    <h1 align="center">Edit User</h1>      
   <form  action="background-edit-user.php" method="get">
   
   
    
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">User Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" value="<?php echo $row['username'];?>" name="username" required>
      </div>
    </div>
    
    
    
    
    
    
    <div class="form-group">
      <label class="control-label col-sm-2">User Password:</label>
      <div class="col-sm-10">          
        <input type="text" pattern=".{6,}" required title="Minimum 6 Characters Required" class="form-control" value="<?php echo $row['password'];?>" name="password" required>
      </div>
    </div>
    <?php $level=$row['level'];?>
    
     <div class="form-group">
      <div class="col-xs-2"></div>
    <div class="col-xs-4">
    <font color="red">Please select authorization level:<br></font>
  <input type="radio" name="level" value="Wash Crew" <?php echo ($level== 'Wash Crew') ?  "checked" : "" ;  ?>> Wash Crew<br>
<input type="radio" name="level" value="Manager" <?php echo ($level== 'Manager') ?  "checked" : "" ;  ?>> Manager<br>
  </div>
   <div class="col-xs-4"></div>
    </div>
    
 
    
    
    
    
    
   


 


 

 




    
   <!-- <div class="form-group">
      <label class="control-label col-sm-2" for="email">Mobile #:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" value="<?php// echo $row['mobile'];?>" name="mobile">
      </div>
    </div>
    
     -->
    
    
    
  
      
      
  <div class="row">
 
  <div class="col-sm-12">
  
  <?php
  echo " <input type='hidden' name='id' value=".$_POST['id'].">";
  echo '<input type="hidden" name="submitted" value="yes">';?>
  <br><br><br> <button type="submit" value="update" class="btn btn-block btn-success">
 <span class="glyphicon glyphicon-list-alt"></span> Update Employee Record
</button>
 </div>
 
 </div>
   
      
        </form>

  
  </div>
  
</div>
      

 
 
 
 
  </form>
   
   
  </div>


</body>
</html>
