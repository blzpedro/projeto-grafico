<?php 

    require_once('config.php');
    $dados = $_REQUEST;
    $titulo = $dados['nome_graf'];

    if (!strlen($titulo)) die(0);

    $query = "select * from graficos where graf_nome ='".$titulo."';";

    //file_put_contents('/tmp/alavancagem.txt', $query.PHP_EOL, FILE_APPEND);

    $graficos = array();
    
    if ($result = $mysqli->query($query)) {
        
        /* fetch associative array */
        while ($row = $result->fetch_assoc()) {
            unset($row['curso'], $row['turno'], $row['campus'], $row['ingresso']);
            array_push($graficos, $row);
        }
        
    }
    
    $json = json_encode($graficos);

    //file_put_contents('/tmp/alavancagem.txt', $json.PHP_EOL.PHP_EOL, FILE_APPEND);

    echo $json;
