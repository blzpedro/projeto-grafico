///////////////////////////////////////////////////// GRÁFICO EXPONENCIAL /////////////////////////////////////////
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
            categories: ['1', '2'
            ],
            title:{
                text: 'Período'
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
                                '</b> para R$ <b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                        },
                        drop: function () {
                            $('#drop').html(
                                'O curso de Medicina no <b>' + this.category + '</b> está custando R$ <b>' + Highcharts.numberFormat(this.y, 2)+'</b>');
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
            valueDecimals: 2,
            valuePrefix: 'R$',
            pointFormat: '{series.name}: <b>{point.y}</b><br/>',
            shared: true
        },

        series: [{
            name: 'Valor',
            data: [350, 440],
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
                            '</b> para R$ <b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
                        $('#drop').html(
                            'O curso de Medicina no <b>' + this.category + '</b> está custando R$ <b>' + Highcharts.numberFormat(this.y, 2)+'</b>');
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
        valueDecimals: 2,
        valuePrefix: 'R$',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },

    series: [{
        name: 'Valor',
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
                            '</b> para R$ <b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
                        $('#drop').html(
                            'O curso de Medicina no <b>' + this.category + '</b> está custando R$ <b>' + Highcharts.numberFormat(this.y, 2)+'</b>');
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
        valueDecimals: 2,
        valuePrefix: 'R$',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },

    series: [{
        name: 'Valor',
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


//////////////////////////////////////////////// GRÁFICO PERSONALIZADO ///////////////////////////////////////////////////////////////

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico'
    }
});
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'perso',
        animation: false,
    },

    title: {
        text: 'Gráfico personalizado'
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
                            '</b> para R$ <b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
                        $('#drop').html(
                            'O curso de Medicina no <b>' + this.category + '</b> está custando R$ <b>' + Highcharts.numberFormat(this.y, 2)+'</b>');
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
        valueDecimals: 2,
        valuePrefix: 'R$',
        pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        shared: true
    },

    series: [{
        name: 'Valor',
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



