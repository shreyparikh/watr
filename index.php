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
<body>
    <script>
        create_form();
    </script>
    <label for="stateDropdown">Select State</label>
    <select id="stateDropdown">
      <?php
        for($i = 0; $i < count($states); $i++){
            echo "<option value='";
            echo $states[$i]["State"];
            echo "'>";
            echo $states[$i]["State"];
            echo "</option>";
        }
      ?>
    </select>
    <input type="submit" value="submit" id="submit"></input>
    <script>
        var select = document.getElementById('stateDropdown');
        form.appendChild(select);
        var submit = document.getElementById('submit');
        form.appendChild(submit);
        
    </script>

</body>

</html>