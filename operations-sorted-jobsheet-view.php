<?php 
//echo $_POST['from'];
$from=$_POST['from'];
//echo "<br>";
//echo $_POST['to'];
$to=$_POST['to'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Sorted Jobsheets</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
<?php include 'operations/header.php';?>


<div class="container">
  <h2>Job Sheets (<?php echo date( "d-F-Y", strtotime($from))."&nbsp;to&nbsp;".date( "d-F-Y", strtotime($to)) ?>)</h2>
  
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
    $query = "select * from jobsheets where timestamp between '$from' and '$to 23:59:59'";
    
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
 
  <div class="col-sm-12"><a href="operations-jobsheets.php" class="btn btn-block btn-success"><span class="glyphicon glyphicon-list"></span> Back to Job Sheets</a></div>

</div>
</div>










</body>
</html>
