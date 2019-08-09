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
    $dados = $_REQUEST;
    $dados_json = json_encode($dados);
?>
<script>
    var colunas = <?php echo json_encode($_REQUEST); ?>;
</script>
<body id="fullscreen">
    <div id="exponencial"></div>
    <div id="reta" class="oculto"></div>
    <div id="angular" class="oculto"></div>
    <div id="perso" class="oculto"></div>
    <div id="drop"></div>
    <div class="centro">
        <a class="waves-effect waves-light btn tooltipped btn-floating" data-position="left" data-tooltip="Salvar gráfico" id="save_button"><i class="material-icons">save</i></a>
        <a onclick="openFullscreen();" class="waves-effect fullscreen waves-light btn tooltipped btn-floating" data-position="right" data-tooltip="Tela cheia" id="fullscreen"><i class="material-icons">fullscreen</i></a>
    </div>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/maps/modules/map.js"></script>
<script src="https://rawgithub.com/highcharts/draggable-points/master/draggable-points.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="js/functions.js"></script>
<script src="js/highcharts.js"></script>
</html>
