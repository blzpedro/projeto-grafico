var dados = colunas;
var quantidadePeriodos = parseInt(dados['colunas'][0]['quantidade']);
var mensalidade = parseInt(dados['mensalidade']);
dados['total_curso'] = quantidadePeriodos * mensalidade;
var cols = [];
var juros = parseInt(dados['colunas'][0]['taxa_juros']);
var taxaDesconto = parseInt(dados['colunas'][0]['taxa_desconto']);
var vals = [];
var valsAtrasado = [];
var valsAdiantado = [];
var totCurso = [];
var ajusteValor = "";
var valDia30 = $('.valor-dia30').text();
var valDia5;
var valorVcto;

var limit = parseInt(dados['colunas'][0]['quantidade']);

var semestre = parseInt(dados['p_nome'].substr(dados['p_nome'].length - 1));
var anoInicial = parseInt(dados['p_nome']);
while(limit > 0){
    // console.log(anoInicial+'.'+semestre)
    cols.push(anoInicial+'.'+semestre);
    if(semestre == 2){
        semestre = 1
        anoInicial++
    }else{
        semestre = 2
    }
    // console.log(anoInicial)
    
    limit--;
}


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
        animation: false,
        panning: true,
        panKey: 'shift'
    },
    legend: {
        layout: 'vertical',
        enabled: true,
        borderWidth: 2,
        itemMarginTop: 10,
        itemMarginBottom: 10,
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
        
      },
    },

    xAxis: {
        categories: [] = cols,
        title: {
            text: 'Períodos'
        }
    },

    yAxis: {
        // allowDecimals: true,
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
                        var valorComDesconto   = 0;
                        
                        //valores angular
                        var y_min = points[0].y;
                        var y_max = points[points.length - 1].y;

                        var colunas = [];
                        colunas.push(y_min); // primeira coluna é sempre o valor mínimo

                        var num_colunas = points.length;
                        var y_atual = y_min.y;
                        
                        
                        // variação = ▲X / ▲Y
                        var y_variacao = (y_max - y_min)/(num_colunas -1);
                        
                        
                        // variação = ▲X / ▲Y
                        var y_variacao = calcInicial;
                        
                        colunas.push(y_min.y);
                        // array calculo dos valores e total antecipado
                        var val_antecipado = chartExponencial.series[0].data;
                        var arr_antecipado = [];
                        val_antecipado.forEach(desconto_antecipado);

                        function desconto_antecipado(item) {
                            arr_antecipado.push(item.y);
                        }

                        // array calculo dos valores e total em dia
                        var val_emDia = chartExponencial.series[1].data;
                        var arr_emDia = [];
                        val_emDia.forEach(desconto_emDia);

                        function desconto_emDia(item) {
                            arr_emDia.push(item.y);
                        }

                        // array calculo dos valores e total apos vencimento
                        var val_vencimento = chartExponencial.series[2].data;
                        var arr_vencimento = [];
                        val_vencimento.forEach(desconto_vencimento);

                        function desconto_vencimento(item) {
                            arr_vencimento.push(item.y);
                        }

                        var tamArr = Object.keys(cols).length;
                        var calcInicial = Math.round(arr_antecipado[0]/tamArr);
                        num_linha = this.series.index;
                        
                        valorComDesconto = parseFloat(calculaTotal(chartExponencial.series[num_linha].data)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
                        if(num_linha == 0){
                            $('.dia30').attr("placeholder", "R$"+valorComDesconto);
                          }else if(num_linha == 1){  
                            $('.dia5').attr("placeholder", "R$"+valorComDesconto);
                          }else if(num_linha == 2){          
                            $('.vcto').attr("placeholder", "R$"+valorComDesconto);
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
            
            
            var valor_periodo = this.y;
            var tamArr = Object.keys(cols).length;
            var total_periodo =  (parseInt(data['total_curso']/tamArr) - (valor_periodo/tamArr) * parseInt(data['total_curso']/100));
            return '</b> Desconto: <b>' + this.y.toFixed(2) + '%</b>'+'</b><br>Valor do período: <b>R$' +total_periodo.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 })+ '</b>';
        }
    },

    series: [ 
        {
        color: '#27ae60',
        showInLegend: true,
        name: 'Dia 30<span class="dia30">:</span>',
        data: [] = valsAdiantado,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
        zIndex: 1,
            marker: {
                symbol: 'circle'
            }
        },
    {
        color: '#7f8c8d',
        showInLegend: true,
        name: '5º dia<span class="dia5">:</span>',
        data: [] = vals,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
        zIndex: 2,
        marker: {
            symbol: 'circle'
        }
    },
    {
        color: '#e74c3c',
        showInLegend: true,
        name: 'Após vcto<span class="vcto">:</span>',
        data: [] = valsAtrasado,
        draggableY: true,
        dragMaxY: 100,
        dragMinY: 0,
        zIndex: 0,
        marker: {
            symbol: 'circle'
        }
    },
],

    exporting: {
        enabled: false
    },

});
