var dados = colunas;
var cols = '';
var vals = '';
var cols = [];
var vals = [];

data['colunas'].forEach(myFunction);
function myFunction(item) {
  cols.push(item.nome); 
  vals.push(parseInt(item.valor)); 
}
///////////////////////////////////////////////////// GRÁFICO EXPONENCIAL /////////////////////////////////////////
Highcharts.setOptions({
        lang: {
            decimalPoint: ',',
            viewFullscreen: 'Tela cheia',
            printChart: 'Imprimir gráfico'
        }
    });
    var chartExponencial = new Highcharts.Chart({
        chart: {
            renderTo: 'perso',
            animation: false,
        },

        title: {
            text: 'Gráfico personalizado'
        },

        xAxis: {
            categories: [] = cols,
            title:{
                text: 'Período'
            }
        },

        yAxis:{
            max: 100,
            min: 0,
            endOnTick: false,
            title:{
                text: 'Valor do curso'
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
                            $('#drop').html(
                                'Valor total do curso: <b>'+(parseInt(data['total_curso'])-((parseInt(Highcharts.numberFormat(this.y, 0)))*300))+'</b> <br> O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');
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
        title:{
            text: 'Períodos'
        }
    },

    yAxis:{
        max: 100,
        endOnTick: false,
        title:{
            text: 'Valor do curso'
        },
        max: 100,
        min: 0,
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
                        $('#drop').html(
                            // 'O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');
                            'O curso de Medicina no <b>' + this.category +'</b> está custando R$ <b>' + Highcharts.numberFormat(this.y, 2)+'</b>');
                            var colunasGrafico = chartReta.series[0].data;
                            var colunaAtual = this;
                            colunasGrafico.forEach(atualizaReta);

                            //array com valores do grafico em linha reta
                            function atualizaReta(item) {
                                if(colunaAtual.y < 0){
                                    colunaAtual.y = 0;
                                }
                                if(colunaAtual.y > 100){
                                    colunaAtual.y = 100;
                                }
                                item.update(colunaAtual.y); 
                            }
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
        name: 'Valor',
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
    },

    title: {
        text: 'Gráfico angular'
    },

    xAxis: {
        categories: [] = cols,
        title:{
            text: 'Períodos'
        }
    },

    yAxis:{
        max: 100,
        min: 0,
        title:{
            text: 'Valor do curso'
        }
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
                        $('#drop').html(
                            'O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');
                            if(this.y > 101){
                                this.y = 100
                            }
                            if(this.y < 0){
                                this.y = 0
                            }
                            var points = chartAngular.series[0].points;

                            //valores angular
                            var y_min = points[0];
                            var y_max = points[points.length - 1];
                            // console.log(points.length);
                            var num_colunas = points.length;
                            var y_atual = y_min;
                            var colunas = [];
                            var cont = 0;

                            
                            // variação = ▲X / ▲Y
                            var y_variacao = (y_max.y - y_min.y)/num_colunas;
                            colunas.push(y_min.y);
                            
                            
                            //monta array com os valores para o grafico
                            // console.log(y_max);

                            points.forEach(funcaoTeste);
                            function funcaoTeste(item){
                                // console.log(points[item.x]);
                                console.log(cont);
                                y_atual = colunas[(colunas.length -1)] + y_variacao;
                                colunas.push(y_atual);
                                points[cont].update(colunas[cont]); 
                                cont++;
                            }


                            // while(num_colunas > 0){
                            //     y_atual = colunas[(colunas.length -1)] + y_variacao;
                            //     num_colunas--;
                            //     colunas.push(y_atual);
                            //     points[num_colunas].update(colunas[num_colunas]); 
                                // console.log(num_colunas);
                            // }
                            


                            // console.log(y_max);



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


//////////////////////////////////////////////// GRÁFICO EXPONENCIAL ///////////////////////////////////////////////////////////////

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico'
    }
});
var chartPerso = new Highcharts.Chart({
    chart: {
        renderTo: 'exponencial',
        animation: false,
    },

    title: {
        text: 'Gráfico exponencial'
    },

    xAxis: {
        categories: [] = cols,
        title:{
            text: 'Períodos'
        }
    },

    yAxis:{
        title:{
            text: 'Valor do curso'
        }
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
                        $('#drop').html(
                            'O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');
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