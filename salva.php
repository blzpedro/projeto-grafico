<?php 
require_once('config.php');
$colunas = json_decode($_REQUEST['dados']);
foreach($colunas as $coluna){
    $x = str_replace("x","",$coluna[0]);
    $y = str_replace("y","",$coluna[1]);
    // echo $x."-".$y."<br>";
    $sql = "INSERT INTO grafico 
    (graf_nome, x, y)
    VALUES ('graf1', '".$x."' ,".$y." )";
    
    if (!$con->query($sql)) {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
}






// ?>