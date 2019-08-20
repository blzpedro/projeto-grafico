var dados = colunas;
var cols = [];
var juros = parseInt(dados['colunas'][0]['taxa_juros']);
var taxaDesconto = parseInt(dados['colunas'][0]['taxa_desconto']);
var vals = [];
var valsAtrasado = [];
var valsAdiantado = [];
var totCurso = [];

var limit = parseInt(dados['colunas'][0]['quantidade']);

while(limit > 0){
    cols.push('P'+limit);
    limit--;
}
cols.reverse();


data['colunas'].forEach(pegaRequest);
function pegaRequest(item) {
    vals.push(parseInt(item.valor));
}

function proxValor(){
    var primeiroDesc = vals[0];
    vals = []; 
    vals.push(primeiroDesc);
    
    var tamArr = parseInt(dados['colunas'][0]['quantidade']);
    var desc = primeiroDesc/(tamArr-1);
    var proxDesc = primeiroDesc
    
    for (i=1;i<tamArr;i++){  
        proxDesc -= desc;
        if(proxDesc <1){
            vals.push(0);
        }else{
            vals.push(proxDesc);
        }
    }
    return vals;
}

vals = proxValor();
vals.forEach(function atrasadoAdiantado(item){
    if((item-juros) < 0){ 
        valsAtrasado.push(0);
    }else{
        valsAtrasado.push(item - juros);
    }
    if((item+taxaDesconto) > 100){
        valsAdiantado.push(100);
    }else{
        valsAdiantado.push(item + taxaDesconto);
    }
});

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
        layout: 'vertical',
        enabled: true,
        borderWidth: 2,
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
                        
                        
                          
                        var points   = chartExponencial.series[0].points;
                        
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
                        // points.forEach(atualizaAngular);
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
                        var y_variacao = calcInicial;
                        colunas.push(y_min.y);
                        // array calculo dos valores e total
                        var val = chartExponencial.series[0].data;
                        var arr = [];
                        val.forEach(desconto);

                        function desconto(item) {
                            arr.push(item.y);
                        }

                        var val = chartExponencial.series[0].data;
                        var arr = [];
                        val.forEach(desconto);

                        function desconto(item) {
                            arr.push(item.y);
                        }
                        

                        var tamArr = Object.keys(cols).length;
                        var totArr = arr.reduce((a, b) => a + b, 0);
                        var calcInicial = Math.round(arr[0]/tamArr);
                        var total_html = (parseInt(data['total_curso']) - ((totArr / tamArr) * parseInt(data['total_curso']/100)));
                        $('#drop').html('Valor total do curso: <b>R$' + total_html.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }) + '</b>');
                        

                        //atualiza juros e desconto
                        var pontoAtual = this;
                        if((pontoAtual.y + taxaDesconto) > 100){
                            chartExponencial.series[0].data[pontoAtual.x].update(100);
                        }else{
                            chartExponencial.series[0].data[pontoAtual.x].update(pontoAtual.y + taxaDesconto);
                        }

                        if((pontoAtual.y - juros) < 0){
                            chartExponencial.series[2].data[pontoAtual.x].update(0);
                        }else{
                            chartExponencial.series[2].data[pontoAtual.x].update(pontoAtual.y - juros);
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
        formatter: function () {
            var val = chartExponencial.series[0].data;
            var arr = [];
            val.forEach(desconto);

            function desconto(item) {
                arr.push(item.y);
            }
            
            
            var valor_periodo = this.y.toFixed(0);
            var tamArr = Object.keys(cols).length;
            var total_periodo =  (parseInt(data['total_curso']/tamArr) - (valor_periodo/tamArr) * parseInt(data['total_curso']/100));
            return + this.x + '</b> Desconto: <b>' + Math.round(this.y) + '%</b>'+'</b><br>Valor do período: <b>R$' +total_periodo.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })+ '</b>';
        }
    },

    series: [{
        showInLegend: true,
        name: 'Antecipado',
        data: [] = valsAdiantado,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    },
    {
        showInLegend: true,
        name: 'Em dia',
        data: [] = vals,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    },
    {
        showInLegend: true,
        name: 'Após vcto',
        data: [] = valsAtrasado,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
    },
],

    exporting: {
        buttons: {
            contextButton: {
                menuItems: [ 'printChart'],
            }
        }
    },

});
