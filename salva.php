<?php 
require_once('config.php');
$colunas = json_decode($_REQUEST['dados']);
$nome = json_decode($_REQUEST['dados']);
$titulo = end($nome);
foreach($colunas as $coluna){
    $x = str_replace("x","",$coluna[0]);
    $y = str_replace("y","",$coluna[1]);
    // echo $x."-".$y."<br>";
    $sql = "INSERT INTO grafico 
    (graf_nome, x, y)
    VALUES ('".$titulo."', '".$x."' ,".$y." )";
    $con->query($sql);
}
// $con->query($con,"SELECT * FROM grafico");
// echo "<pre>";
// $aa = mysqli_query($con,"SELECT * FROM grafico");
// print_r($aa);





// ?>