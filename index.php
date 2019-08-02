<!DOCTYPE html>
<html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Gráfico interativo</title>
        <link rel="stylesheet" href="css/app.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="js/jquery.js"></script>
</head>
<?php  
    $dados = $_REQUEST['colunas'];
    $dados_json = json_encode($dados);

?>
<script>
    var colunas = <?php echo $dados_json; ?>;
</script>
<body>
    <div id="exponencial"></div>
    <div id="reta" class="oculto"></div>
    <div id="angular" class="oculto"></div>
    <div id="perso" class="oculto"></div>
    <div id="drop"></div>
    <h3 class="tipo">Tipos de gráficos</h3>
    <div class="centro">
        <a class="waves-effect waves-light btn exponencial"><i class="material-icons right">multiline_chart</i>Gráfico exponencial</a>
        <a class="waves-effect waves-light btn reta"><i class="material-icons right">arrow_forward</i>Gráfico em reta</a>
        <a class="waves-effect waves-light btn angular"><i class="material-icons right">call_made</i>Gráfico angular</a>
        <a class="waves-effect waves-light btn perso"><i class="material-icons right">show_chart</i>Gráfico personalizado</a>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://rawgithub.com/highcharts/draggable-points/master/draggable-points.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="js/functions.js"></script>
<script src="js/highcharts.js"></script>
</html>