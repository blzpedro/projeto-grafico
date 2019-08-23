<?php 
require_once('config.php');
$colunas = json_decode($_REQUEST['dados']);
$titulo = end($colunas);
array_pop($colunas);

echo "<pre>";

//busca grafico
$select = "select * from grafico where graf_nome ='".$titulo."'";

//verifica se grafico ja existe
$colunasBanco = $mysqli->query($select);
print_r($colunasBanco);
if ($colunasBanco->num_rows == 0) {
    //grafico não existe
    
    //salva novo grafico
    foreach($colunas as $coluna){
        $tipoLinha = $coluna[0];
        $x = str_replace("x","",$coluna[1]);
        $y = str_replace("y","",$coluna[2]);
        $sql = "INSERT INTO grafico 
                (graf_nome, tipo_linha, x, y)
                VALUES 
                ('".$titulo."',".$tipoLinha.", '".$x."' ,".$y." );";
        $con->query($sql);
        // echo $sql;
    }
}else{
    //grafico ja existe
    // print_r($colunas);
    //atualiza grafico existente
    foreach($colunas as $coluna){
        $tipoLinha = $coluna[0];
        $x = str_replace("x","",$coluna[1]);
        $y = str_replace("y","",$coluna[2]);
        $sql = "UPDATE grafico
                SET y = ".$y."
                where 
                graf_nome = '".$titulo."'
                and tipo_linha = '".$tipoLinha."'
                and x = '".$x."';";
                $mysqli->query($sql);
                // echo $sql;
    }
}
 ?>