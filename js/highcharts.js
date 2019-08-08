var dados = colunas;
var cols = '';
var vals = '';
var cols = [];
var vals = [];
var totCurso = '';
var totCurso = [];


data['colunas'].forEach(pegaRequest);
function pegaRequest(item) {
    cols.push(item.nome);
    vals.push(parseInt(item.valor));
}

valor['colunas'].forEach(total);

function total(x) {
    totCurso.push(parseInt(x.valor) * 0.1)
}

var cursoTotalPorcento = totCurso.reduce((a, b) => a + b, 0);
$('#compare').click(function(){
        console.log(vals);
    if($('#compare:checked').length == 1){
        var chartCompare = chartPerso.series[1].data; 
        chartCompare.forEach(atualizaCompara)
            function atualizaCompara(coluna){
                // console.log(chartCompare[cont].y);
                coluna.update(50);
            }
    }
    if($('#compare:checked').length == 0){
        var chartCompare = chartPerso.series[1].data; 
        chartCompare.forEach(atualizaCompara)
            function atualizaCompara(item){
                item.update(10);
            }
    }
}); 
///////////////////////////////////////////////////// GRÁFICO PERSONALIZADO /////////////////////////////////////////
Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico'
    }
});
var chartPerso = new Highcharts.Chart({
    chart: {
        renderTo: 'perso',
        animation: true,
    },

    title: {
        text: 'Gráfico personalizado'
    },

    xAxis: {
        categories: [] = cols,
        title: {
            text: 'Períodos'
        }
    },

    yAxis: [{ // Secondary yAxis
        max: 100,
        min: 0,
        endOnTick: false,
        title: {
            text: 'Desconto do curso'
        },

    },],


    plotOptions: {
        series: {
            point: {
                events: {
                    drag: function (e) {
                        $('#drag').html(
                            'Arrastando <b>' + this.category +
                            '</b> para %<b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
                        // array calculo dos valores e total
                        var val = chartPerso.series[0].data;
                        var arr = [];
                        val.forEach(desconto);

                        function desconto(item) {
                            arr.push(item.y);
                        }

                        var tamArr = Object.keys(cols).length;
                        var totArr = arr.reduce((a, b) => a + b, 0);
                        var total_html = (parseInt(data['total_curso']) - ((totArr / tamArr) * parseInt(data['total_curso']/100)));
                        $('#drop').html(
                            'Valor total do curso: <b>R$' + total_html.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '</b> <br> O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0) + '% de desconto</b>');
                      }
                }
            },
            stickyTracking: false
        },
        column: {
            stacking: 'normal'
        },
        line: {
            cursor: 'pointer'
        }
    },
    tooltip: {
        valueDecimals: 0,
        valueSuffix: '%',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },
    series: [{
        name: 'Comparação',
        type: 'spline',
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        draggableY: true,
        marker: {
            enabled: true
        },
        tooltip: {
            valueSuffix: '%'
        },

    },
    {
        name: 'Desconto',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        draggableY: false,
        marker: {
            enabled: false
        },
        tooltip: {
            valueSuffix: '%'
        },        
        dragMaxY: 100,
        dragMinY: 0,
    }],

    exporting: {
        buttons: {
            contextButton: {
                menuItems: ['viewFullscreen', 'printChart', 'viewData']
            }
        }
    }

});

//////////////////////////////////////////////// GRÁFICO EM RETA ///////////////////////////////////////////////////////////////

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico'
    }
});
var chartReta = new Highcharts.Chart({
    chart: {
        renderTo: 'reta',
        animation: true,
    },

    title: {
        text: 'Gráfico em reta'
    },

    xAxis: {
        categories: [] = cols,
        title: {
            text: 'Períodos'
        }
    },

    yAxis: {
        max: 100,
        min: 0,
        endOnTick: false,
        title: {
            text: 'Desconto do curso'
        },
    },


    plotOptions: {
        series: {
            point: {
                events: {
                    drag: function (e) {
                        $('#drag').html(
                            'Arrastando <b>' + this.category +
                            '</b> para %<b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
                        var colunasGrafico = chartReta.series[0].data;
                        var colunaAtual = this;
                        colunasGrafico.forEach(atualizaReta);

                        //array com valores do grafico em linha reta
                        function atualizaReta(item) {
                            if (colunaAtual.y < 0) {
                                colunaAtual.y = 0;
                            }
                            if (colunaAtual.y > 100) {
                                colunaAtual.y = 100;
                            }
                            item.update(colunaAtual.y);
                        }
                        // array calculo dos valores e total
                        var val = chartReta.series[0].data;
                        var arr = [];
                        val.forEach(desconto);

                        function desconto(item) {
                            arr.push(item.y);
                        }

                        var tamArr = Object.keys(cols).length;
                        var totArr = arr.reduce((a, b) => a + b, 0);
                        var total_html = (parseInt(data['total_curso']) - ((totArr / tamArr) * parseInt(data['total_curso']/100)));
                        $('#drop').html(
                            'Valor total do curso: <b>R$' + total_html.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '</b> <br> O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0) + '% de desconto</b>');
                    }
                }
            },
            stickyTracking: false,
            dragMaxY: 100,
            dragMinY: 0,
        },
        column: {
            stacking: 'normal'
        },
        line: {
            cursor: 'pointer'
        }
    },

    tooltip: {
        valueDecimals: 0,
        valueSuffix: '%',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },

    series: [{
        name: 'Desconto',
        data: [] = vals,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    }],

    exporting: {
        buttons: {
            contextButton: {
                menuItems: ['viewFullscreen', 'printChart', 'viewData']
            }
        }
    }

});


//////////////////////////////////////////////// GRÁFICO ANGULAR ///////////////////////////////////////////////////////////////

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico'
    }
});
var chartAngular = new Highcharts.Chart({
    chart: {
        renderTo: 'angular',
        animation: true,
        zoomType: 'xy',
    },

    title: {
        text: 'Gráfico angular'
    },

    xAxis: {
        categories: [] = cols,
        title: {
            text: 'Períodos'
        }
    },

    yAxis: {
        max: 100,
        min: 0,
        endOnTick: false,
        title: {
            text: 'Desconto do curso'
        },
    },

    userOptions: {
        draggableY: false,
    },

    plotOptions: {
        series: {
            point: {
                events: {
                    drag: function (e) {
                        $('#drag').html(
                            'Arrastando <b>' + this.category +
                            '</b> para %<b>' + Highcharts.numberFormat(e.y, 0) + '</b>');
                    },
                    drop: function () {
                       

                          
                        var points   = chartAngular.series[0].points;
                        
                        //valores angular
                        var y_min = points[0].y;
                        var y_max = points[points.length - 1].y;

                        var colunas = [];
                        colunas.push(y_min); // primeira coluna é sempre o valor mínimo

                        var num_colunas = points.length;
                        var y_atual = y_min.y;
                        
                        
                        // variação = ▲X / ▲Y
                        var y_variacao = (y_max - y_min)/(num_colunas -1);
                        
                        
                        //monta array com os valores para o grafico
                        points.forEach(atualizaAngular);
                        function atualizaAngular(item){
                            item.update(y_atual); 
                            y_atual = colunas[item.x] + y_variacao;
                            if(y_atual > 100){
                                y_atual = 100;
                            }
                            if(y_atual < 0){
                                y_atual = 0;
                            }
                            colunas.push(y_atual);
                        }
                        

                    // variação = ▲X / ▲Y
                    var y_variacao = (y_max.y - y_min.y) / num_colunas;
                    colunas.push(y_min.y);
                        // array calculo dos valores e total
                        var val = chartAngular.series[0].data;
                        var arr = [];
                        val.forEach(desconto);

                        function desconto(item) {
                            arr.push(item.y);
                        }

                        var tamArr = Object.keys(cols).length;
                        var totArr = arr.reduce((a, b) => a + b, 0);
                        var total_html = (parseInt(data['total_curso']) - ((totArr / tamArr) * parseInt(data['total_curso']/100)));
                        $('#drop').html(
                            'Valor total do curso: <b>R$' + total_html.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '</b> <br> O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0) + '% de desconto</b>');
                       

                          
                            var points   = chartAngular.series[0].points;
                            
                            //valores angular
                            var y_min = points[0].y;
                            var y_max = points[points.length - 1].y;

                            var colunas = [];
                            colunas.push(y_min); // primeira coluna é sempre o valor mínimo

                            var num_colunas = points.length;
                            var y_atual = y_min.y;
                            
                            
                            // variação = ▲X / ▲Y
                            var y_variacao = (y_max - y_min)/(num_colunas -1);
                            
                            //monta array com os valores para o grafico
                            points.forEach(atualizaAngular);
                            function atualizaAngular(item){
                                item.update(y_atual); 
                                y_atual = colunas[item.x] + y_variacao;
                                if(y_atual > 100){
                                    y_atual = 100;
                                }
                                if(y_atual < 0){
                                    y_atual = 0;
                                }
                                colunas.push(y_atual);
                            }
                            

                        // variação = ▲X / ▲Y
                        var y_variacao = (y_max.y - y_min.y) / num_colunas;
                        colunas.push(y_min.y);



                    }
                },
                stickyTracking: false,
                dragMaxY: 100,
                dragMinY: 0,
            },
            stickyTracking: false
        },
        column: {
            stacking: 'normal'
        },
        line: {
            cursor: 'pointer'
        }
    },

    tooltip: {
        valueDecimals: 2,
        valueSuffix: '%',
        pointFormat: '{series.name}: <b>{point.y}</b>',
        shared: true
    },

    series: [{
        name: 'Desconto',
        data: [] = vals,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    }],

    exporting: {
        buttons: {
            contextButton: {
                menuItems: ['viewFullscreen', 'printChart', 'viewData']
            }
        }
    }

});


//////////////////////////////////////////////// GRÁFICO EXPONENCIAL ///////////////////////////////////////////////////////////////

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico'
    }
});
var chartExponencial = new Highcharts.Chart({
    chart: {
        type: 'spline',
        renderTo: 'exponencial',
        animation: false,
    },

    title: {
        text: 'Gráfico exponencial'
    },
    events: {
      click: function (item) {
        var x = Math.round(item.xAxis[0].value),
          y = Math.round(item.yAxis[0].value),
          series = this.series[0];

        series.addPoint([y, x]);

      }
    },

    xAxis: {
        categories: [] = cols,
        title: {
            text: 'Períodos'
        }
    },

    yAxis: {
        title: {
            text: 'Desconto do curso'
        },
        max: 100,
        min: 0,
        endOnTick: false,
    },


    plotOptions: {
        series: {
            point: {
                events: {
                    // click: function () {
                    //   if (this.series.data.length > 1) {
                    //     this.remove();
                    //   }
                    // },
                    drag: function (e) {
                        $('#drag').html(
                            'Arrastando <b>' + this.category +
                            '</b> para %<b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
                        // array calculo dos valores e total
                        var val = chartExponencial.series[0].data;
                        var arr = [];
                        val.forEach(desconto);

                        function desconto(item) {
                            arr.push(item.y);
                        }

                        var tamArr = Object.keys(cols).length;
                        var totArr = arr.reduce((a, b) => a + b, 0);
                        var total_html = (parseInt(data['total_curso']) - ((totArr / tamArr) * parseInt(data['total_curso']/100)));
                        $('#drop').html(
                            'Valor total do curso: <b>R$' + total_html.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '</b> <br> O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0) + '% de desconto</b>');
                    }
                }
            },
            stickyTracking: false
        },
        column: {
            stacking: 'normal'
        },
        line: {
            cursor: 'pointer'
        }
    },

    tooltip: {
        valueDecimals: 0,
        valueSuffix: '%',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },

    series: [{
        name: 'Desconto',
        data: [] = vals,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    }],

    exporting: {
        buttons: {
            contextButton: {
                menuItems: ['viewFullscreen', 'printChart', 'viewData']
            }
        }
    }

});