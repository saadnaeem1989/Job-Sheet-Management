<?php // Example 26-12: logout.php
  require_once 'header.php';

  if (isset($_SESSION['username']))
  {
    session_destroy();
    
  }
  else echo "<div class='main'><br>" .
            "You cannot log out because you are not logged in";
?>

<script>
window.location.assign("index.php")
</script>