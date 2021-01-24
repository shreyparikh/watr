<?php

if(isset($_POST['meat'])){
    $meat = $_POST['meat'];
}

if(isset($_POST['dairy'])){
    $dairy = $_POST['dairy'];
}

if(isset($_POST['clothing'])){
    $clothing = $_POST['clothfreq'];
}

header("Location: ../html/response.php");
?>