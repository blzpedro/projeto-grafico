<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Gráfico dinâmico e interativo</title>
        <link rel="stylesheet" href="css/app.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="js/jquery.js"></script>
        <link rel="shortcut icon" href="linegraph.png" type="image/x-icon">
</head>
<script>
    var colunas = <?php echo json_encode($_REQUEST); ?>;
</script>
<body id="fullscreen">
    <div class="bg">
        <div class="titulo">
            <div class="input-field bg">
                <i class="material-icons prefix">search</i>
                <input type="text" id="titulo" class="autocomplete" placeholder="Nome do gráfico" required>
            </div>
        </div>
    </div>
    <div id="exponencial"></div>
    <div class="row">
        <div class="centro">
            <a class="waves-effect waves-light btn tooltipped btn-floating" data-position="left" data-tooltip="Salvar gráfico" id="save_button"><i class="material-icons">save</i></a>
            <a onclick="openFullscreen();" class="waves-effect fullscreen waves-light btn tooltipped btn-floating" data-position="right" data-tooltip="Tela cheia" id="fullscreen"><i class="material-icons">fullscreen</i></a>
        </div>
    </div>
    <footer>
    <?php
        $conf['site_footer'] = '<p>©2010 All Rights Reserved<br /><em>';
        $conf['site_footer'] .= shell_exec("git log -1 --pretty=format:'%h - %s (%ci)' --abbrev-commit `git merge-base local-dev dev`");
        $conf['site_footer'] .= '</em></p>'; 
    ?>
    </footer>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/maps/modules/map.js"></script>
<script src="https://rawgithub.com/highcharts/draggable-points/master/draggable-points.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="js/functions.js"></script>
<script src="js/highcharts.js"></script>
</html>
