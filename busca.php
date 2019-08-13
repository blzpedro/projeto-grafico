<?php 

    require_once('config.php');
    $titulo = 'teste';
    $query = "select distinct(graf_nome) from grafico";
    // print_r($retorno);
    $graficos = array();
    
    
    if ($result = $mysqli->query($query)) {
        
        // print_r($result);
        /* fetch associative array */
        while ($row = $result->fetch_assoc()) {
            array_push($graficos, $row['graf_nome']);
        }
        
        /* free result set */
        // $result->close();
    }
    echo json_encode($graficos);
?>