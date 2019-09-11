<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Gráfico dinâmico e interativo</title>
    <link rel="stylesheet" href="css/app.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.0/css/ion.rangeSlider.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.0/js/ion.rangeSlider.min.js"></script>
    <script src="js/jquery.js"></script>
    <!-- <script src="js/multirange.js"></script> -->
    <link rel="shortcut icon" href="linegraph.png" type="image/x-icon">
</head>
<script>
    var colunas = <?php echo json_encode($_REQUEST); ?>;
</script>

<body id="fullscreen">
    <br>
        <div class="btn-salvar">            
            <a class="waves-effect waves-light btn tooltipped btn-floating" data-position="left"
                data-tooltip="Salvar gráfico" id="save_button"><i class="material-icons save">save</i></a>
        </div>
    </div>
    <div id="exponencial"></div>
    <div class="box-dia30">
        <input type="text" class="input-dia30 dia30" disabled>
        <i class="small remove diminuir-dia30 chevron material-icons" style="color: red" id="reduz_dia30">remove</i>
        <i class="small add aumentar-dia30 chevron material-icons" style="color: green" id="aumenta_dia30">add</i>
    </div>
    <div class="box-dia5">
        <input type="text" class="input-dia5 dia5" disabled>
        <i class="small remove diminuir-dia5 chevron material-icons" style="color: red" id="reduz_dia5">remove</i>
        <i class="small add aumentar-dia5 chevron material-icons" style="color: green" id="aumenta_dia5">add</i>
    </div>
    <div class="box-vcto">
        <input type="text" class="input-vcto vcto" disabled>
        <i class="small remove diminuir-vcto chevron material-icons" style="color: red" id="reduz_vcto">remove</i>
        <i class="small add aumentar-vcto chevron material-icons" style="color: green" id="aumenta_vcto">add</i>
    </div>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/maps/modules/map.js"></script>
<script src="https://rawgithub.com/highcharts/draggable-points/master/draggable-points.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="js/functions.js"></script>
<script src="js/highcharts.js"></script>

</html>