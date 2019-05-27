<?php // Example 26-2: header.php
  session_start();

  echo "<!DOCTYPE html>\n<html><head>";

  

  

  if (isset($_SESSION['username']))
  {
    $loggedin = TRUE;
    
  }
  else{
      $loggedin = FALSE;
  }
 
 
?>
