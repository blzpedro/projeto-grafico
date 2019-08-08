<?php 
$cont = 0;
$valor = 1;
$divisor = 2;

while($cont < 100){
    $cont++;
    echo $valor;
    $valor = $valor * $divisor;
    echo "<br>";
}
?>