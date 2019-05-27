<html>
<head>
<link rel="shortcut icon" href="favicon.ico" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    
    
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="http://wenzhixin.net.cn/p/bootstrap-table/src/bootstrap-table.css" rel="stylesheet" type="text/css" />

    <link href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.common.min.css" rel="stylesheet" />
    <link href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.bootstrap.min.css" rel="stylesheet" />
    <link href="http://protostrap.com/Assets/gv/css/gv.bootstrap-form.css" rel="stylesheet" type="text/css" />

<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    
    
    
<style>


.content {
    max-width: 500px;
    margin: auto;
    background: white;
    padding: 10px;
}



</style>
 <?php 
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    $id=$_POST['id'];
    $query = "SELECT week, date, purchaseorderno, requirements, signedby, prejobcomments, timeonsite, timeoffsite, breakstart, breakfinish, driverhours,";
    $query.=" totalmanhours, customername, customerlocation,";
    $query.=" totalunitswashed, truckno, odometer, hondahours, ponyhours, teamleaderonsite, manageronsite, staffonsite, otherstaff, driver, timelink";
    $query.=" FROM jobsheets WHERE id ='$id'";
    $result= $conn->query($query);
    if(!$result) echo "Select Failed::: $query<br>".$conn->error."<br><br>";
    $row = $result->fetch_array(MYSQLI_ASSOC);
    ?>
</head>

<body>
<?php include 'operations/header.php';?>
<div class="row" id="getthere">
  <div class="col-sm-4"><br><br><br><b><?php echo $row['week']."</><br> <b>Dated:&nbsp;&nbsp;</b>".$row['date']."<br> <b>Purchase Order No.&nbsp;&nbsp;</b>".$row['purchaseorderno'];?></div>
  <div class="col-sm-4"><h3>Job Sheet Data</h3></div>

  <div class="col-sm-4"><br><br><br><font color='green'><?php echo $row['requirements']?></font><br><b>Authorized By:&nbsp;&nbsp;</b><?php echo $row['signedby']."<br> <b>Notes:&nbsp;&nbsp;</b>".$row['prejobcomments'];?></div>
</div>

<div class="row">
  <div class="col-sm-4" ><br><h3>Timing</h3><br><font style="color: red;">Time On Site:&nbsp;&nbsp;</font><?php echo $row['timeonsite']."<br><font style='color: red;'>Time Off Site:&nbsp;&nbsp;</font>".$row['timeoffsite']."<br> <font style='color: red;'>Break Time:&nbsp;&nbsp;</font>".$row['breakstart']."&nbsp;to&nbsp;".$row['breakfinish']."<br> <b><font style='color: red;'>Driver Hours:</font>&nbsp;&nbsp;</b>".$row['driverhours']."<br> <b><font style='color: red;'>Total Man Hours:</font>&nbsp;&nbsp;</b>".$row['totalmanhours'];?></div>
  <div class="col-sm-4">
  <br><h3>Staff Details</h3><br>
  <b><font style="color: red;">Team Leader On Site:&nbsp;</font></b><?php echo $row['teamleaderonsite']."<br> <b><font style='color: red;'>Manager On Site:&nbsp;</font></b>".$row['manageronsite']."<br>
 <b><font style='color: red;'>Staff On Site:&nbsp;</font></b>"?>
 
 <?php
 
echo $row['staffonsite'];
 

 ?><br> <b><font style='color: red;'>Other Staff On Site:&nbsp;</font></b><?php echo $row['otherstaff']."<br> <b><font style='color: red;'>Driver On Site:&nbsp;</font></b>". $row['driver'];?>
  
  </div>
  
  <div class="col-sm-4"><br><h3>Job Details</h3><br><b><font style='color: red;'>Name:&nbsp;&nbsp;</font></b><?php echo $row['customername']."<br> <b><font style='color: red;'>Location:</font>&nbsp;&nbsp;</b>".$row['customerlocation']."<br> <b><font style='color: red;'>Total Units Washed:</font>&nbsp;&nbsp;</b>".$row['totalunitswashed']."<br> <b><font style='color: red;'>Wash Plant No:</font>&nbsp;&nbsp;</b>".$row['truckno']."<br> <b><font style='color: red;'>Odometer:</font>&nbsp;&nbsp;</b>".$row['odometer']."<br> <b><font style='color: red;'>Honda Hours:</font>&nbsp;&nbsp;</b>".$row['hondahours']."<br> <b><font style='color: red;'>Pony Hours:</font>&nbsp;&nbsp;</b>".$row['ponyhours'];?></div>
</div>






<?php 
$match=$row['timelink'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query2="SELECT truckconfiguration, pmfn, pmreg, t1fn, t1reg, t2fn, t2reg, commentseachrow FROM jobsheettrucks WHERE jobsheettimelink='$match'";
$result2= $conn->query($query2);
if(!$result2) echo "Select Failed::: $query2<br>".$conn->error."<br><br>";

$rows=$result2->num_rows;
?>



<div  style="display: block;">
			   
		 <div class="row clearfix">
    	<div class="col-md-12 table-responsive">
    	<h2 class='text-center'>Trucks Washed</h2>
			<table style="background-color: #ddfffb;"  class="table table-bordered" id="">
				<thead>
					<tr >
						
						<th width="5%" class="text-center ">
							No.
						</th>
						
						<th class="text-center">
							Truck Configuration
						</th>
						<th class="text-center">
							Prime Mover Fleet No.
						</th>
						<th class="text-center">
							Prime Mover Rego
						</th>
						<th class="text-center">
							Trailer 1 Fleet No.
						</th>
						<th class="text-center">
							Trailer 1 Rego
						</th>
						<th class="text-center">
							Trailer 2 Fleet No.
						</th>
						<th class="text-center">
							Trailer 2 Rego
						</th>
						<th class="text-center">
							Extra/Comment(s)
						</th>
    					
        				<th class="text-center" style="border-top: 1px solid #ffffff; border-right: 1px solid #ffffff;">
						</th>
					</tr>
				</thead>
				<tbody>
    				<?php 
    			
    			
    				
    				
    				
    				for ($i=0; $i < $rows ; ++$i) { 
  				            $result2->data_seek($i);
  				            $row2 = $result2->fetch_array(MYSQLI_ASSOC);
    			static 	 $j=1;      
    				     
    				echo  "<tr>";
						
						     echo   "<td>";
						     echo $j;
						     echo "</td>";
						     
					echo   "<td>";
						     echo $row2['truckconfiguration'];
						     echo "</td>";
						     	
					echo   "<td>";
							
						     echo $row2["pmfn"];
						     echo "</td>";
						     
    				echo   "<td>";
    				
						     echo $row2["pmreg"];
						     echo "</td>";

				    echo   "<td>";
				   
						     echo $row2["t1fn"];
						     echo "</td>";

				    echo   "<td>";
				    
						     echo $row2["t1reg"];
						     echo "</td>";

				    echo   "<td>";
				   
						     echo $row2["t2fn"];
						     echo "</td>";

				    echo   "<td>";
				   
						     echo $row2["t2reg"];
						     echo "</td>";

				    echo   "<td>";
				   
						     echo $row2["commentseachrow"];
						     echo "</td>";
						     
				    echo  "</tr>";
				    $j++;
				     
}

    				



    				
    			

    				?>
    					
                       
					
				</tbody>
			</table>
			<form action="operations-jobsheets.php" method="post">

				
  <div> 
  
  <button type="submit" class='btn btn-large btn-block btn-success' type="submit">Back to Job Sheet Menu</button></div>
  </form> 
  
 
		</div>
	</div></div>

<?php 
//foreach ($row as $data){
  
  //  print_r($data);
    
//}

?>


<!-- Clean this area -->

 
</body>



</html>