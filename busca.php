<?php 

    require_once('config.php');
    $titulo = 'teste';
    $query = "select * from grafico";
    $graficos = array();
    
    
    if ($result = $mysqli->query($query)) {
        
        /* fetch associative array */
        while ($row = $result->fetch_assoc()) {
            array_push($graficos, $row);
        }
        
    }
    $json = json_encode($graficos);
    print_r($json);
?>