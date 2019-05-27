

<!DOCTYPE html>
<html lang="en">
<head>
<link rel="shortcut icon" href="favicon.ico" />
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

 <!--   
   
 
 
    -->
    <link href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   
    	 <link href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.common.min.css" rel="stylesheet" />
<!--   -->   
<link href="http://cdn.kendostatic.com/2014.1.318/styles/kendo.bootstrap.min.css" rel="stylesheet" />
    <link href="http://wenzhixin.net.cn/p/bootstrap-table/src/bootstrap-table.css" rel="stylesheet" type="text/css" />

    <link href="http://protostrap.com/Assets/gv/css/gv.bootstrap-form.css" rel="stylesheet" type="text/css" />

<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){

	 // Delete 
	 $('.delete').click(function(){
	   var el = this;
	   var id = this.id;
	   var splitid = id.split("_");

	   // Delete id
	   var deleteid = splitid[1]; //providing cleaned id "del_234"
	 
	   // AJAX Request
	   $.ajax({
	     url: 'remove.php',
	     type: 'POST',
	     data: { id:deleteid },//data: The data to send to the server when performing the Ajax request use id in $_POST['id'] to access
	     success: function(response){//success: A function to be called if the request succeeds

	       if(response == 1){ //echo 1 is the only output in remove.php
		 // Remove row from HTML Table
	    	   $(this).remove();
	    	   window.location.hash = '#trucks';
	    	   location.reload('true');
			    
	      }else{
		 alert('Invalid ID.');
	      }

	    }
	   });

	 });

	 

	});



<!--

//-->
</script>
<!-- <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>





 -->
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <!-- Fav and touch icons -->

 <style>

body {
    background: #555;
}

.content {
    max-width: 500px;
    margin: auto;
    background: white;
    padding: 10px;
}

.table-sortable tbody tr {
    cursor: move;
}
.center { text-align: center; }

.btn btn-default { padding: 7px 20px 8px 20px; }


#dropdown{
position:relative;
top:15%;
left:5%;
height:100%;
width:90%;
}
#pdflink{position:relative;top:8px; left:35%;}



 form{
        margin: 20px 0;
    }
    form input, button{
        padding: 5px;
    }
    table{
        width: 100%;
        margin-bottom: 20px;
		border-collapse: collapse;
    }
    table, th, td{
        border: 1px solid #cdcdcd;
    }
    table th, table td{
        padding: 10px;
        text-align: left;
    }
</style>   
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

  
</script>


<!-- <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style type="text/css">
  
   -->
  
  
  </style>

  
  
  <?php 
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    $id=$_POST['id'];
    $query = "SELECT id, week, date, purchaseorderno, signedby, prejobcomments, timeonsite, breakstart, breakfinish, driverhours,";
    $query.=" totalmanhours, customername, customerlocation,";
    $query.=" totalunitswashed, truckno, odometer, hondahours, ponyhours, teamleaderonsite, manageronsite, staffonsite, otherstaff, driver, timelink";
    $query.=" FROM jobsheets WHERE id ='$id'";
    $result= $conn->query($query);
    if(!$result) echo "Select Failed::: $query<br>".$conn->error."<br><br>";
    $row = $result->fetch_array(MYSQLI_ASSOC);
    ?>



</head>

<body>
    <?php include 'frontendheader.php';?>
    <div class="container-fluid">
   
        <div class="row">

            <form action="background-user-update-script.php" method="post"  class="form-horizontal" role="form" data-parsley-validate novalidate>
                <div class="container-fluid shadow">
                    <div class="row">
                     
                         
                        
                                    
 <div class="row" style="display: block;">
 	<div class="col-md-12">
 		<div class="form-group brdbot" style="display: block;">
			<img src="thor-mobile-logo.png" class="img-responsive" alt="Cinque Terre">	
			 
		
		
                
		</div>
	</div>
</div>

		
		
		
		
	
		
		<br><br>
		
		<div class="form-group brdbot" style="display: block;">
			    <h3>Please Edit the Job Details</h3>
			    <div class="controls col-sm-9">
                    
                <p id="field67" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId5" class="error"></span>
                </div>
                
		</div>
		
	  <input  type="hidden" name="jobSheetId" value="<?php echo $row['id']?>" >
	  	
<div class="form-group" style="display: block;">
<label class="control-label control-label-left col-sm-2" for="PurchaseOrderNo.">Purchase Order No.</label>
<div class="controls col-sm-10">
<input id="PurchaseOrderNo." type="text" name="purchaseorderno" class="form-control k-textbox"  value="<?php echo $row['purchaseorderno']?>"  data-parsley-errors-container="#errId6"><span id="errId6" class="error" ></span>
</div>
</div>

<div class="form-group" style="display: block;">
<p></p>
</div>

<div class="row" style="display: block;">
<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="timeOnSite">Week<span class="req"> *</span></label>
			      <div class="controls col-sm-9">
               <input class="form-control" type="text" name="week" value="<?php echo $row['week']?>" >
                </div>
                
		</div></div>
		
		
<div class="col-md-4"></div>
<div class="col-md-4"><div class="form-group">
<label class="control-label control-label-left col-sm-3" for="field73">Date</label>
<div class="controls col-sm-9">
<span class="k-widget k-datepicker k-header form-control" style="">
<span class="k-picker-wrap k-state-default">
<input id="field73" name="date" type="text" class="form-control k-input" value="<?php echo $row['date']?>"   aria-haspopup="true" aria-expanded="false" aria-owns="field73_dateview" aria-disabled="false" aria-readonly="false" aria-label="Current focused date is Saturday, September 29, 2018" data-error-container="#errfield73" style="width: 100%;" data-parsley-errors-container="#errId8">
</span></span><span id="errId8" class="error"></span>
</div>
                
		</div></div></div>
		<div class="row" style="display: block;">
		<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="timeOnSite">Name<span class="req"> *</span></label>
			      <div class="controls col-sm-9">
               <input class="form-control" type="text" name="customerName" value="<?php echo $row['customername']?>" >
                </div>
                
		</div></div>
		
		<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="timeOnSite">Location<span class="req"> *</span></label>
			      <div class="controls col-sm-9">
               <input class="form-control" type="text" name="location" value="<?php echo $row['customerlocation']?>" >
                </div>
                
		</div></div>
		
 <!-- PDF Dropdown END -->		
		
		<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="customerLocation">Truck No.</label>
			    <div class="controls col-sm-9">
                    
                <input class="form-control" type="text" name="truckNo" value="<?php echo $row['truckno']?>" >
                <span id="errId10" class="error"></span></div>
                
		</div></div>
		
<!-- Truck Start -->
		<div class="row" style="display: block;">
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Odometer </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="odometer" value="<?php echo $row['odometer']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Honda Hours </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="hondaHrs" value="<?php echo $row['hondahours']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Pony Hours </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="ponyHrs" value="<?php echo $row['ponyhours']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		
		
		
		</div>
		
		<div class="row" style="display: block;">
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Time On Site </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="timeOnSite" value="<?php echo $row['timeonsite']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Driver Hours </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="driverHrs" value="<?php echo $row['driverhours']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Total Units Washed </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="totalUnitsWashed" value="<?php echo $row['totalunitswashed']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		
		
		
		</div>
		<div class="row" style="display: block;">
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Total Man Hours </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="totalManHours" value="<?php echo $row['totalmanhours']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Break Start </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="breakStart" value="<?php echo $row['breakstart']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Break Finish </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="breakFinish" value="<?php echo $row['breakfinish']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		
		
		
		</div>
		<div class="row" style="display: block;">
		
		
		
		
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Team Leader On Site </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="teamLeaderOnSite" value="<?php echo $row['teamleaderonsite']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Manager On Site </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="managerOnSite" value="<?php echo $row['manageronsite']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Other Staff </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="otherStaff" value="<?php echo $row['otherstaff']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>	
		
		
		</div>
		<div class="row" style="display: block;">
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Driver </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="driver" value="<?php echo $row['driver']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
		
			<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Staff On Site </label>
			    <div class="controls col-sm-9">
			    <input class="form-control" type="text" name="staffOnSite" value="<?php echo $row['staffonsite']?>" >
			    <span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End -->      
                
		</div>
	
		
		
		
		
		
		</div>

		
		</div>
		
		
		
		
		
		
		
		
		
	
		
		
		
	
		
		
		
		
		
		
		</div>
		
		
		<br><br>
		
		
		<div class="row" style="display: block;">
		
		
		
	
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"><h2>Trucks Washed</h2></div>
  <div class="col-sm-4 trucks" id="trucks"></div>
</div>
<!---------------------------------------     DropDown 0 InpPutFields O -------------------------------------------------------------------->
<?php 
$match=$row['timelink'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query2="SELECT id, truckconfiguration, pmfn, pmreg, t1fn, t1reg, t2fn, t2reg, commentseachrow FROM jobsheettrucks WHERE jobsheettimelink='$match'";
$result2= $conn->query($query2);
if(!$result2) echo "Select Failed::: $query2<br>".$conn->error."<br><br>";

$rows=$result2->num_rows;

for ($i=0; $i < $rows ; ++$i) {
    static $j=1;
    $result2->data_seek($i);
    $row2 = $result2->fetch_array(MYSQLI_ASSOC);
    $id=$row2['id'];
?>

 <input type="hidden" name="truckRowsNum" value="<?php echo $rows ?>">
 <input type="hidden" name="<?php echo "jobSheetTruckId$i"?>" value="<?php echo $row2['id']?>">

    <div class="form-group inline">     
     <div class="col-xs-1" data-name="name">
     <td>
        <label for="no">No.</label>
       <input type="text" id="no0" name="no0" class="no form-control"  value="<?php echo $j?>">
        
       </td>
      </div>     
     <div class="col-xs-2">     
       <label for="type">Configuration/Type</label>
       <input type="text" id="sel" name="<?php echo "sel$i"?>"class="pmfn form-control clear" value="<?php echo $row2['truckconfiguration']?>"  placeholder='Fleet#'> 
       
</div>
      <td data-name="pmfn">
      <div class="col-xs-1">
        <label for="pmfn">PrimeMover</label>
        <input type="text" id="pmfn0" name="<?php echo "pmfn$i"?>"class="pmfn form-control clear" value="<?php echo $row2['pmfn']?>"  placeholder='Fleet#'>       
      </div>
      </td>
      <div class="col-xs-1">
        <label for="pmreg">PrimeMover </label>
        <input type="text" id="pmreg0" name="<?php echo "pmreg$i"?>"class="form-control clear" value="<?php echo $row2['pmreg']?>" placeholder="Rego">
      </div>
      <div class="col-xs-1">
        <label for="t1fn">Trailer1</label>
      <input type="text" id="t1fn0" name="<?php echo "t1fn$i"?>" class="form-control clear" value="<?php echo $row2['t1fn']?>" placeholder="Fleet#">
      </div>
      <div class="col-xs-1">
        <label for="t1reg">Trailer1</label>
        <input type="text" id="t1reg0" name="<?php echo "t1reg$i"?>" class="form-control clear" value="<?php echo $row2['t1reg']?>" placeholder="Rego">
      </div>
      <div class="col-xs-1">
        <label for="ex3">Trailer2</label>
       <input type="text" id="t2fn0" name="<?php echo "t2fn$i"?>" class="form-control clear" value="<?php echo $row2['t2fn']?>" placeholder="Fleet#">
      </div>
      <div class="col-xs-1">
        <label for="t1fn">Trailer2</label>
     <input type="text" id="t2reg0" name="<?php echo "t2reg$i"?>" class="form-control clear" value="<?php echo $row2['t2reg']?>" placeholder="Rego">
      </div>      
      <div class="col-xs-1">
        <label for="ext">Extra</label>
        <input type="text"  id="ext0" name="<?php echo "ext$i"?>" class="form-control clear" value="<?php echo $row2['commentseachrow']?>" placeholder="Comments">
      </div>
        <div class="col-xs-1">
        <label for="ext">Delete</label>
        
        <?php //echo $id?>
        <br>
    <span class='delete'  id='del_<?php echo $id; ?>'>&nbsp;   &nbsp;<span class="glyphicon glyphicon-remove"></span>&nbsp; </span>
      </div>
      
      </div>
      <?php 
      $j++;
}
      ?>
      <!-- -----------------------    0 END  ------------------------->
 
   <!-- ---------------------------------------------- -->














       <script>
         $(document).ready(function() {
         $('#btnclr').click(function() {
        // $('input[type="text"]').val('');
         $('.clear').val('');
       });
       });
       </script>
   
    
  </form>
</div>

     

  <div> <button class='btn btn-large btn-block btn-danger' name="submit" type="submit" onclick="Validate()">Submit Data</button></div>
  <a href="user-jobsheet-interface.php" class="btn btn-block btn-success"><span class="glyphicon glyphicon-arrow-left"></span> Back to Job Sheets</a>
</div>

	
	
	
	 
		</div>
		
		
		
		</div></div></div></div>


                    </div>
          


                </div>
           
            </form>
        </div>
    </div>
    



    <script src="http://cdn.kendostatic.com/2014.1.318/js/jquery.min.js"></script>
    <script src="http://protostrap.com/Assets/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="http://wenzhixin.net.cn/p/bootstrap-table/src/bootstrap-table.js" type="text/javascript"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <script src="http://protostrap.com/Assets/inputmask/js/jquery.inputmask.js" type="text/javascript"></script>
    <script src="http://cdn.kendostatic.com/2014.1.318/js/kendo.all.min.js"></script>
    <script src="http://protostrap.com/Assets/parsely/parsley.extend.js" type="text/javascript"></script>
    <script src="http://protostrap.com/Assets/parsely/2.0/parsley.js" type="text/javascript"></script>
    <script src="http://protostrap.com/Assets/download.js" type="text/javascript"></script>
    <script src="http://protostrap.com/Assets/protostrap.js" type="text/javascript"></script>
    
   
</body>
</html>
