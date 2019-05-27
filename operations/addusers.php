<!DOCTYPE html>
<html lang="en">
<head>
<link rel="shortcut icon" href="../favicon.ico" />
<script type="text/javascript">

function myFunction() {
	  var txt;
	  if (confirm("Are You Sure You Want To Delete ?")) {
	    return true;
	  } else {
	    return false;
	  }
	 
	}

</script>
  <title>Add Users</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
 <?php include 'header.php';?>
<?php 
if(isset($_POST['username']) && isset($_POST['userpassword'])){
    $username=$_POST['username'];
    $userpassword=$_POST['userpassword'];
    $level=$_POST['level'];
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    $query = "INSERT INTO users (username,password,level) VALUES" . "('$username','$userpassword','$level')";
    $result= $conn->query($query);
    if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";
    //if($result) header("location:employees.php");
   // echo $username;
  //  echo $userpassword;
}else {?>
   
<?php }



?>


<div class="container">
  <h2>Add Users </h2>
  <p>Enter the user name and password that is being assigned to this user & press Add User button </p>
   <p><font color="red">Please make sure atleast one manager is in the list at all times otherwise you won't be able to log in</font></p>
  <form action="addusers.php" method="post">
    <div class="form-group">
      <label for="usr">User Name:</label>
      <input type="text"  name="username" class="form-control" id="username" required>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="text" pattern=".{6,}"   required title="Minimum 6 Characters Required" name="userpassword" class="form-control" id="userpassword">
    </div>
    <div class="col-xs-4"></div>
    <div class="col-xs-4">
  <input type="radio" name="level" value="Wash Crew"> Wash Crew<br>
<input type="radio" name="level" value="Manager"> Manager<br>
  </div>
   <div class="col-xs-4"></div>
    <!-- <a href="employees.php" class="btn btn-block btn-success"><span class="glyphicon glyphicon-user"></span> Add User</a> -->
    <button type="submit" class="btn btn-block btn-success">
 <span class="glyphicon glyphicon-user"></span> Add User
</button>
  </form>
</div>

<div class="container">
  
  <?php 
 /*
  * Debugging code to check whether the connection is working or not
  *  if($conn){
      echo "connection is now opened <br>";
      echo "------------------------ <br>";
      
  }*/
  $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
  $query  = "SELECT * FROM users";
  $result = $conn->query($query);
  if (!$result) die ("Database acess failed: " .$conn->error);
  $rows = $result->num_rows;
  for($i = 0 ;  $i < $rows ;  ++$i){
      
        $result->data_seek($i);
        $row = $result->fetch_array(MYSQLI_ASSOC);
     /*  
      * Debugging Code
      *  echo  'cnic:' . $row['cnic'] . '<br>';
        echo  'First Name:' . $row['firstname'] . '<br>';
        echo  'Last Name:' . $row['lastname'] . '<br>';
        echo  'DOB:' . $row['dob'] . '<br>';
        echo  'Address:' . $row['address'] . '<br>';
        echo  'City:' . $row['city'] . '<br>';
        echo  'Degrere Program:' . $row['degreeprogram'] . '<br>';
        echo  'Gender:' . $row['gender'] . '<br>';
        echo  'Email:' . $row['email'] . '<br>';
        echo  'Mobile:' . $row['mobile'] . '<br>';
        echo  '-------------------------------'; 
        
        */
  }
  
  
  
  ?>
  
  

 
 
 
 
 
 
  <table class="table">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Password</th>
         <th>Level</th>
      </tr>
    </thead>
    <tbody>
    <?php 
    for($i = 0 ;  $i < $rows ;  ++$i){
        $result->data_seek($i);
        $row = $result->fetch_array(MYSQLI_ASSOC);
      //  if($i%2==0){
        echo " 
        
        <tr class='success'>
        
        <td>".$row['username']."</td>
        <td>".$row['password']."</td>
        <td>".$row['level']."</td>
        <td>
        <form action='edit-user-script.php' method='post'>
        <input type='hidden' name='edit' value='yes'>
        <input type='hidden' name='id' value=".$row['id'].">
        <td><input type='submit' value='Edit'></td> 
        </form>
        </td>
    
 <td>
        <form action='background-delete-user.php' method='post' onsubmit='return myFunction(this)'>
        <input type='hidden' name='delete' value='yes'>
        <input type='hidden' name='id' value=".$row['id'].">
        <td><input type='submit' value='Delete'></td> 
        </form>
        </td>
       
        </tr>
            
            ";
      //  }
     //   echo   $row['id'];
     
    }
    ?>
      
    </tbody>
  </table>
  <div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"><a href="../operations-interface.php" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-fast-backward"></span> Back to Operations Menu</a></div>
  <div class="col-sm-4"></div>
</div>
</div>










</body>
</html>
