<?php 

    require_once('config.php');
    $dados = $_REQUEST;
    $titulo = $dados['nome_graf'];
    $query = "select * from graficos where graf_nome ='".$titulo."';";
    $graficos = array();
    
    if ($result = $mysqli->query($query)) {
        
        /* fetch associative array */
        while ($row = $result->fetch_assoc()) {
            array_push($graficos, $row);
        }
        
    }
    $json = json_encode($graficos);
    echo $json;
?>