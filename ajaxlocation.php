<?php
//Include the database configuration file
$conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');

if(!empty($_POST["customername"])){
    $customername=$_POST["customername"];
    //Fetch all state data
    $query = $conn->query("SELECT DISTINCT location FROM `locations` WHERE `custname` = '$customername' ORDER BY `location` DESC ");
    //Count total number of rows
    $rowCount = $query->num_rows;

    //location option list
    if($rowCount > 0){
        echo '<option value="">Location</option>';
        while($row = $query->fetch_assoc()){ 
            echo '<option value="'.$row['location'].'">'.$row['location'].'</option>';
        }
    }else{
        echo '<option value="">Error</option>';//In case query dosent work
    }
}   

   
?>