<?php
session_start();
$score = $_SESSION['score'];
?>

<!DOCTYPE HTML>
<html lang="en">

<head>
    <title>WATR</title>
    <meta charset="utf-8">
</head>

</script>

<!--Consider showing menu first, then opening form with a button-->
<body style="align-content: center;">
<h1>Your Score:<?php echo $score ?></h1>
</body>

</html>