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

///////////////////////////////////////////////////// GRÁFICO PERSONALIZADO /////////////////////////////////////////
Highcharts.setOptions({
        lang: {
            decimalPoint: ',',
            viewFullscreen: 'Tela cheia',
            printChart: 'Imprimir gráfico'
        }
    });
    var chart1 = new Highcharts.Chart({
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
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'reta',
        animation: false,
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
        data: [350, 450, 500, 550, 600, 650, 700, 900, 1100, 1300],
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
var chart = new Highcharts.Chart({
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
        data: [350, 450, 500, 550, 600, 650, 700, 900, 1100, 1300],
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
var chart = new Highcharts.Chart({
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
        data: [350, 450, 500, 550, 600, 650, 700, 900, 1100, 1300],
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