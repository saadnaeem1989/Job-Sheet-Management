<?php 

print_r($_POST);

$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$jobsheettimelink=time();
$week=$_POST['week'];
$date=$_POST['date'];
$purchaseorderno=$_POST['purchaseorderno'];
//$signedby=$_POST['signedby'];
//$prejobcomments=$_POST['prejobcomments'];
$timeonsite=$_POST['timeOnSite'];
$breakstart=$_POST['breakStart'];
$breakfinish=$_POST['breakFinish'];
$totalbreaktime=$_POST['totalBreakTime'];
$driverhours=$_POST['driverHrs'];
$totalmanhours=$_POST['totalManHours'];
$customername=$_POST['customerName'];
$customerlocation=$_POST['location'];
//Calculation for total units washed
/*$j=1;
for ($i=0; $i < 10 ; ++$i) {
    if (if (isset($_POST["sel$i"]))){
        $type=   $_POST["sel$i"];
        static $totalunits=0;
        switch ($type){
            case "Single Rigid":
                $totalunits=$totalunits+1;
                break;
            case "Bogie Rigid":
                $totalunits=$totalunits+2;
                break;
            case "Prime Mover":
                $totalunits=$totalunits+1;
                break;
            case "UTE":
                $totalunits=$totalunits+2;
                break;
            case "VAN":
                $totalunits=$totalunits+1;
                break;
            case "FORKLIFT":
                $totalunits=$totalunits+2;
                break;
            case "Single Trailer":
                $totalunits=$totalunits+1;
                break;
            case "Skeleton Trailer":
                $totalunits=$totalunits+2;
                break;
            case "Dolly Trailer":
                $totalunits=$totalunits+1;
                break;
            case "Flat Top Trailer":
                $totalunits=$totalunits+2;
                break;
            case "B Double Trailer":
                $totalunits=$totalunits+1;
                break;
            case "B Double Trailer Skeleton":
                $totalunits=$totalunits+2;
                break;
            case "B Double Trailer Flat Top":
                $totalunits=$totalunits+1;
                break;
            case "Single Combination":
                $totalunits=$totalunits+2;
                break;
            case "B Double Combination":
                $totalunits=$totalunits+1;
                break;
            case "Other":
                $totalunits=$totalunits+2;
                break;
        }}}
        */
//$totalunitswashed=$totalunits; 
$truckno=$_POST['truckNo'];
$odometer=$_POST['odometer'];
$hondahours=$_POST['hondaHrs'];
$ponyhours=$_POST['ponyHrs'];
$teamleaderonsite=$_POST['teamLeaderOnSite'];
$manageronsite=$_POST['managerOnSite'];
$totalunitswashed=$_POST['totalUnitsWashed'];

$staffonsite=$_POST['staffOnSite'];

$otherstaff=$_POST['otherStaff'];
$driver=$_POST['driver'];
$timelink=$jobsheettimelink;
$jobsheetid=$_POST['jobSheetId'];


$query  = "UPDATE jobsheets SET week='$week', date='$date', purchaseorderno='$purchaseorderno', timeonsite='$timeonsite', breakstart='$breakstart', breakfinish='$breakfinish', totalbreaktime='$totalbreaktime', driverhours='$driverhours',";
$query.=" totalmanhours='$totalmanhours', customername='$customername', customerlocation='$customerlocation',";
$query.=" totalunitswashed='$totalunitswashed', truckno='$truckno', odometer='$odometer', hondahours='$hondahours', ponyhours='$ponyhours', teamleaderonsite='$teamleaderonsite', manageronsite='$manageronsite', staffonsite='$staffonsite', otherstaff='$otherstaff', driver='$driver' ";
$query.= "WHERE id='$jobsheetid'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);


$truckrowsnum=intval($_POST['truckRowsNum']);

for ($i=0; $i<$truckrowsnum; ++$i){
    $jobsheettruckid=$_POST["jobSheetTruckId$i"];
    if ($_POST["sel$i"] !=="NULL"){

    $truckconfig  =  $_POST["sel$i"];
    $pmfn         =  $_POST["pmfn$i"];
    $pmreg        =  $_POST["pmreg$i"];
    $t1fn         =  $_POST["t1fn$i"];
    $t1reg        =  $_POST["t1reg$i"];
    $t2fn         =  $_POST["t2fn$i"];
    $t2reg        =  $_POST["t2reg$i"];
 $commentseachrow =  $_POST["ext$i"];
 
   
$query  = "UPDATE jobsheettrucks SET truckconfiguration='$truckconfig', pmfn='$pmfn', pmreg='$pmreg', t1fn='$t1fn', t1reg='$t1reg', t2fn='$t2fn', t2reg='$t2reg', commentseachrow='$commentseachrow' WHERE id='$jobsheettruckid'";
$result = $conn->query($query);
if (!$result) die ("Database acess failed: " .$conn->error);
    }
}

//echo  $truckrowsnum;



?>
<<script type="text/javascript">
window.location.assign("operations-jobsheets.php");

<!--

//-->
</script>


