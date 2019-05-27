<?php 

echo $_POST['totalunitswashed'];
$jobsheettimelink=$_POST['timelink'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');

$prevtotalunitswashed=intval($_POST['totalunitswashed']);

$j=1;
for ($i=1; $i <= 20 ; $i++) {
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
            case "UTE":
                $totalunits=$totalunits+1;
                break;
            case "VAN":
                $totalunits=$totalunits+1;
                break;
            case "Forklift":
                $totalunits=$totalunits+1;
                break;
            case "Single Trailer":
                $totalunits=$totalunits+1;
                break;
            case "Skeleton Trailer":
                $totalunits=$totalunits+1;
                break;
            case "Dolly Trailer":
                $totalunits=$totalunits+1;
                break;
            case "Flat Top Trailer":
                $totalunits=$totalunits+1;
                break;
            case "B Double Trailer":
                $totalunits=$totalunits+2;
                break;
            case "B Double Trailer Skeleton":
                $totalunits=$totalunits+2;
                break;
            case "B Double Trailer Flat Top":
                $totalunits=$totalunits+2;
                break;
            case "Single Combination":
                $totalunits=$totalunits+2;
                break;
            case "B Double Combination":
                $totalunits=$totalunits+3;
                break;
            case "B Double Tanker Trailer":
                $totalunits=$totalunits+2;
                break;
            case "B Double Combination Tanker":
                $totalunits=$totalunits+3;
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
$totalunitswashed+=$prevtotalunitswashed;


for ($i=1; $i<=20; $i++){
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
$query2  = "UPDATE jobsheets SET totalunitswashed='$totalunitswashed' WHERE timelink='$jobsheettimelink'";
$result2 = $conn->query($query2);
if (!$result2) die ("Database acess failed: " .$conn->error);
?>
<script>
window.location.assign("../operations-jobsheets.php")
</script>