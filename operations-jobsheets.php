<?php   
require_once 'header.php';
if (!$loggedin){
header("Location:index.php");
exit();
}?>
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="shortcut icon" href="favicon.ico" />
  <title>Jobsheets</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
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

</head>
<body>
<?php include 'operations/header.php';?>
<?php 
if (isset($_POST['from']) && isset($_POST['to'])){
echo $_POST['from'];
echo "<br>";
echo $_POST['to'];
echo "<br>";
echo(strtotime($_POST['from']));
$timestamp=strtotime($_POST['from']);
echo "<br>";
echo date('Y:m:d ', $timestamp); 
}
if(isset($_POST['customername']) ){
    $customername=$_POST['customername'];
    
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    $query = "SELECT * FROM jobsheets";
    $result= $conn->query($query);
    if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";
    //if($result) header("location:employees.php");
   // echo $username;
  //  echo $userpassword;
}else {?>
   
<?php }



?>


<div class="container">
  <h2>Job Sheets</h2>
  <p>Select the range & press Display Job Sheets </p>
  <form action="operations-sorted-jobsheet-view.php" method="post">
    <div class="form-group">
      <label for="start">Start date:</label>

<input type="date" id="start" name="from"
        
       min="2018-01-01" max="2025-12-31">



 <label for="start">&nbsp;&nbsp;&nbsp;End date:</label>

<input type="date" id="start" name="to"
       
       min="2018-01-01" max="2025-12-31">
    </div>
    
   
    
    <!-- <a href="#" class="btn btn-success"><span class="glyphicon glyphicon-list"></span> Default text here</a> -->
    <button type="submit" class="btn btn-block btn-success">
 <span class="glyphicon glyphicon-list"></span> Display Ranged Job Sheets
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
  /*
  $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
  $query  = "SELECT * FROM customers";
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
  //}
  
  
  
  ?>
  
  

 
 
 
 
 
 
  <table class="table">
    <thead>
      <tr>
        <th>Customer Name</th>
         <th>Customer Location</th>
          <th>Created</th>
      </tr>
    </thead>
    <tbody>
    <?php 
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    $query = "SELECT * FROM jobsheets ORDER BY timestamp DESC LIMIT 10";
    $result= $conn->query($query);
    if(!$result) echo "Insert Failed::: $query<br>".$conn->error."<br><br>";
    $rows = $result->num_rows;
    for($i = 0 ;  $i < $rows ;  ++$i){
        $result->data_seek($i);
        $row = $result->fetch_array(MYSQLI_ASSOC);
        if($row['exported']=='1'){
            echo "
      
        <tr class='success'>
      
        <td>".$row['customername']."</td>
        <td>".$row['customerlocation']."</td>
        <td>".$row['date']."</td>
      
        <td>
        <form action='operations-jobsheet-view.php' method='post'>
        <input type='hidden' name='edit' value='yes'>
        <input type='hidden' name='id' value=".$row['id'].">
        <td><input type='submit' value='View'></td>
    
        </form>
        </td>
  <td>
        <form action='operations-jobsheet-edit.php' method='post'>
        
        <td><a href=\"#\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-lock\"></span></a></td>
        
        </form>
        </td>
<td>
        <form action='operationsaddtrucks/test.php' method='post'>
        
        <td><a href=\"#\" class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-lock\"></span>Locked</a></td>
        </form>
        </td>
  <td>
        <form action='operations-background-delete.php' method='post' onsubmit='return myFunction(this)'>
        
        <td><a href=\"#\" class=\"btn btn-danger\">&nbsp;&nbsp;&nbsp;<span class=\"glyphicon glyphicon-lock\"></span>&nbsp;&nbsp;</a></td>
           
        </form>
        </td>
           
           
           
           
        </tr>
           
            ";
        }else {
       
      //  if($i%2==0){
        echo " 
        
        <tr class='success'>
        
        <td>".$row['customername']."</td>
        <td>".$row['customerlocation']."</td>
        <td>".$row['date']."</td>

        <td>
        <form action='operations-jobsheet-view.php' method='post'>
        <input type='hidden' name='edit' value='yes'>
        <input type='hidden' name='id' value=".$row['id'].">
        <td><input type='submit' value='View'></td> 

        </form>
        </td>
  <td>
        <form action='operations-jobsheet-edit.php' method='post'>
        <input type='hidden' name='edit' value='yes'>
        <input type='hidden' name='id' value=".$row['id'].">
        <td><input type='submit' value='Edit'></td> 

        </form>
        </td>
<td>
        <form action='operationsaddtrucks/test.php' method='post'>
        <input type='hidden' name='jobsheetid' value='yes'>
        <input type='hidden' name='jobsheetid' value=".$row['id'].">
        <input type='hidden' name='totalunitswashed' value=".$row['totalunitswashed'].">
        <td><input type='submit' value='Add Trucks'></td> 
        </form>
        </td>
  <td>
        <form action='operations-background-delete.php' method='post' onsubmit='return myFunction(this)'>
        <input type='hidden' name='edit' value='yes'>
        <input type='hidden' name='id' value=".$row['id'].">
        <td><input type='submit' value='Delete'></td> 

        </form>
        </td>

    
 
       
        </tr>
            
            ";
        }//else closing
      //  }
     //   echo   $row['id'];
     
    }
    ?>
      
    </tbody>
  </table>
  <div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"><a href="operations-interface.php" class="btn btn-lg btn-primary"><span class="glyphicon glyphicon-fast-backward"></span> Back to Operations Menu</a></div>
  <div class="col-sm-4"></div>
</div>
</div>










</body>
</html>
