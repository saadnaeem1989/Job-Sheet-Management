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
  <title>Locations</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
 <?php include 'header.php';?>
<?php
//Just Adding Customer











 $custname=$_POST['customername'];

if(isset($_POST['location'])){
    $location=$_POST['location'];
   
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    
    $query = "INSERT INTO locations (location,custname) VALUES" . "('$location','$custname')";
    $result= $conn->query($query);
    if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";
    //if($result) header("location:employees.php");
   // echo $username;
  //  echo $userpassword;
  
}else {?>
   
<?php }



?>


<div class="container">
  <h2>Add Locations</h2>
  <p>Enter location & press Add Location button </p>
  <form action="locations.php" method="post">
    <div class="form-group">
      <label for="usr">Location:</label>
        <input type='hidden' name='customername' value="<?php echo $custname?>">
      <input type="text" name="location" class="form-control" id="location" required>
    </div>
   
    
    <!-- <a href="#" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-globe"></span> Add Location</a> -->
    <button type="submit" class="btn btn-lg btn-primary">
 <span class="glyphicon glyphicon-globe"></span> Add Location
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
  $custname2=$_POST['customername'];
  $query  = "SELECT * FROM locations where custname='$custname' ORDER BY custname ASC";
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
        <th><?php echo $custname;?></th>
        
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
        
        <td>".$row['location']."</td>
      
       
    
 <td>
        <form action='background-delete-location.php' method='post' onsubmit='return myFunction(this)'>
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
  <div class="col-sm-4"><a href="customers.php" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-fast-backward"></span> Back</a></div>
  <div class="col-sm-4"></div>
</div>
</div>










</body>
</html>
