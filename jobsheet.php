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
<title>Jobsheet Entry</title>
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


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src='modular2/filename.js'></script>
 
 
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
  <script type="text/javascript">

 
	  




  
        $(function () {
            $("#btnSubmit").click(function () {


            	if(($("#sel1 :selected").val() != "NULL") && ($("#type1 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in First row");
            	return false;
            	}


            	if(($("#sel2 :selected").val() != "NULL") && ($("#type2 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in Second row");
            	return false;
            	}

            	if(($("#sel3 :selected").val() != "NULL") && ($("#type3 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in Third row");
            	return false;
            	}

            	if(($("#sel4 :selected").val() != "NULL") && ($("#type4 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 4th row");
            	return false;
            	}

            	if(($("#sel5 :selected").val() != "NULL") && ($("#type5 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 5th row");
            	return false;
            	}

            	if(($("#sel6 :selected").val() != "NULL") && ($("#type6 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 6th row");
            	return false;
            	}

            	if(($("#sel7 :selected").val() != "NULL") && ($("#type7 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 7th row");
            	return false;
            	}

            	if(($("#sel8 :selected").val() != "NULL") && ($("#type8 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 8th row");
            	return false;
            	}

            	if(($("#sel9 :selected").val() != "NULL") && ($("#type9 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 9th row");
            	return false;
            	}

            	if(($("#sel10 :selected").val() != "NULL") && ($("#type10 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 10th row");
            	return false;
            	}

            	if(($("#sel11 :selected").val() != "NULL") && ($("#type11 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 11th row");
            	return false;
            	}

            	if(($("#sel12 :selected").val() != "NULL") && ($("#type12 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 12th row");
            	return false;
            	}

            	if(($("#sel13 :selected").val() != "NULL") && ($("#type13 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 13th row");
            	return false;
            	}

            	if(($("#sel14 :selected").val() != "NULL") && ($("#type14 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 14th row");
            	return false;
            	}

            	if(($("#sel15 :selected").val() != "NULL") && ($("#type15 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 15th row");
            	return false;
            	}

            	if(($("#sel16 :selected").val() != "NULL") && ($("#type16 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 16th row");
            	return false;
            	}

            	if(($("#sel17 :selected").val() != "NULL") && ($("#type17 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 17th row");
            	return false;
            	}

            	if(($("#sel18 :selected").val() != "NULL") && ($("#type18 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 18th row");
            	return false;
            	}

            	if(($("#sel19 :selected").val() != "NULL") && ($("#type19 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 19th row");
            	return false;
            	}

            	if(($("#sel20 :selected").val() != "NULL") && ($("#type20 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 20th row");
            	return false;
            	}

            	if(($("#sel21 :selected").val() != "NULL") && ($("#type21 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 21st row");
            	return false;
            	}

            	if(($("#sel22 :selected").val() != "NULL") && ($("#type22 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 22nd row");
            	return false;
            	}

            	if(($("#sel23 :selected").val() != "NULL") && ($("#type23 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 23rd row");
            	return false;
            	}

            	if(($("#sel24 :selected").val() != "NULL") && ($("#type24 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 24th row");
            	return false;
            	}

            	if(($("#sel25 :selected").val() != "NULL") && ($("#type25 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 25th row");
            	return false;
            	}

            	if(($("#sel26 :selected").val() != "NULL") && ($("#type26 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 26th row");
            	return false;
            	}
            	if(($("#sel27 :selected").val() != "NULL") && ($("#type27 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 27th row");
            	return false;
            	}
            	if(($("#sel28 :selected").val() != "NULL") && ($("#type28 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 28th row");
            	return false;
            	}
            	if(($("#sel29 :selected").val() != "NULL") && ($("#type29 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 29th row");
            	return false;
            	}
            	if(($("#sel30 :selected").val() != "NULL") && ($("#type30 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 30th row");
            	return false;
            	}
            	if(($("#sel31 :selected").val() != "NULL") && ($("#type31 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 31st row");
            	return false;
            	}
            	if(($("#sel32 :selected").val() != "NULL") && ($("#type32 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 32nd row");
            	return false;
            	}
            	if(($("#sel33 :selected").val() != "NULL") && ($("#type33 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 33rd row");
            	return false;
            	}
            	if(($("#sel34 :selected").val() != "NULL") && ($("#type34 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 34th row");
            	return false;
            	}
            	if(($("#sel35 :selected").val() != "NULL") && ($("#type35 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 35th row");
            	return false;
            	}
            	if(($("#sel36 :selected").val() != "NULL") && ($("#type36 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 36th row");
            	return false;
            	}
            	
            	if(($("#sel37 :selected").val() != "NULL") && ($("#type37 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 37th row");
            	return false;
            	}
            	if(($("#sel38 :selected").val() != "NULL") && ($("#type38 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 38th row");
            	return false;
            	}
            	if(($("#sel39 :selected").val() != "NULL") && ($("#type39 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 39th row");
            	return false;
            	}
            	if(($("#sel40 :selected").val() != "NULL") && ($("#type40 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 40th row");
            	return false;
            	}
            	if(($("#sel41 :selected").val() != "NULL") && ($("#type41 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 41st row");
            	return false;
            	}
            	if(($("#sel42 :selected").val() != "NULL") && ($("#type42 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 42nd row");
            	return false;
            	}
            	if(($("#sel43 :selected").val() != "NULL") && ($("#type43 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 43rd row");
            	return false;
            	}
            	if(($("#sel44 :selected").val() != "NULL") && ($("#type44 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 44th row");
            	return false;
            	}
            	if(($("#sel45 :selected").val() != "NULL") && ($("#type45 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 45th row");
            	return false;
            	}
            	if(($("#sel46 :selected").val() != "NULL") && ($("#type46 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 46th row");
            	return false;
            	}
            	if(($("#sel47 :selected").val() != "NULL") && ($("#type47 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 47th row");
            	return false;
            	}
            	if(($("#sel48 :selected").val() != "NULL") && ($("#type48 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 48th row");
            	return false;
            	}
            	if(($("#sel49 :selected").val() != "NULL") && ($("#type49 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 49th row");
            	return false;
            	}
            	if(($("#sel50 :selected").val() != "NULL") && ($("#type50 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 50th row");
            	return false;
            	}
            	if(($("#sel51 :selected").val() != "NULL") && ($("#type51 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 51st row");
            	return false;
            	}
            	if(($("#sel52 :selected").val() != "NULL") && ($("#type52 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 52nd row");
            	return false;
            	}
            	if(($("#sel53 :selected").val() != "NULL") && ($("#type53 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 53rd row");
            	return false;
            	}
            	if(($("#sel54 :selected").val() != "NULL") && ($("#type54 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 54th row");
            	return false;
            	}
            	if(($("#sel55 :selected").val() != "NULL") && ($("#type55 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 55th row");
            	return false;
            	}
            	if(($("#sel56 :selected").val() != "NULL") && ($("#type56 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 56th row");
            	return false;
            	}
            	if(($("#sel57 :selected").val() != "NULL") && ($("#type57 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 57th row");
            	return false;
            	}
            	if(($("#sel58 :selected").val() != "NULL") && ($("#type58 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 58th row");
            	return false;
            	}
            	if(($("#sel59 :selected").val() != "NULL") && ($("#type59 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 59th row");
            	return false;
            	}

            	if(($("#sel60 :selected").val() != "NULL") && ($("#type60 :selected").val() === "") )
            	{
            		
            	alert ( "Please select Type in 60th row");
            	return false;
            	}







                
            	 if(!this.form.hazards.checked)
                 {
                     alert('You must make sure that hazards were identified !');
                     return false;
                 }

            	 if(!this.form.workallocation.checked)
                 {
                     alert('You must make sure that work was allocated by Team Leader !');
                     return false;
                 }

            	 if(!this.form.checkbox55.checked)
                 {
                     alert('Please make sure that fleet list was checked/used for this job !');
                     return false;
                 }

            	 if(!this.form.checkbox57.checked)
                 {
                     alert('Make sure that junior staff on site was accompanied by an adult !');
                     return false;
                 }

            	 if(!this.form.ppeequipment.checked)
                 {
                     alert('Must ensure that correct PPE equipment was being worn by all staff !');
                     return false;
                 }

            	 if ($("#authorizedby").val() == "") {
                     alert("Please Enter Authorized By");
                    return false;
                 }


                if ($("#week :selected").val() == 0) {
                    alert("Please select a Week");
                   return false;
                }

                if ($("#customer :selected").val() == 0) {
                    alert("Please select a Customer");
                    return false;
                }

                if ($("#location :selected").val() == 0) {
                    alert("Please select a Location");
                    return false;
                }

                if ($("#truckname :selected").val() == 0) {
                    alert("Please select a Wash Plant No.");
                    return false;
                }

                if ($("#odometer").val() == "") {
                    alert("Please Enter Odometer Reading");
                   return false;
                }

                if ($("#hondahours").val() == "") {
                    alert("Please Enter Honda Hours");
                   return false;
                }

                if ($("#ponyhours").val() == "") {
                    alert("Please Enter Pony Hours");
                   return false;
                }

                if ($("#totalmanhours").val() == "") {
                    alert("Please Enter Total Man Hours");
                   return false;
                }
                
                if ($("#driverhours").val() == "") {
                    alert("Please Enter Driver Hours");
                   return false;
                }

                
                
                if ($("#drivername :selected").val() == 0) {
                    alert("Please select a Driver");
                    return false;
                }
                if ($("#teamleadername :selected").val() == 0) {
                    alert("Please select a Team Leader");
                    return false;
                }
                if ($("#managername :selected").val() == 0) {
                    alert("Please select a Manager");
                    return false;
                }

               

                
                
                if ($("#sel1 :selected").val() == "NULL") {
                    alert("Enter atleast one Truck Entry ");
                    return false;
                }

               
               
                

                 
                
            });
        });
    </script>
  
<script type="text/javascript">
    $(document).ready(function(){

      
    	  $('#customer').on('change',function(){
  	        var customername = $(this).val();
  	        if(customername){
  	            $.ajax({
  	                type:'POST',
  	                url:'ajaxlocation.php',
  	                data:'customername='+customername,  //Sending Data
  	                success:function(html){// the argument is the html generated in the ajax page
  	                    $('#location').html(html);//select id="location"
  	                    
  	                }
  	            }); 
  	        }else{
  	            $('#location').html('<option value="">Select Customer Name First</option>'); //Works on change
  	           
  	        }
  	    });

  	  


        
        $(".add-row").click(function(){
            
           var no = $("#no").val();
             var type = $("#type").val();
             var pmfn=$("#pmfn").val();
             var pmreg = $("#pmreg").val();
             var t1fn = $("#t1fn").val();
             var t1reg = $("#t1reg").val();
             var t2fn = $("#t2fn").val();
             var t2reg = $("#t2reg").val();
             var ext = $("#ext").val();
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + no + "&nbsp;&nbsp;</td><td>" + type + "&nbsp;&nbsp;</td><td>" + pmfn + "&nbsp;&nbsp;</td><td>" + pmreg + "&nbsp;&nbsp;</td><td>" + t1fn + "&nbsp;&nbsp;</td><td>" + t1reg + "&nbsp;&nbsp;</td><td>"+t2fn+"&nbsp;&nbsp;</td><td>" + t2reg + "&nbsp;&nbsp;</td>"+"<td>" + ext + "&nbsp;&nbsp;</td>"+"</tr>";
            $("table tbody").append(markup);
        });
        
        // Find and remove selected table rows
        $(".delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
              if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });    


  
</script>
  
  
  



</head>

<body>
<?php include 'frontendheader.php';?>

<div class="row">
  
  <div class="col-sm-9"></div>
  <div class="col-sm-2">
  
  <a href="user-jobsheet-interface.php" class="btn btn-sm btn-success"><span class="glyphicon glyphicon-list-alt"></span>&nbsp;Back to Job Sheet Menu</a>

  </div>
   <div class="col-sm-1"><a href="logout.php" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-log-out"></span>&nbsp;Log Out</a></div>
    
</div>

    
    <div class="container-fluid">
   
        <div class="row">
<!-- Form -->
            <form action="get_information.php" method="post" name="true" id="formentry" class="form-horizontal" role="form">
                <div class="container-fluid shadow">
                    <div class="row">
                        <div id="valErr" class="row viewerror clearfix hidden">
                            <div class="alert alert-danger">Oops! Seems there are some errors..</div>
                        </div>
                            <div id="valOk" class="row viewerror clearfix hidden">
                            <div class="alert alert-success">Yay! ..</div>
                        </div>

                        
                                    
 <div class="row" style="display: block;">
 	<div class="col-md-12">
 		<div class="form-group brdbot" style="display: block;">
			<img src="thor-mobile-logo.png" class="img-responsive" alt="Cinque Terre">	
			 
		
		
                
		</div>
	</div>
	<font color="red">Note:</font>
	<br>
	<font color="red">If form can not submit please make sure all the Pre-Job checklist items are checked</font>
	<br>
	<font color="red">And all the fields with * marked in front of them are entered</font>
</div>

<div class="row">
<div class="col-md-12">
	<div class="form-group" rel="popover" data-trigger="hover" data-content="Click the procedures that were followed" data-original-title="">
		<label class="control-label control-label-left col-sm-3"><h3>Pre Job Check List:</h3><span class="req"> <!-- * --></span></label>
		 <div class="controls col-sm-9">
              <label class="checkbox" for="hazards">
              <input type="checkbox" value="hazards" id="hazards" name="box[]"  required="required" >Hazards Identified</label>
              
       		<label class="checkbox" for="workallocation">
      		 <input type="checkbox" value="workallocation" id="workallocation" name="box[]" required="required" data-parsley-errors-container="#errId2">Job work allocation given by Team Leader</label>
      		 
      		   <label class="checkbox"><input id="checkbox55" name="box[]" type="checkbox" value="Fleet list checked/used for this job" data-parsley-errors-container="#errId2">Fleet list checked/used for this job</label>
      		   <label class="checkbox"><input id="checkbox57" name="box[]" type="checkbox" value="When Junior Staff on  Site must be accompanied by an adult" data-parsley-errors-container="#errId2">When Junior Staff on  Site must be accompanied by an adult</label>
      		    <label class="checkbox" for="ppeequipment">
     		   <input type="checkbox" value="ppeequipment" id="ppeequipment" name="box[]" required="required" data-parsley-errors-container="#errId2">Correct PPE Equipment/Items are being worn by All Staff Members</label>
       		  <span id="errId2" class="error"></span>
         </div>
                
		</div></div></div>
		
		
		<div>
		<div class="form-group" style="display: block;">
			     <b>Examples of these are:</b>

			    
                
		</div><div class="row" style="display: block;">
		<div class="col-md-3"><div class="form-group" style="display: block;">
			    <p>&malt;&nbsp;Steel Cap Boots</p>
			    
                
		</div></div><div class="col-md-3"><div class="form-group" style="display: block;">
			    <p>&malt;&nbsp;Goggles</p>
			    
                
		</div></div><div class="col-md-3"><div class="form-group" style="display: block;">
			    <p>&malt;&nbsp;Hi-Vis Shirts</p>
			    
                
		</div></div><div class="col-md-3"><div class="form-group">
			    <p>&malt;&nbsp;Food &amp; Water</p>
			    
                
		</div></div></div>
		</div>
		
		<div class="form-group" rel="popover" data-trigger="hover" data-content="(optional)" data-original-title="">
			    
			    <label class="control-label" for="Comments/Notes:">Comments/Notes:</label>
			    <div class="controls">
               
                <textarea id="Comments/Notes:" rows="3" name="prejobcomments" class="form-control k-textbox" data-role="textarea" placeholder="Please provide any additional information not covered above" name="" data-parsley-errors-container="#errId3"></textarea>
                </div>
               
               
              
               
               
               
               
                
		</div>
		
		<br><br>
		
		<div class="form-group brdbot" style="display: block;">
			    <h3>Please Enter the Job Details</h3>
			    <div class="controls col-sm-9">
                    
                <p id="field67" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId5" class="error"></span>
                </div>
                
		</div>
		
		
<div class="form-group" style="display: block;">
<label class="control-label control-label-left col-sm-2" for="PurchaseOrderNo.">Purchase Order No.</label>
<div class="controls col-sm-10">
<input id="PurchaseOrderNo." type="text" name="purchaseorderno" class="form-control k-textbox" data-role="text" data-parsley-errors-container="#errId6"><span id="errId6" class="error"></span>
</div>
</div>

<div class="form-group" style="display: block;">
<p></p>
</div>

<div class="row" style="display: block;">
<div class="col-md-4">
<div class="form-group" style="display: block;">
<label class="control-label control-label-left col-sm-3" for="SelectWeek">Week</label>

<div class="controls col-sm-9">
<select id="week" name="week" class="form-control" data-role="select" selected="selected" data-parsley-errors-container="#errId7">
<option value="0" selected="selected">Select Week</option>
<option value="Week A">Week A</option>
<option value="Week B">Week B</option>
<option value="Week C">Week C</option>
<option value="Week D">Week D</option>
</select>
</div>
                
</div>
</div>
		
		
<div class="col-md-4"></div>
<div class="col-md-4"><div class="form-group">
<label class="control-label control-label-left col-sm-3" for="field73">Date</label>
<div class="controls col-sm-9">
<span class="k-widget k-datepicker k-header form-control" style="">
<span class="k-picker-wrap k-state-default">
<input id="field73" name="date" type="text" class="form-control k-input" data-role="date" role="textbox" aria-haspopup="true" aria-expanded="false" aria-owns="field73_dateview" aria-disabled="false" aria-readonly="false" aria-label="Current focused date is Saturday, September 29, 2018" data-error-container="#errfield73" style="width: 100%;" data-parsley-errors-container="#errId8" required>
<span unselectable="on" class="k-select" role="button" aria-controls="field73_dateview">
<span unselectable="on" class="k-icon k-i-calendar">select</span></span></span></span><span id="errId8" class="error"></span>
</div>
                
		</div></div></div><div class="row" style="display: block;"><div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="Name">Select</label>
			    <div class="controls col-sm-9">
                    
                <select id="customer" name="customerName" class="form-control" >
                 <option value="0">Customer</option>
                 <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT DISTINCT customername FROM customers ORDER BY customername ASC";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
		 
		  <option value="<?php echo $row['customername'];?>"><?php echo $row['customername'];?></option>
		    <?php 
			    }
                
                
                
                
                ?>
		  
		  
		</select><span id="errId9" class="error"></span></div>
                
		</div></div>
		
		<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="Name">Download</label>
			    <div class="controls col-sm-9">
                    
         
 <!-- PDF Dropdown Start -->        
         
         <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Customers PDF File
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
    <?php 
$files=scandir("operations/uploads");
for($a=2;$a<count($files);$a++){
    //displaying links to download
    ?>
      <li><a download="<?php echo $files[$a]?>" href="uploads/<?php echo $files[$a]?>"><?php echo $files[$a]?></a>  </li>
       
    <?php 
}
?>
    </ul>
  </div>
		
		
		<span id="errId9" class="error"></span></div>
                
		</div></div>
		
 <!-- PDF Dropdown END -->		
		
		<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="customerLocation">Select</label>
			    <div class="controls col-sm-9">
                    
                <select id="location" class="form-control"  name="customerLocation" data-parsley-errors-container="#errId10">
		  <option value="0">Location</option>
		  
		  
		</div></select><span id="errId10" class="error"></span></div>
                
		</div></div>
		
<!-- Truck Start -->
		<div class="row" style="display: block;">
		<div class="col-md-4">
		<div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="Truck">Wash Plant No. </label>
			    <div class="controls col-sm-9">
			   
			     <select id="truckname" class="form-control" data-role="select" name="truckNo" data-parsley-errors-container="#errId10">
		  <option value="0">Select Wash Unit</option>
		   <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT * FROM trucks";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
                    
                <option value="<?php echo $row['truck'];?>"><?php echo $row['truck'];?></option>
                  <?php 
			    }
                
                
                
                
                ?>
                </div></select><span id="errId10" class="error"></span></div>
                
		
                </div>
                
        <!-- Truck End --> 
        
        
        
             
                
		</div></div><div class="col-md-4"><div class="form-group" rel="popover" data-trigger="hover" data-content="Must be 6-Digit Integer" data-original-title="" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="odometer">Odometer<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    
                <span class="k-widget k-numerictextbox form-control" style=""><span class="k-numeric-wrap k-state-default"><input type="text" class="k-formatted-value form-control k-input" tabindex="0" aria-disabled="false" aria-readonly="false" style="display: inline-block;" id="odometer" name="odometer" placeholder=" " data-parsley-errors-container="#errId12">
                <input id="odometer" name="odometer" value="" type="text" class="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield115" style="display: none;" data-greaterthan="#undefined" data-parsley-max="999999" data-parsley-min="0" data-lessthan="#undefined" data-lessthan-message="This value should be less than 'Numeric'" name="odometer" required="required" data-parsley-errors-container="#errId12">
                <span class="k-select">
                <span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span>
                <span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span>
                <span id="errId12" class="error"></span></div>
                
		</div></div>
		<div class="col-md-4"><div class="form-group" rel="popover" data-trigger="hover" data-content="Below 9999.9" data-original-title="">
			    <label class="control-label control-label-left col-sm-3" for="HondaHrs.">Honda Hrs.<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    
                <span class="k-widget k-numerictextbox form-control" style=""><span class="k-numeric-wrap k-state-default"><input type="text" class="k-formatted-value form-control k-input" tabindex="0" aria-disabled="false" aria-readonly="false" id="HondaHrs." placeholder="" style="display: inline-block;" name="hondaHrs" data-parsley-errors-container="#errId13">
                <input id="hondahours" name="hondaHours" value="" type="text" class="form-control k-input" data-role="numeric" data-format="decimal" role="spinbutton" aria-valuenow="999999999999" aria-disabled="false" aria-readonly="false" data-error-container="#errfield116" data-parsley-min="0" data-greaterthan="#undefined" data-lessthan="#undefined" data-lessthan-message="This value should be less than 'Odometer *'"  style="display: none;" name="hondaHrs"  data-parsley-max="9999.9" required="required" data-parsley-errors-container="#errId13">
                <span class="k-select"><span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId13" class="error"></span>
                </div>
                
		</div></div>
			<div class="col-md-4"><div class="form-group" rel="popover" data-trigger="hover" data-content="Below 9999.9" data-original-title="">
			    <label class="control-label control-label-left col-sm-3" for="HondaHrs.">Pony Hrs.<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    
                <span class="k-widget k-numerictextbox form-control" style=""><span class="k-numeric-wrap k-state-default"><input type="text" class="k-formatted-value form-control k-input" tabindex="0" aria-disabled="false" aria-readonly="false" id="HondaHrs." placeholder="" style="display: inline-block;" name="ponyHrs" data-parsley-errors-container="#errId13">
                <input id="ponyhours" name="ponyHrs" value="" type="text" class="form-control k-input" data-role="numeric" data-format="decimal" role="spinbutton" aria-valuenow="999999999999" aria-disabled="false" aria-readonly="false" data-error-container="#errfield116" data-parsley-min="0" data-greaterthan="#undefined" data-lessthan="#undefined" data-lessthan-message="This value should be less than 'Odometer *'"  style="display: none;" name="ponyHrs"  data-parsley-max="9999.9" required="required" data-parsley-errors-container="#errId13">
                <span class="k-select"><span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId13" class="error"></span>
                </div>
                
		</div></div>
		</div><div class="row" style="display: block;">
		
		<div class="row">
		
		
	<div class="col-md-4"><div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="timeOnSite">Time on Site<span class="req"> *</span></label>
			      <div class="controls col-sm-9">
               <input class="form-control" type="time" name="timeOnSite" value="--:--:--" step="900" required>
                </div>
                
		</div></div>
		
		
		<div class="col-md-4">
		<div class="form-group" rel="popover" data-trigger="hover" data-content="(Numeric Value)" data-original-title="">
			    <label class="control-label control-label-left col-sm-3" for="driverHrs">Driver Hrs.<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    
                <span class="k-widget k-numerictextbox form-control" style=""><span class="k-numeric-wrap k-state-default"><input type="text"name="driverHrs" class="k-formatted-value form-control k-input" tabindex="0" aria-disabled="false" aria-readonly="false" style="display: inline-block;" id="driverhours" name="driverHrs" data-parsley-errors-container="#errId17"><input id="driverhours" name="driverHrs" value="" type="text" class="form-control k-input" data-role="numeric" data-format="decimal" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield216" style="display: none;" name="driverHrs" data-parsley-errors-container="#errId17"><span class="k-select"><span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" class="k-link"><span unselectable="on" class="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId17" class="error"></span></div>
                
		</div>
		
		
		</div>
		
		<div class="col-md-4">
		<div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="driver">Driver<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    <select id="drivername" class="form-control" data-role="select" name="driver" data-parsley-errors-container="#errId10">
		  <option value="0">Select Driver Name</option>
		   <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT * FROM drivers";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
                    
                <option value="<?php echo $row['drivername'];?>"><?php echo $row['drivername'];?></option>
                  <?php 
			    }
                
                
                
                
                ?>  
              
               </select>
                </div>
               
		</div>
		</div>
		
		</div>
		
		
		<div class="row" style="display: block;">
		<div class="col-md-4">
		<div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="teamLeaderOnSite">Team Leader on Site<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    
                 <select id="teamleadername" class="form-control" data-role="select" name="teamLeaderOnSite" data-parsley-errors-container="#errId10">
		  <option value="0">Select Team Leader Name</option>
		   <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT * FROM teamleaders";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
                    
                <option value="<?php echo $row['teamleadername'];?>"><?php echo $row['teamleadername'];?></option>
                  <?php 
			    }
                
                
                
                
                ?>  
              
               </select>
                
                </div>
                
		</div>
		
		
		
		</div>
		<div class="col-md-4">
		<div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="managerOnSite">Manager on Site<span class="req"> *</span></label>
			    <div class="controls col-sm-9">
                    
                  <select id="managername" class="form-control" data-role="select" name="managerOnSite" data-parsley-errors-container="#errId10">
		  <option value="0">Select Manager Name</option>
		   <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT * FROM managers";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
                    
                <option value="<?php echo $row['managername'];?>"><?php echo $row['managername'];?></option>
                  <?php 
			    }
                
                
                
                
                ?>  
              
               </select>
                
                </div>
                
		</div>
		</div>
		<div class="col-md-4">
			<div class="form-group">
			    <label class="control-label control-label-left col-sm-3" for="BreakStart">Break Start</label>
			    <div class="controls col-sm-9">
               <input class="form-control" type="time" name="breakStart" value="--:--:--" step="900" required>
                </div>
                
		</div>
		</div>
		</div>
		
		
		<div class="row">
		
		<div class="col-md-4"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="BreakFinish">Break Finish</label>
			   <div class="controls col-sm-9">
               <input class="form-control" type="time" name="breakFinish" value="--:--:--" step="900" required>
              </div>  </div></div>
		
		
		<div class="col-md-4"></div>
		
		
		
		<div class="col-md-4">
	
		
		</div>
		</div>
		</div>
		
		
		
	
		
		
		<div class="col-md-4"></div>
		
		
		
		
		<div class="col-md-4">
	
		</div>
		
		
		
		
	
		
		
		
		
		
		
		</div>
		
		
		<br><br>
		
		
		<div class="row" style="display: block;">
		
		<div class="col-md-6">
		<div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3">Staff on Site</label>
			    <div class="controls col-sm-9">
			    <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT * FROM employees";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
                    
                <label class="checkbox col-md-4" for="emp1"><input type="checkbox" value="<?php echo $row['username'];?>" id="emp[]" name="check_list[]" data-parsley-errors-container="#errId26"><?php echo $row['username'];?></label>
                <?php 
			    }
                
                
                
                
                ?>
               </div>
                
		</div></div>
		<div class="col-md-6"><div class="form-group" style="display: block;">
			    <label class="control-label control-label-left col-sm-3" for="otherStaff">Other Staff</label>
			    <div class="controls col-sm-9">
                    
                <textarea id="otherStaff" rows="3" class="form-control k-textbox" data-role="textarea" name="otherStaff" data-parsley-errors-container="#errId27"></textarea><span id="errId27" class="error"></span></div>
                
		</div>
		
		</div>
	
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"><h2>Trucks Washed</h2></div>
  <div class="col-sm-4"></div>
</div>
<!---------------------------------------     DropDown 0 InpPutFields O -------------------------------------------------------------------->
  



<?php include 'modular2/test.php';?>
   <!-- ---------------------------------------------- -->














       <script>
         $(document).ready(function() {
         $('#btnclr').click(function() {
        // $('input[type="text"]').val('');
         $('.clear').val('');
       });
       });
       </script>
   <div class="row">
   	<div class="form-group">
      <label class="control-label control-label-left col-sm-2"  for="SignedBy:">Authorised By:</label>
			    <div class="controls col-sm-4">
                   <select id="authorizedby" class="form-control" data-role="select" name="signedby" data-parsley-errors-container="#errId10">
		  <option value="0">Select</option>
		   <?php 
			    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query  = "SELECT * FROM managers";
			    $result = $conn->query($query);
			    if (!$result) die ("Database acess failed: " .$conn->error);
			    $rows = $result->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result->data_seek($i);
			        $row = $result->fetch_array(MYSQLI_ASSOC);
			     ?>
                    
                <option value="<?php echo $row['managername'];?>"><?php echo $row['managername'];?></option>
                  <?php 
			    }
                
			    $conn2 = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
			    $query2  = "SELECT * FROM teamleaders";
			    $result2 = $conn2->query($query2);
			    if (!$result2) die ("Database acess failed: " .$conn2->error);
			    $rows = $result2->num_rows;
			    for($i = 0 ;  $i < $rows ;  ++$i){
			        
			        $result2->data_seek($i);
			        $row2 = $result2->fetch_array(MYSQLI_ASSOC);
			        ?>
                    
                <option value="<?php echo $row2['teamleadername'];?>"><?php echo $row2['teamleadername'];?></option>
                  <?php 
			    }
                
                
                
                
                ?>  
                
                
                ?>  
                
              
               </select>    
               
                <br>
                </div>
                
                
			    <label class="control-label control-label-left col-sm-2" for="timeOffSite">Time Off Site</label>
			    
			    <div class="controls col-sm-4">
               <input class="form-control" type="time" name="timeOffSite" value="--:--:--" step="900" required>
                </div>
			    
                
		</div>
                </div>
  </form>
</div>

     

  <div><br> <button class='btn btn-large btn-block btn-danger' name="submit" type="submit" id="btnSubmit">Submit Data</button></div>
</div>

	
	
	
	 
		</div>
		
		
		
		</div></div></div></div>
<div id='response'></div>

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
