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

////////////////////////////////////////////////////////// GRÁFICO ///////////////////////////////////////////////////////////////////

Highcharts.setOptions({
    lang: {
        decimalPoint: ',',
        viewFullscreen: 'Tela cheia',
        printChart: 'Imprimir gráfico',
        resetZoom: 'Tirar zoom'
    }
});

var chartExponencial = new Highcharts.Chart({
    chart: {
        type: 'spline',
        renderTo: 'exponencial',
        animation: true,
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },
    legend: {
        enabled: true
    },
    title: {
        text: ''
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
                    drag: function (e) {
                        $('#drag').html(
                            'Arrastando <b>' + this.category +
                            '</b> para %<b>' + Highcharts.numberFormat(e.y, 2) + '</b>');
                    },
                    drop: function () {
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
                            'Valor total do curso: <b>R$' + total_html.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '</b>');
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
        formatter: function () {
            var val = chartExponencial.series[0].data;
            var arr = [];
            val.forEach(desconto);

            function desconto(item) {
                arr.push(item.y);
            }
            var valor_periodo = this.y;
            var tamArr = Object.keys(cols).length;
            var total_periodo =  (parseInt(data['total_curso']/tamArr) - (valor_periodo/tamArr) * parseInt(data['total_curso']/100));
            return + this.x + '</b> Desconto: <b>' + this.y.toFixed(0) + '%</b>'+'</b><br>Valor do período: <b>R$' +total_periodo.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })+ '</b>';
        }
    },

    series: [{
        showInLegend: true,
        name: 'Desconto',
        data: [] = vals,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    }],

    exporting: {
        buttons: {
            contextButton: {
                menuItems: [ 'printChart'],
            }
        }
    },

});
