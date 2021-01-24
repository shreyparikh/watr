<!DOCTYPE HTML>
<html lang="en">

<?php
    $json = file_get_contents('./data/statescores.json');
    $states = json_decode($json, true);
    
?>
<head>
    <title>WATR</title>
    <meta charset="utf-8">
</head>
<link rel="stylesheet" href="style/styles.css">
<script src="scripts/watr.js"></script>

<!--Consider showing menu first, then opening form with a button-->
<body onload="create_form()">
    
   
</body>

</html>