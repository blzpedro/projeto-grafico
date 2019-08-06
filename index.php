<?php

    $dados = array(
        'colunas' => array(
            array(
                'nome' => 'P1',
                'valor' => 10,
            ),
            array(
                'nome' => 'P2',
                'valor' => 20,
            ),
            array(
                'nome' => 'P3',
                'valor' => 30,
            ),
            array(
                'nome' => 'P4',
                'valor' => 40,
            ),
            array(
                'nome' => 'P5',
                'valor' => 50,
            ),
            array(
                'nome' => 'P6',
                'valor' => 60,
            ),
            array(
                'nome' => 'P7',
                'valor' => 50,
            ),
            array(
                'nome' => 'P8',
                'valor' => 50,
            ),
            array(
                'nome' => 'P9',
                'valor' => 50,
            ),
            array(
                'nome' => 'P10',
                'valor' => 100,
            ),
        ),  
        'valor_total' => 30000,
    );
    echo '<br><div class="centro"><a class="link btn" href="https://projeto-grafico.herokuapp.com/graph.php?'.http_build_query($dados).'&total_curso=30000" size="5">Redirecionar ao gráfico</a></div>';
    echo "<br><br><br><span class=''>Dados: <pre></span>";
    print_r($dados);
?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<link rel="stylesheet" href="css/app.css">