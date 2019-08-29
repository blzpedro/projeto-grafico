<?php 
require_once('config.php');
$linhas = json_decode($_REQUEST['dados']);
$titulo = $linhas[0]->titulo;
$retorno = array('erro' => 'none');

// echo "<pre>";
// print_r($linhas);


//verifica se grafico ja existe
$select = "select * from graficos where graf_nome ='".$titulo."'";
$buscaBanco = $mysqli->query($select);

    if ($buscaBanco->num_rows == 0) {
        //grafico não existe
        
        //salva novo grafico
        foreach($linhas as $linha){
            $tipoLinha = $linha->tipoLinha;
            $mensalidade = $linha->mensalidade;
            $qtd_colunas = $linha->qtdColunas;
            $valores_y = $linha->valoresY;
            $sql = "INSERT INTO graficos (tipo_linha, graf_nome, mensalidade, qtd_colunas, valores_y) 
                    VALUES (".$tipoLinha.", '".$titulo."', ".$mensalidade.", ".$qtd_colunas.", '".$valores_y."');";
            // $con->query($sql);
            if($con->query($sql)){
            }else{
                $retorno['erro'] = $con->error;
            }
            // echo $sql;
        }
    }else{
        //grafico ja existe
        
        //atualiza grafico existente
        foreach($linhas as $linha){
            $tipoLinha = $linha->tipoLinha;
            $mensalidade = $linha->mensalidade;
            $qtd_colunas = $linha->qtdColunas;
            $valores_y = $linha->valoresY;
            $sql = "UPDATE graficos  SET
                    mensalidade = ".$mensalidade.", 
                qtd_colunas = ".$qtd_colunas.", 
                valores_y = '".$valores_y."'
                    WHERE graf_nome = '".$titulo."' 
                    and tipo_linha = ".$tipoLinha.";";
                    // $mysqli->query($sql);
                    if($mysqli->query($sql)){
                    }else{
                        $retorno['erro'] = $mysqli->error;
                    }
                    // echo $sql;
        }
    }

    echo json_encode($retorno);
 ?>