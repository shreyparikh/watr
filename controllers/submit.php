<?php
session_start();
$score = 5;
$data = [];
$states = array();
{
    $json = file_get_contents('./data/statescores.json');
    $temp = json_decode($json, true);
    for($i = 0; $I < count($temp); $i++){
        $states[$temp[$i]["State"]] = $temp[$i]["Score"];
    }
}


foreach($_POST as $name => $val){
    $data[$name] = $val;
}


// Personal score eval
{
    if($data['meat'] == "high"){
        $score += 25;
    } else if($data['meat'] == "med"){
        $score += 20;
    } else if($data['meat'] == "low"){
        $score += 15;
    }

    if($data['dairy'] == "high"){
        $score += 15;
    } else if($data['dairy'] == "med"){
        $score += 10;
    } else if($data['dairy'] == "low"){
        $score += 5;
    }

    switch($data['clothfreq']){
        case "weekly":
            $score += 3;
            break;
        case "monthly":
            $score += 2.4;
            break;
        case "bimonthly":
            $score += 1.8;
            break;
        case "seasonally":
            $score += 1.2;
            break;
        case "rarely":
            $score += 0.6;
            break;
    }

    $score += ((int)$data['shower'] * 2.5 / 20);
    $score += ((int)$data['toilet'] / 3);
    if(!isset($data['lowflow_toilet'])){
        $score++;
    }

    if($data['dishwasher'] == "dishwasher"){
        $score += 0.5;
    } else if ($data['dishwasher'] == "handwash"){
        $score += 1;
    }

    $score += ((int)$data['washer'] / 4);
    if(!isset($data['washerHE'])){
        $score++;
    }

    $score += ((int)$data['sink']/3);
}

$score += $states[$data['state']];


$_SESSION['score'] = floor($score * 100) / 100;
header("Location: ../html/response.php");
?>