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
<h2>About your WATR score:
Your WATR score, representing the inefficiency of your water consumption, is calculated as the sum of two scores: a personal score and a regional score. Your personal score depends on many factors, including your appliance use, clothing purchases, and hygiene habits. Most importantly, it depends on your diet—meat and dairy consumption is one of the greatest contributors to water overuse. Your regional score depends on your state’s efficiency in using the water it withdraws. States that use more water per resident, indicating more inefficiency, score higher than states that use less water. Higher WATR scores represent more waste, so you should work to lower your WATR score by making choices like decreasing your meat consumption or lowering your appliance usage.
</h2>
</body>

</html>