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

</script>

<!--Consider showing menu first, then opening form with a button-->
<body onload="create_form()">
    <div class="dropdown">
        <button onclick="drop()" class="dropbtn">Dropdown</button>
        <div id="stateDropdown" class="state-content">
          <?php
            for($i = 0; $i < count($states); $i++){
                echo "<a href='#'>";
                echo $states[$i]["State"];
                echo "</a>";
            }
          ?>
        </div>
      </div>
</body>

</html>