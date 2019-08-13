<?php 
require_once('config.php');
$colunas = json_decode($_REQUEST['dados']);
$titulo = end($colunas);
array_pop($colunas);

echo "<pre>";

//busca grafico
$select = "select * from grafico where graf_nome ='".$titulo."'";
$retorno = $con->query($select);
// print_r($retorno->num_rows);

//verifica se grafico ja existe
if($retorno->num_rows > 0){
    //grafico ja existe

    //atualiza grafico existente
    foreach($colunas as $coluna){
        $x = str_replace("x","",$coluna[0]);
        $y = str_replace("y","",$coluna[1]);
        $sql = "UPDATE grafico
                SET y = ".$y."
                where 
                    graf_nome = '".$titulo."'
                and x = '".$x."';";
        $con->query($sql);
        // echo $sql;
    }
}else{
    //grafico não existe
    
    //salva novo grafico
    foreach($colunas as $coluna){
        $x = str_replace("x","",$coluna[0]);
        $y = str_replace("y","",$coluna[1]);
        $sql = "INSERT INTO grafico 
        (graf_nome, x, y)
        VALUES ('".$titulo."', '".$x."' ,".$y." )";
        $con->query($sql);
    }
}
 ?>