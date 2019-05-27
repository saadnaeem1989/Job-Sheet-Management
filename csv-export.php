<?php
$filename = "Jobsheet-".date("d.m.Y").".csv";
// output headers so that the file is downloaded rather than displayed
header('Content-type: text/csv');
header('Content-Disposition: attachment; filename="'.$filename.'"');

// do not cache the file
header('Pragma: no-cache');
header('Expires: 0');

// create a file pointer connected to the output stream
$file = fopen('php://output', 'w');
$csvtrucks=$_POST['csvtrucks'];
fputcsv($file, array('Thor Mobile Truck Wash PO BOX 798 Ashmore City QLD 4214 Admin: 0437 336 344 Email: admin@thormobile.com.au'));
fputcsv($file, array(' ', ' ', ' ', ' ', ' '));
// send the column headers
fputcsv($file, array('CUSTOMER NAME', 'LOCATION', 'WEEK', 'DATE','PURCHASE ORDER NO'));



$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query = "SELECT customername, customerlocation, week, date, purchaseorderno FROM jobsheets WHERE timelink='$csvtrucks'";
$result= $conn->query($query);
if(!$result) echo "Select1 Failed::: $query<br>".$conn->error."<br><br>";
while ( $row = $result->fetch_array(MYSQLI_ASSOC))
{
    fputcsv($file, $row);
}
fputcsv($file, array(' ', ' ', ' ', ' ', ' '));
// Second Row
$connb = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
fputcsv($file, array('PRE-JOB CHECKLIST REQUIREMENTS', 'AUTHORIZED BY', 'TOTAL UNITS WASHED', 'WASH PLANT NO.', 'ODOMETER', 'HONDA HOURS', 'TOTAL MAN HOURS','DRIVER HRS','PRE JOB COMMENTS'));
$queryb = "SELECT requirements, signedby, totalunitswashed, truckno, odometer, hondahours, totalmanhours, driverhours, prejobcomments FROM jobsheets WHERE timelink='$csvtrucks'";
$resultb= $connb->query($queryb);
if(!$resultb) echo "Select1 Failed::: $queryb<br>".$connb->error."<br><br>";
while ( $rowb = $resultb->fetch_array(MYSQLI_ASSOC))
{
    fputcsv($file, $rowb);
}
fputcsv($file, array(' ', ' ', ' ', ' ', ' '));
//Third Row
$connc = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
fputcsv($file, array('TIME ONSITE','TIME OFFSITE','BREAK START','BREAK FINISH','STAFF ONSITE', 'OTHER STAFF', 'TEAM LEADER ONSITE', 'MANAGER ONSITE', 'DRIVER'));
$queryc = "SELECT timeonsite, timeoffsite, breakstart, breakfinish, staffonsite, otherstaff, teamleaderonsite, manageronsite, driver FROM jobsheets WHERE timelink='$csvtrucks'";
$resultc= $connc->query($queryc);
if(!$resultc) echo "Select1 Failed::: $queryc<br>".$connc->error."<br><br>";
while ( $rowc = $resultc->fetch_array(MYSQLI_ASSOC))
{
    fputcsv($file, $rowc);
}



















fputcsv($file, array(' ', ' ', ' ', ' ', ' '));
fputcsv($file, array('Invoice No.','_________','Invoice Amt','_________','PO NO.','_________'));
// Sample data. This can be fetched from mysql too
/*$data = array(
 array('Data 11', 'Data 12', 'Data 13', 'Data 14', 'Data 15'),
 array('Data 21', 'Data 22', 'Data 23', 'Data 24', 'Data 25'),
 array('Data 31', 'Data 32', 'Data 33', 'Data 34', 'Data 35'),
 array('Data 41', 'Data 42', 'Data 43', 'Data 44', 'Data 45'),
 array('Data 51', 'Data 52', 'Data 53', 'Data 54', 'Data 55')
 );

 // output each row of the data
 foreach ($data as $row)
 {
 fputcsv($file, $row);
 }
 */

$csvtrucks=$_POST['csvtrucks'];

fputcsv($file, array(' ', ' ', ' ', ' ', ' '));
fputcsv($file, array(' ', ' ', ' ', ' ', ' '));
// Open the connection
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
fputcsv($file, array('NO. ','SALES CODE','UNITS QTY','CONFIGURATION', 'PM FLEET NO.', 'PM REGO', 'T1 FLEET NO.', 'T1 REGO', 'T2 FLEET NO.', 'T2 REGO', 'EXTRAS',));
fputcsv($file, array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',''));
//query the database
$queryz = "SET @row_number = 0";
$result= $conn->query($queryz);
 $query = "
SELECT 
    (@row_number:=@row_number + 1) AS num, ' ' as TempField2, ' ' as TempField3, truckconfiguration, pmfn, pmreg, t1fn, t1reg, t2fn, t2reg, commentseachrow FROM jobsheettrucks WHERE jobsheettimelink='$csvtrucks'";
$result= $conn->query($query);
if(!$result) echo "Select Failed::: $query<br>".$conn->error."<br><br>";

// loop over the rows, outputting them
//for ($i=1;$i<=10;$i++){
  //  $row = $result->fetch_array(MYSQLI_ASSOC);
    //



while ( $row = $result->fetch_array(MYSQLI_NUM))
{
   
  
    fputcsv($file,$row);
 
    
}
//}
// free result set
//    mysqli_free_result($result);

// close the connection
mysqli_close($conn);

$conn2 = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
$query2= "UPDATE jobsheets SET exported='1' WHERE timelink='$csvtrucks'";
$result2= $conn2->query($query2);
if(!$result2) echo "Select Failed::: $query2<br>".$conn2->error."<br><br>";
exit();

?>