<?php

    $dados = array(
        'nome_graf' => 'teste',
        'colunas' => array(
            array(
                'nome' => '',
                'valor' => 10,
                'quantidade' => 10,
                'taxa_desconto' => 30,
                'taxa_juros' => 30,
            )
        ),  
        'total_curso' => 30000,
    );
    // echo '<br><div class="centro" style="background:none;"><a class="link btn" href="graph.php?'.http_build_query($dados).'" size="5">Redirecionar ao gráfico</a></div>';
    // echo "<br><br><br><span class=''>Dados: <pre></span>";
    header('Location: graph.php?'.http_build_query($dados)); 
    // print_r($dados);
    
$conf['site_footer'] = '<p>©2010 All Rights Reserved<br /><em>';
$conf['site_footer'] .= shell_exec("git log -1 --pretty=format:'%h - %s (%ci)' --abbrev-commit `git merge-base local-dev dev`");
$conf['site_footer'] .= '</em></p>';  
?>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<link rel="stylesheet" href="css/app.css"> -->