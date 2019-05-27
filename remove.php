<?php
$con =  new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');

$id = $_POST['id'];



$querya = "SELECT truckconfiguration FROM jobsheettrucks WHERE id='$id'";
$resulta= $con->query($querya);
$row = $resulta->fetch_array(MYSQLI_ASSOC);
$configtodelete=$row['truckconfiguration'];
if(!$resulta) echo "Select1 Failed::: $querya<br>".$con->error."<br><br>";


 $totalunits=0;
switch ($configtodelete){
    case "SINGLE RIGID BOX":
        $totalunits=1;
        break;
    case "SINGLE RIGID FLAT TOP":
        $totalunits=1;
        break;
    case "BOGIE RIGID  ":
        $totalunits=1;
        break;
    case "PRIME MOVER DAY CAB":
        $totalunits=1;
        break;
    case "PRIME MOVER SLEEPER CAB":
        $totalunits=1;
        break;
    case "SINGLE COMBINATION BOX":
        $totalunits=2;
        break;
    case "SINGLE COMBINATION SKEL":
        $totalunits=2;
        break;
    case "SINGLE COMBINATION FLAT TOP":
        $totalunits=2;
        break;
    case "SINGLE COMBINATION TANKER 19M":
        $totalunits=2;
        break;
    case "SINGLE COMBINATION TANKER 25M":
        $totalunits=2;
        break;
    case "SINGLE COMBINATION CAR CARRIER":
        $totalunits=2;
        break;
    case "B DOUBLE COMBINATION BOX":
        $totalunits=3;
        break;
    case "B DOUBLE COMBINATION SKEL":
        $totalunits=3;
        break;
    case "B DOUBLE COMBINATION FLAT TOP":
        $totalunits=3;
        break;
    case "B DOUBLE COMBINATION TANKER":
        $totalunits=3;
        break;
    case "B DOUBLE COMBINATION CAR CARRIER":
        $totalunits=3;
        break;
    case "SINGLE TRAILER BOX":
        $totalunits=1;
        break;
    case "SINGLE TRAILER SKEL":
        $totalunits=1;
        break;
    case "SINGLE TRAILER FLAT TOP":
        $totalunits=1;
        break;
    case "SINGLE TRAILER TANKER 19M":
        $totalunits=1;
        break;
    case "SINGLE TRAILER TANKER 25M":
        $totalunits=1;
        break;
    case "B DOUBLE TRAILER BOX":
        $totalunits=2;
        break;
    case "B DOUBLE TRAILER SKEL":
        $totalunits=2;
        break;
    case "B DOUBLE TRAILER FLAT TOP":
        $totalunits=2;
        break;
    case "B DOUBLE TRAILER TANKER":
        $totalunits=2;
        break;
    case "B DOUBLE TRAILER CAR CARRIER":
        $totalunits=2;
        break;
    case "FORKLIFT SMALL":
        $totalunits=1;
        break;
    case "FORKLIFT MEDIUM":
        $totalunits=1;
        break;
    case "FORKLIFT LARGE":
        $totalunits=1;
        break;
    case "VAN/UTE/CAR  ":
        $totalunits=1;
        break;
    case "DOLLY TRAILER  ":
        $totalunits=1;
        break;
    case "OTHER 1  ":
        $totalunits=1;
        break;
    case "OTHER 2  ":
        $totalunits=2;
        break;
    case "OTHER 3  ":
        $totalunits=3;
        break;
        
}
$deletethismuch=$totalunits;




//take this truck id and get its time link to job sheet
//$conna = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$querya = "SELECT jobsheettimelink FROM jobsheettrucks WHERE id='$id'";
$resulta= $con->query($querya);
$row = $resulta->fetch_array(MYSQLI_ASSOC);
$updatelinktojobsheet=$row['jobsheettimelink'];
if(!$resulta) echo "Select1 Failed::: $querya<br>".$con->error."<br><br>";


// Taking total units washed from database and subtracting the Switch statement value from that
$query = "SELECT totalunitswashed FROM jobsheets WHERE timelink='$updatelinktojobsheet'";
$result= $con->query($query);
$row = $result->fetch_array(MYSQLI_ASSOC);
$totalunitswashed=$row['totalunitswashed'];
$newvalue=$totalunitswashed-$deletethismuch;
if(!$result) echo "Select1 Failed::: $query<br>".$conn->error."<br><br>";



//$connb = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$queryb = "UPDATE jobsheets SET totalunitswashed='$newvalue' WHERE timelink='$updatelinktojobsheet'";
$resultb= $con->query($queryb);
if(!$resultb) echo "Select1 Failed::: $queryb<br>".$con->error."<br><br>";

if($id > 0){
    
    // Check record exists
    $checkRecord = mysqli_query($con,"SELECT * FROM jobsheettrucks WHERE id=".$id);
    $totalrows = mysqli_num_rows($checkRecord);
    
    if($totalrows > 0){
        // Delete record
        $query = "DELETE FROM jobsheettrucks WHERE id=".$id;
        mysqli_query($con,$query);
        echo 1;
        exit;
    }
}

echo 0;
exit;