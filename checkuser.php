<?php
@ob_start();
session_start();
$error = $user = $pass = "";



if (isset($_POST['user']))
{
    $user =$_POST['user'];
    $pass =$_POST['password'];
    if ($user=="admin" && $pass=="superadmin@thormobile"){
        $_SESSION['username'] = $user;
        $_SESSION['password'] = $pass;
        header("location:interface.php");
    exit();
    }
    elseif ($user=="superoperator" && $pass=="superoperator@thormobile"){
        $_SESSION['username'] = $user;
        $_SESSION['password'] = $pass;
        header("location:operations-interface.php");
        exit();
    }
    $conn = new mysqli('ftp.thormobilemanagement.com','thormob3_mel','thormob3_mel','thormob3_melbourne');
    if ($user == "" || $pass == "")
        $error = "Not all fields were entered<br>";
        else
        {
            $result =$conn->query("SELECT username,password,level FROM users
        WHERE username='$user' AND password='$pass'");
            $row = $result->fetch_array(MYSQLI_ASSOC);
            $level=$row['level'];
            if ($result->num_rows == 0)
            {
                $error = "<span class='error'>Username/Password
                  invalid</span><br><br>";
            }
            else
            {
                $_SESSION['username'] = $user;
                $_SESSION['password'] = $pass;
                if ($level=="Wash Crew"){
                    header("location:jobsheet.php");
                    exit();
                }
                elseif ($level=="Manager"){
                    header("location:operations-interface.php");
                    exit();
                }
            }
        }
}
?>

<?php
header("location:index.php?error=1");


?>

