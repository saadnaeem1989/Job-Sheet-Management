<?php 

//print_r($_POST);

$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$jobsheettimelink=time();
$week=$_POST['week'];
$originalDate = $_POST['date'];
$date = date("d-m-Y", strtotime($originalDate));



//echo $newformat;
// 2003-10-16
$purchaseorderno=$_POST['purchaseorderno'];
$signedby=$_POST['signedby'];
$prejobcomments=$_POST['prejobcomments'];
$timeonsite=date("g:i a", strtotime($_POST['timeOnSite']));
$timeoffsite=date("g:i a", strtotime($_POST['timeOffSite']));
$breakstart=date("g:i a", strtotime($_POST['breakStart']));
$breakfinish=date("g:i a", strtotime($_POST['breakFinish']));
// Total Mn Hours Claculation
$totaltime=strtotime($_POST['timeOffSite'])-strtotime($_POST['timeOnSite']);
//$breaktime=strtotime($_POST['breakFinish'])-strtotime($_POST['breakStart']);
$totalhours1=$totaltime;

if(isset($_POST['check_list'])){
    foreach($_POST['check_list'] as $washcrew){
        if ($washcrew !== ""){
            $final = $final + $totalhours1 ;
        }}}
$totalmanhours=$final/3600;




$driverhours=$_POST['driverHrs'];

$customername=$_POST['customerName'];
$customerlocation=$_POST['customerLocation'];
//Calculation for total units washed
$j=1;
for ($i=1; $i <= 60 ; $i++) {
    if ($_POST["sel$i"] !== "NULL"){
        $type=   $_POST["sel$i"];
        static $totalunits=0;
        switch ($type){
            case "Single Rigid":
                $totalunits=$totalunits+1;
                break;
            case "Bogie Rigid":
                $totalunits=$totalunits+1;
                break;
            case "Prime Mover":
                $totalunits=$totalunits+1;
                break;
            case "Single Combination":
                $totalunits=$totalunits+2;
                break;
            case "B Double Combination":
                $totalunits=$totalunits+3;
                break;
            case "Single Trailer":
                $totalunits=$totalunits+1;
                break;
            case "B Double Trailer":
                $totalunits=$totalunits+2;
                break;
            case "FORKLIFT":
                $totalunits=$totalunits+1;
                break;
            case "VAN/UTE/CAR":
                $totalunits=$totalunits+1;
                break;
            case "Dolly Trailer":
                $totalunits=$totalunits+1;
                break;
            case "Other 1":
                $totalunits=$totalunits+1;
                break;
            case "Other 2":
                $totalunits=$totalunits+2;
                break;
            case "Other 3":
                $totalunits=$totalunits+3;
                break;
               
        }}}
        
$totalunitswashed=$totalunits; 
$truckno=$_POST['truckNo'];
$odometer=$_POST['odometer'];
$hondahours=$_POST['hondaHours'];
$ponyhours=$_POST['ponyHrs'];
$teamleaderonsite=$_POST['teamLeaderOnSite'];
$manageronsite=$_POST['managerOnSite'];
$selectedstaff=" ";
if(isset($_POST['check_list'])){
    foreach($_POST['check_list'] as $selected){
        if ($selected !== ""){
         $selectedstaff.= $selected.",";
        }}}
      
$staffonsite=$selectedstaff;
 
        
$otherstaff=$_POST['otherStaff'];
$driver=$_POST['driver'];
$timelink=$jobsheettimelink;


$query  = "INSERT INTO jobsheets (week, date, purchaseorderno, requirements, signedby, prejobcomments, timeonsite, timeoffsite, breakstart, breakfinish, driverhours,";
$query.=" totalmanhours, customername, customerlocation,";
$query.=" totalunitswashed, truckno, odometer, hondahours, ponyhours, teamleaderonsite, manageronsite, staffonsite, otherstaff, driver, timelink)";
$query.= "VALUES ('$week','$date','$purchaseorderno','All Pre-Job Checklist Requirements were met','$signedby','$prejobcomments','$timeonsite','$timeoffsite','$breakstart','$breakfinish', '$driverhours','$totalmanhours','$customername','$customerlocation','$totalunitswashed','$truckno','$odometer','$hondahours', '$ponyhours','$teamleaderonsite','$manageronsite','$staffonsite','$otherstaff','$driver','$timelink')";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);



for ($i=1; $i<=60; $i++){
    if ($_POST["sel$i"] !=="NULL"){

        $truckconfig  =  strtoupper($_POST["sel$i"])." ".strtoupper($_POST["type$i"]);
        if (isset($_POST["pmfn$i"]))
        $pmfn         =  strtoupper($_POST["pmfn$i"]);
        else $pmfn="";
        if (isset($_POST["pmreg$i"]))
        $pmreg        =  strtoupper($_POST["pmreg$i"]);
        else $pmreg="";
        if (isset($_POST["t1fn$i"]))
        $t1fn         =  strtoupper($_POST["t1fn$i"]);
        else $t1fn="";
        if (isset($_POST["t1reg$i"]))
        $t1reg        =  strtoupper($_POST["t1reg$i"]);
        else $t1reg="";
        if (isset($_POST["t2fn$i"]))
        $t2fn         =  strtoupper($_POST["t2fn$i"]);
        else $t2fn="";
        if (isset($_POST["t2reg$i"]))
        $t2reg        =  strtoupper($_POST["t2reg$i"]);
        else $t2reg="";
        if (isset($_POST["ext$i"]))
        $commentseachrow =  strtoupper($_POST["ext$i"]);
        else $commentseachrow="";
   
$query  = "INSERT INTO jobsheettrucks (truckconfiguration, pmfn, pmreg, t1fn, t1reg, t2fn, t2reg, commentseachrow, jobsheettimelink) VALUES". "('$truckconfig','$pmfn','$pmreg','$t1fn','$t1reg','$t2fn','$t2reg','$commentseachrow','$jobsheettimelink')";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);
    }
}

    




/*echo "<br>";
echo $_POST['purchaseorderno'];

echo "<br> Hi This is the date";

// Creating time stamp from string
if(isset($_POST['date'])){
    $d=mktime(strtotime($_POST['date']));
    echo "<br>". $d."<br>";
    
    //Displying String as it is
    echo $_POST['date'] ;
    echo $d;
}
*/

header('Location:user-jobsheet-interface.php')


?>



