 <head>
 <link rel="shortcut icon" href="../favicon.ico" />
    <meta charset="utf-8">
    <title>Add Extra Trucks</title>
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
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript" src='filename.js'></script>
   <script>
    function showhide(id) {
       	var e = document.getElementById(id);
       	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
     }
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
  </head>
  
 <form action="add-extra-trucks.php" method="post">
 
  
       
 
 <?php for ($i=1;$i<=20;$i++){?>
 <div class="row">
 <div class="form-group inline">  
    
     <div class="col-xs-1" data-name="name">
     <td>
        <label for="no">No.</label>
       <input type="text" id="no<?php echo $i;?>" name="no<?php echo $i;?>" class="no form-control"  value="<?php echo $i;?>">
       </td>
      </div>     
     <div class="col-xs-2">     
       <label for="type">Select</label>
       <select id="sel<?php echo $i;?>" class="form-control"  name="sel<?php echo $i;?>"   >
                      <option value="NULL">Configuration</option>
                      <option value="Single Rigid">Single Rigid</option>
                      <option value="Bogie Rigid">Bogie Rigid</option>
                      <option value="Prime Mover">Prime Mover</option>
                      <option value="Single Combination">Single Combination</option>
                      <option value="B Double Combination">B-Double Combination</option>
                      <option value="Single Trailer">Single Trailer</option>
                      <option value="B Double Trailer">B-Double Trailer</option>
                      <option value="FORKLIFT">FORKLIFT</option>
                      <option value="VAN/UTE/CAR">VAN/UTE/CAR</option>
                      <option value="Dolly Trailer">Dolly Trailer</option>
                      <option value="Other 1">Other 1</option>
                      <option value="Other 2">Other 2</option>
                      <option value="Other 3">Other 3</option>
                     

                </select>
</div>

  <div class="col-xs-2">     
       <label for="type1">Select</label>
       <select  id="type<?php echo $i;?>" class="form-control"  name="type<?php echo $i;?>"  >
                  
                     

                </select>
</div>


      <td data-name="pmfn">
      <div class="col-xs-1">
        <label for="pmfn">PrimeMover</label>
        <input type="text" id="pmfn<?php echo $i;?>" name="pmfn<?php echo $i;?>"class="pmfn form-control clear"  placeholder='Fleet#'>       
      </div>
      </td>
      <div class="col-xs-1">
        <label for="pmreg">PrimeMover </label>
        <input type="text" id="pmreg<?php echo $i;?>" name="pmreg<?php echo $i;?>"class="form-control clear" placeholder="Rego">
      </div>
      <div class="col-xs-1">
        <label for="t1fn">Trailer1</label>
      <input type="text" id="t1fn<?php echo $i;?>" name="t1fn<?php echo $i;?>" class="form-control clear" placeholder="Fleet#">
      </div>
      <div class="col-xs-1">
        <label for="t1reg">Trailer1</label>
        <input type="text" id="t1reg<?php echo $i;?>" name="t1reg<?php echo $i;?>" class="form-control clear" placeholder="Rego">
      </div>
      <div class="col-xs-1">
        <label for="ex3">Trailer2</label>
       <input type="text" id="t2fn<?php echo $i;?>" name="t2fn<?php echo $i;?>" class="form-control clear" placeholder="Fleet#">
      </div>
      <div class="col-xs-1">
        <label for="t1fn">Trailer2</label>
     <input type="text" id="t2reg<?php echo $i;?>" name="t2reg<?php echo $i;?>" class="form-control clear" placeholder="Rego">
      </div>      
      <div class="col-xs-1">
        <label for="ext">Extra</label>
        <input type="text"  id="ext<?php echo $i;?>" name="ext<?php echo $i;?>" class="form-control clear" placeholder="Comments">
      </div>
      </div>
      </div>
      <?php }?>
      
       <br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="javascript:showhide('uniquename')">
    		Click to Add More Trucks
    	</a>     
  
 <div id="uniquename" style="display:none;">   
        
  
   <?php for ($i=21;$i<=60;$i++){?>
  <div class="row">
 <div class="form-group inline">  
    
     <div class="col-xs-1" data-name="name">
     <td>
        <label for="no">No.</label>
       <input type="text" id="no<?php echo $i;?>" name="no<?php echo $i;?>" class="no form-control"  value="<?php echo $i;?>">
       </td>
      </div>     
     <div class="col-xs-2">     
       <label for="type">Select</label>
       <select id="sel<?php echo $i;?>" class="form-control"  name="sel<?php echo $i;?>"   >
                      <option value="NULL">Configuration</option>
                      <option value="Single Rigid">Single Rigid</option>
                      <option value="Bogie Rigid">Bogie Rigid</option>
                      <option value="Prime Mover">Prime Mover</option>
                       <option value="Single Combination">Single Combination</option>
                       <option value="B Double Combination">B-Double Combination</option>
                        <option value="Single Trailer">Single Trailer</option>
                         <option value="B Double Trailer">B-Double Trailer</option>
                          <option value="FORKLIFT">FORKLIFT</option>
                            <option value="VAN/UTE/CAR">VAN/UTE/CAR</option>
                             <option value="Dolly Trailer">Dolly Trailer</option>
                                <option value="Other 1">Other 1</option>
                      <option value="Other 2">Other 2</option>
                      <option value="Other 3">Other 3</option>
                     

                </select>
</div>

  <div class="col-xs-2">     
       <label for="type1">Select</label>
       <select  id="type<?php echo $i;?>" class="form-control"  name="type<?php echo $i;?>"  >
                  
                     

                </select>
</div>


      <td data-name="pmfn">
      <div class="col-xs-1">
        <label for="pmfn">PrimeMover</label>
        <input type="text" id="pmfn<?php echo $i;?>" name="pmfn<?php echo $i;?>"class="pmfn form-control clear"  placeholder='Fleet#'>       
      </div>
      </td>
      <div class="col-xs-1">
        <label for="pmreg">PrimeMover </label>
        <input type="text" id="pmreg<?php echo $i;?>" name="pmreg<?php echo $i;?>"class="form-control clear" placeholder="Rego">
      </div>
      <div class="col-xs-1">
        <label for="t1fn">Trailer1</label>
      <input type="text" id="t1fn<?php echo $i;?>" name="t1fn<?php echo $i;?>" class="form-control clear" placeholder="Fleet#">
      </div>
      <div class="col-xs-1">
        <label for="t1reg">Trailer1</label>
        <input type="text" id="t1reg<?php echo $i;?>" name="t1reg<?php echo $i;?>" class="form-control clear" placeholder="Rego">
      </div>
      <div class="col-xs-1">
        <label for="ex3">Trailer2</label>
       <input type="text" id="t2fn<?php echo $i;?>" name="t2fn<?php echo $i;?>" class="form-control clear" placeholder="Fleet#">
      </div>
      <div class="col-xs-1">
        <label for="t1fn">Trailer2</label>
     <input type="text" id="t2reg<?php echo $i;?>" name="t2reg<?php echo $i;?>" class="form-control clear" placeholder="Rego">
      </div>      
      <div class="col-xs-1">
        <label for="ext">Extra</label>
        <input type="text"  id="ext<?php echo $i;?>" name="ext<?php echo $i;?>" class="form-control clear" placeholder="Comments">
      </div>
      </div>
      </div>
      <?php }?>
      </div>
    
    
  	
    
      <br>

     
    	 </form>