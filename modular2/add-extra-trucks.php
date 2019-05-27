<?php 

echo $_POST['timelink'];
$jobsheettimelink=$_POST['timelink'];
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');


for ($i=1; $i<=20; $i++){
    if ($_POST["sel$i"] !=="NULL"){
        
        $truckconfig  =  strtoupper($_POST["sel$i"]);
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

?>
<script>
window.location.assign("../user-jobsheet-interface.php")
</script>