var dados = colunas;
var cols = '';
var vals = '';
var cols = [];
var vals = [];
var totCurso = '';
var totCurso = [];


data['colunas'].forEach(myFunction);
function myFunction(item) {
  cols.push(item.nome); 
  vals.push(parseInt(item.valor)); 
}

valor['colunas'].forEach(total);
function total(x){
    totCurso.push(parseInt(x.valor)*0.1)
}

var cursoTotalPorcento = totCurso.reduce((a, b) => a + b, 0);

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
            endOnTick: false,
            title:{
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
                        // ((parseInt(Highcharts.numberFormat(this.y, 0)))*300)/(Object.keys(cols).length);
                        drop: function () {    
                                var val = chartPerso.series[0].data;
                                var arr = [];
                                val.forEach(desconto);
                                function desconto(item) {
                                    arr.push(item.y);                                                                   
                                }      
                                var tamArr = Object.keys(cols).length;
                                var totArr = arr.reduce((a, b) => a + b, 0);
                                var total_html = (parseInt(data['total_curso'])-(totArr/tamArr*300));
                                 $('#drop').html(
                                //     'Valor total do curso: <b>'+total_html.toFixed(0)+'</b> <br> O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');    
                                // console.log(total_html);
                                // console.log(totArr/tamArr*300);  
                                // console.log(Object.keys(cols).length);              
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
        categories: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
        title:{
            text: 'Períodos'
        }
    },

    yAxis:{
        title:{
            text: 'Desconto do curso'
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
                            'Valor total do curso: <b>'+(parseInt(data['total_curso'])-((parseInt(Highcharts.numberFormat(this.y, 0)))*300))+'</b> <br> O curso de Medicina está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');
                            var colunasGrafico = chartReta.series[0].data;
                            var colunaAtual = this;
                            colunasGrafico.forEach(atualizaReta);
                            function atualizaReta(item) {
                                item.update(colunaAtual.y); 
                            }
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
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        draggableY: true
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
        animation: false,
    },

    title: {
        text: 'Gráfico angular'
    },

    xAxis: {
        categories: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
        title:{
            text: 'Períodos'
        }
    },

    yAxis:{
        title:{
            text: 'Desconto do curso'
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
                            '</b> para %<b>' + Highcharts.numberFormat(e.y, 0) + '</b>');
                    },
                    drop: function () {
                        $('#drop').html(
                            'O curso de Medicina no <b>' + this.category + '</b> está com <b>' + Highcharts.numberFormat(this.y, 0)+'% de desconto</b>');
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
        valueDecimals: 0,
        valueSuffix: '%',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },

    series: [{
        name: 'Desconto',
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        draggableY: true
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
        renderTo: 'exponencial',
        animation: false,
    },

    title: {
        text: 'Gráfico exponencial'
    },

    xAxis: {
        categories: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
        title:{
            text: 'Períodos'
        }
    },

    yAxis:{
        title:{
            text: 'Desconto do curso'
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
        data: [5, 10, 20, 40, 50, 55, 66, 75, 90, 100],
        draggableY: true
    }],

    exporting: {       
    buttons: {
        contextButton: {
            menuItems: ['viewFullscreen', 'printChart', 'viewData']
        }
    }
}

});