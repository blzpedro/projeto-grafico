<?php 

    require_once('config.php');
    $titulo = 'teste';
    $query = "select * from grafico";
    $graficos = array();
    
    
    if ($result = $mysqli->query($query)) {
        
        // print_r($result);
        /* fetch associative array */
        while ($row = $result->fetch_assoc()) {
            array_push($graficos, $row);
        }
        
        /* free result set */
        // $result->close();
    }
    $json = json_encode($graficos);
    print_r($json);
?>