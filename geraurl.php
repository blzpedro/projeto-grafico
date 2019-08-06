<?php

    $dados = array(
        'colunas' => array(
            array(
                'nome' => 'p1',
                'valor' => 10,
            ),
            array(
                'nome' => 'p2',
                'valor' => 20,
            ),
            array(
                'nome' => 'p3',
                'valor' => 30,
            ),
            array(
                'nome' => 'p4',
                'valor' => 40,
            ),
            array(
                'nome' => 'p5',
                'valor' => 50,
            ),
            array(
                'nome' => 'p6',
                'valor' => 60,
            ),
            array(
                'nome' => 'p7',
                'valor' => 50,
            ),
            array(
                'nome' => 'p8',
                'valor' => 50,
            ),
            array(
                'nome' => 'p9',
                'valor' => 50,
            ),
            array(
                'nome' => 'p10',
                'valor' => 100,
            ),
        ),  
        'valor_total' => 30000,
    );
    echo '<a href="https://projeto-grafico.herokuapp.com?'.http_build_query($dados).'&total_curso=30000" size="5">grafico</a>';
    echo "<br><br><br>Dados: <br><pre>";
    // print_r($dados);
?>