<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Gráfico dinâmico e interativo</title>
        <link rel="stylesheet" href="css/app.css">
        <link rel="stylesheet" href="css/nouislider.min.css">
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
                        <div id="slider-range"></div>
                        <div class="row slider-labels">
                            <div class="col s6 center-align"><strong>Valor inicial:</strong> <span id="slider-range-value1"></span></div>
                            <div class="col s6 center-align"><strong>Valor final:</strong> <span id="slider-range-value2"></span></div>
                            <form>
                                <input type="hidden" name="min-value" value="">
                                <input type="hidden" name="max-value" value="">
                            </form>     
                        </div>
                    </div> 
                </div>   
                <div class="row">
                    <div class="input-field col s12">
                        <div id="slider-range-2"></div>
                        <div class="row slider-labels">
                            <div class="col s6 center-align"><strong>Desconto mínimo:</strong> <span id="slider-range-2-value1"></span></div>
                            <div class="col s6 center-align"><strong>Desconto máximo:</strong> <span id="slider-range-2-value2"></span></div>
                            <form>
                                <input type="hidden" name="min-value2" value="">
                                <input type="hidden" name="max-value2" value="">
                            </form>     
                        </div>
                    </div> 
                </div>   
                <div class="row">
                    <div class="input-field col s12">
                        <input placeholder="" id="periodos" type="number" class="validate">
                        <label for="periodos">Qtd. de períodos</label>
                    </div>
                </div>         
                <div class="row">
                    <div class="input-field col s6">
                        <select>
                            <option value="" disabled selected>Escolha uma região</option>
                            <option value="Região1">Região 1</option>
                            <option value="Região2">Região 2</option>
                            <option value="Região3">Região 3</option>
                            <option value="Região4">Região 4</option>
                            <option value="Região5">Região 5</option>
                        </select>
                        <label>Regiões</label>
                    </div>
                    <div class="input-field col s6">
                        <select>
                            <option value="" disabled selected>Escolha um polo</option>
                            <option value="Polo1">Polo 1</option>
                            <option value="Polo2">Polo 2</option>
                            <option value="Polo3">Polo 3</option>
                            <option value="Polo4">Polo 4</option>
                            <option value="Polo5">Polo 5</option>
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
            <a class="waves-effect waves-light btn tooltipped btn-floating" data-position="left" data-tooltip="Salvar gráfico" id="save_button"><i class="material-icons">save</i></a>
            <a onclick="openFullscreen();" class="waves-effect fullscreen waves-light btn tooltipped btn-floating" data-position="right" data-tooltip="Tela cheia" id="fullscreen"><i class="material-icons">fullscreen</i></a>
            <a class="waves-effect add waves-light btn tooltipped btn-floating" data-position="right" data-tooltip="Adicionar gráfico" id="add_button"><i class="material-icons">add</i></a>
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
