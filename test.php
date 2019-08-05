<?php 
//grafico angular
$y_min = current($_REQUEST['colunas'])['valor'];
$y_max = end($_REQUEST['colunas'])['valor'];
$y_atual = $y_min;
$num_colunas = 10;
$colunas = array();

// variação = ▲X / ▲Y
$y_variacao = ($y_max - $y_min)/$num_colunas;
array_push($colunas,  $y_atual);
while($num_colunas > 0){
//monta array com os valores para o grafico
    $y_atual = $y_atual + $y_variacao ;
    array_push($colunas,  $y_atual);
    $num_colunas--;
}


echo "<pre>";
print_r($colunas);
// print_r($_REQUEST);
var_dump(sizeof($_REQUEST['colunas']));
// print_r($y_max);

echo "</br></br>a variação é de: ".$y_variacao." %";
?>