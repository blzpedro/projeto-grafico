<!DOCTYPE html>
<html lang="pt-br">
<!--     ?colunas%5B0%5D%5Bnome%5D=p1&colunas%5B0%5D%5Bvalor%5D=15&colunas%5B1%5D%5Bnome%5D=p2&colunas%5B1%5D%5Bvalor%5D=30&colunas%5B2%5D%5Bnome%5D=p3&colunas%5B2%5D%5Bvalor%5D=45&colunas%5B3%5D%5Bnome%5D=p4&colunas%5B3%5D%5Bvalor%5D=60&colunas%5B4%5D%5Bnome%5D=p5&colunas%5B4%5D%5Bvalor%5D=75&colunas%5B5%5D%5Bnome%5D=p6&colunas%5B5%5D%5Bvalor%5D=90&colunas%5B6%5D%5Bnome%5D=p7&colunas%5B6%5D%5Bvalor%5D=100&total_curso=30000 -->
    <!-- http://localhost:8000/projeto-grafico?colunas%5B0%5D%5Bnome%5D=p1&colunas%5B0%5D%5Bvalor%5D=15&colunas%5B1%5D%5Bnome%5D=p2&colunas%5B1%5D%5Bvalor%5D=30&colunas%5B2%5D%5Bnome%5D=p3&colunas%5B2%5D%5Bvalor%5D=45&colunas%5B3%5D%5Bnome%5D=p4&colunas%5B3%5D%5Bvalor%5D=60&colunas%5B4%5D%5Bnome%5D=p5&colunas%5B4%5D%5Bvalor%5D=75&colunas%5B5%5D%5Bnome%5D=p6&colunas%5B5%5D%5Bvalor%5D=90&colunas%5B6%5D%5Bnome%5D=p7&colunas%5B5%5D%5Bvalor%5D=90&total_curso=30000 -->
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
    var colunas = <?php echo $dados_json; ?>;
</script>
<body>
    <div id="exponencial"></div>
    <div id="reta" class="oculto"></div>
    <div id="angular" class="oculto"></div>
    <div id="perso" class="oculto"></div>
    <br>
    <div id="drop"></div>
    <h3 class="tipo">Tipos de gráficos</h3>
    <div class="centro">
        <a class="waves-effect waves-light btn tooltipped btn-floating exponencial" data-position="left" data-tooltip="Gráfico exponencial"><i class="material-icons right">multiline_chart</i></a>
        <a class="waves-effect waves-light btn tooltipped btn-floating reta" data-tooltip="Gráfico em reta"><i class="material-icons right">arrow_forward</i></a>
        <a class="waves-effect waves-light btn tooltipped btn-floating angular" data-tooltip="Gráfico angular"><i class="material-icons right">call_made</i></a>
        <a class="waves-effect waves-light btn tooltipped btn-floating perso" data-position="right" data-tooltip="Gráfico personalizado"><i class="material-icons right">show_chart</i></a>
        <br>
        <div id="compare" class="switch oculto">
        Comparar gráficos
        <br>
            <label>
            Off
            <input type="checkbox" id='compare'>
            <span class="lever"></span>
            On
            </label>
        </div>
    </div>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://rawgithub.com/highcharts/draggable-points/master/draggable-points.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="js/functions.js"></script>
<script src="js/highcharts.js"></script>
</html>
