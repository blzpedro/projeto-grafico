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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.0/css/ion.rangeSlider.min.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.0/js/ion.rangeSlider.min.js"></script>
        <script src="js/jquery.js"></script>
        <script src="js/multirange.js"></script>
        <link rel="shortcut icon" href="linegraph.png" type="image/x-icon">
</head>
<script>
    var colunas = <?php echo json_encode($_REQUEST); ?>;
</script>
<body id="fullscreen">
    <div class="bg">
        <!-- <div class="titulo">
            <div class="input-field bg">
                <i class="material-icons prefix">search</i>
                <input type="text" id="titulo" class="autocomplete" placeholder="Nome do gráfico" required>
            </div>
        </div> -->
    <!-- <div class="inputDesc">
        <form action="" method="post">
            <label for="primeiroDesc">Desconto do primeiro período</label>
            <input id="primeiroDesc" type="text" placeholder="Desconto inicial">
            <button type="submit" class="btn">Atualizar</button>
        </form>
    </div> -->
    <div class="filtro">
        <div class="input-field bg">
            <a class="waves-effect waves-light btn tooltipped modal-trigger" data-position="left" data-tooltip="Filtros" id="filter_list" href="#filtro"><i class="material-icons">filter_list</i></a>
        </div>        
    </div>    
    <div id="filtro" class="modal">
        <h4>Filtros</h4>
        <br>
        <div class="row vertical-center">
            <form class="col s12" action="post">
                <div class="row">
                    <div class="input-field col s12">
                        <div id="valor"></div>
                        <div class="row slider-labels">
                            <div class="col s6 center-align"><strong>Valor inicial:</strong> <span id="valor_inicial"></span></div>
                            <div class="col s6 center-align"><strong>Valor final:</strong> <span id="valor_final"></span></div>
                            <form>
                                <input type="hidden" id="field_inicial" name="valor_inicial" value="">
                                <input type="hidden" id="field_final" name="valor_final" value="">
                            </form>     
                        </div>
                    </div> 
                </div>   
                <div class="row">
                    <div class="input-field col s12">
                        <div id="desconto"></div>
                        <div class="row slider-labels">
                            <div class="col s6 center-align"><strong>Desconto mínimo:</strong> <span id="desc_min"></span></div>
                            <div class="col s6 center-align"><strong>Desconto máximo:</strong> <span id="desc_max"></span></div>
                            <input type="hidden" id="field_descMin" name="field_descMin" value="">
                            <input type="hidden" id="field_descMax" name="field_descMax" value=""> 
                        </div>
                    </div> 
                </div>   
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="" id="periodos" type="number" max="12">
                        <label for="periodos">Quantidade de períodos(máx. 12)</label>
                    </div>
                </div>         
                <div class="row">
                    <div class="input-field col s6">
                        <select id="regioes">
                            <option value="" disabled selected>Escolha uma região</option>
                            <option value="Região 1">Região 1</option>
                            <option value="Região 2">Região 2</option>
                            <option value="Região 3">Região 3</option>
                            <option value="Região 4">Região 4</option>
                            <option value="Região 5">Região 5</option>
                        </select>
                        <label>Regiões</label>
                    </div>
                    <div class="input-field col s6">
                        <select id="polos">
                            <option value="" disabled selected>Escolha um polo</option>
                            <option value="Polo 1">Polo 1</option>
                            <option value="Polo 2">Polo 2</option>
                            <option value="Polo 3">Polo 3</option>
                            <option value="Polo 4">Polo 4</option>
                            <option value="Polo 5">Polo 5</option>
                        </select>
                        <label>Polos</label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light" type="submit" id="save_filter" name="action">Filtrar
                    <i class="material-icons right">send</i>
                </button>
            </div>
        </form>
    </div>
    </div>
    <div id="exponencial"></div>
    <div id="drop"></div>
    <div class="row">
        <div class="centro">
            <!-- <a class="waves-effect waves-light btn tooltipped btn-floating" data-position="left" data-tooltip="Salvar gráfico" id="save_button"><i class="material-icons">save</i></a> -->
            <a onclick="openFullscreen();" class="waves-effect fullscreen waves-light btn tooltipped btn-floating" data-position="bottom" data-tooltip="Tela cheia" id="fullscreen"><i class="material-icons">fullscreen</i></a>
            <!-- <a class="waves-effect add waves-light btn tooltipped btn-floating" data-position="right" data-tooltip="Adicionar gráfico" id="add_button"><i class="material-icons">add</i></a> -->
        </div>
    </div>
    <footer>
    <?php
        echo "v0.".shell_exec("git rev-list --all --count");
    ?>
    </footer>
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
