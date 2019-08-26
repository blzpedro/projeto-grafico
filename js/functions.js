$(document).ready(function () {
  $( "#up" ).click(function() {   
    var porcentagem = 0.5;
    var linhas = chartExponencial.series;    

    var valorVctoUp = [];    
    var valorAntecipadoUp = [];    
    var valorEmDiaUp = [];    
    var tamArr = Object.keys(cols).length;

    linhas.forEach(function (linha){
      colunas  = linha.data;
      colunas.forEach(function (coluna){
        if(coluna.y + ((coluna.y/100)* porcentagem) > 100){
          coluna.update(100);
        }else{
          coluna.update(coluna.y+((coluna.y/100)* porcentagem));
        }
      })
    });
    
    for(i=0;i<colunas.length;i++){
      valorVctoUp.push(chartExponencial.series[2].data[i].y)
      valorAntecipadoUp.push(chartExponencial.series[0].data[i].y)
      valorEmDiaUp.push(chartExponencial.series[1].data[i].y)
    }

    var totalContaVcto = valorVctoUp.reduce((a, b) => a + b, 0);
    var total_vencimento = Math.round((parseInt(data['total_curso']) - ((totalContaVcto / tamArr) * parseInt(data['total_curso']/100))));

    
    var totalContaAntecipado = valorAntecipadoUp.reduce((a, b) => a + b, 0);
    var total_antecipado = Math.round((parseInt(data['total_curso']) - ((totalContaAntecipado / tamArr) * parseInt(data['total_curso']/100))));

    
    var totalContaEmDia = valorEmDiaUp.reduce((a, b) => a + b, 0);
    var total_emDia = Math.round((parseInt(data['total_curso']) - ((totalContaEmDia / tamArr) * parseInt(data['total_curso']/100))));


    $('.dia30').html(": R$"+total_antecipado.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
    $('.dia5').html(": R$"+total_emDia.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
    $('.vcto').html(": R$"+total_vencimento.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
  });

  $( "#down" ).click(function() {  
    var porcentagem = 0.5;
    var linhas = chartExponencial.series;
    
    var valorVctoUp = [];    
    var valorAntecipadoUp = [];    
    var valorEmDiaUp = [];    
    var tamArr = Object.keys(cols).length;


    linhas.forEach(function (linha){
      colunas = linha.data;
      colunas.forEach(function (coluna){
        
        if(coluna.y - ((coluna.y/100)* porcentagem) > 100){
          coluna.update(100);
        }else{
          coluna.update(coluna.y - ((coluna.y/100)* porcentagem));
        }
      })
    });


    for(i=0;i<colunas.length;i++){
      valorVctoUp.push(chartExponencial.series[2].data[i].y)
      valorAntecipadoUp.push(chartExponencial.series[0].data[i].y)
      valorEmDiaUp.push(chartExponencial.series[1].data[i].y)
    }

    var totalContaVcto = valorVctoUp.reduce((a, b) => a + b, 0);
    var total_vencimento = Math.round((parseInt(data['total_curso']) + ((totalContaVcto / tamArr) * parseInt(data['total_curso']/100))));

    
    var totalContaAntecipado = valorAntecipadoUp.reduce((a, b) => a + b, 0);
    var total_antecipado = Math.round((parseInt(data['total_curso']) + ((totalContaAntecipado / tamArr) * parseInt(data['total_curso']/100))));

    
    var totalContaEmDia = valorEmDiaUp.reduce((a, b) => a + b, 0);
    var total_emDia = Math.round((parseInt(data['total_curso']) + ((totalContaEmDia / tamArr) * parseInt(data['total_curso']/100))));


    $('.dia30').html(": R$"+total_antecipado.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
    $('.dia5').html(": R$"+total_emDia.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }));
    $('.vcto').html(": R$"+total_vencimento.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 }));

  });
  
  $('.tooltipped').tooltip({
    outDuration: 0,
    delay: 0,
    inDuration: 700
  });

  $('#up').mousedown(function(e){ e.preventDefault(); });
  $('#down').mousedown(function(e){ e.preventDefault(); });
  $('h5').mousedown(function(e){ e.preventDefault(); });
    


  $('.value').text('50');
  $('.modal').modal();
  $('select').formSelect();

  $("#save_filter").click(function () {
    var valor_inicial = $("#field_inicial").val();
    var valor_final = $("#field_final").val();
    var desc_min = $("#field_descMin").val();
    var desc_max = $("#field_descMax").val();
    var periodos = $("#periodos").val();
    var regiao = $("#regioes").val();
    var polo = $("#polos").val();
    var filtro_json = {
      "valor_inicial": [parseInt(valor_inicial)],
      "valor_final": [parseInt(valor_final)],
      "desc_min": [parseInt(desc_min)],
      "desc_max": [parseInt(desc_max)],
      "periodos": [parseInt(periodos)],
      "regiao": [regiao],
      "polo": [polo]
    };

    $.ajax({
      url: "",
      data: filtro_json,
      success: function () {
        // console.log(filtro_json)
      }
    });
  });

  $.ajax({
    url: "busca.php",
    type: 'get',
    dataType: 'JSON',
    success: function (response) {
      var GrafArray = [];
      response.forEach(function (e) {
        GrafArray.push(e['graf_nome']);
      });
      var dataGrafico = {};
      for (var i = 0; i < GrafArray.length; i++) {
        dataGrafico[GrafArray[i]] = null;
      }
      $('input.autocomplete').autocomplete({
        data: dataGrafico,
        limit: 5,
      });
    }
  });
});

$("#save_button").click(function () {
  var titulo = $("#titulo").val();
  var linhas = chartExponencial.series;
  var dados = [];
  if (titulo == '') {
    alert('Digite um nome para o grafico');
  } else {
    var tipoLinha = 0;
    //0 - dia 30
    //1 - dia 5
    //2 - apos vencimento


    linhas.forEach(function (linha){
      linha.data.forEach(exporta);
      tipoLinha++;
    });
    
    dados.push(titulo);
    

    function exporta(item) {
      var coordenadas = [];


      coordenadas.push(tipoLinha);
      coordenadas.push('x' + item.x);
      coordenadas.push('y' + item.y.toFixed(2));
      dados.push(coordenadas);

    }
    var json = JSON.stringify(dados);


    $.ajax({
      url: "salva.php",
      data: "dados=" + json,
      success: function () {
        alert("Dados salvos");
      }
    });

  }
});

$("#titulo").change(
  function () {
    var val = chartExponencial.series;
    $.ajax({
      url: "busca.php",
      type: 'get',
      dataType: 'JSON',
      success: function (response) {
        response.forEach(function (e) {
          // console.log('aa');
          if (e.graf_nome == $("#titulo").val()) {
            if(e.tipo_linha == 0){
              // console.log(e);
              val[0].data[e.x].update(parseInt(e.y));
            }
            if(e.tipo_linha == 1){
              val[1].data[e.x].update(parseInt(e.y));
            }
            if(e.tipo_linha == 2){
              val[2].data[e.x].update(parseInt(e.y));
            }
          }
        });
      }
    });
  }
);

$("#add_button").click(function () {
  var vals = [];
  var valsAdiantado = [];
  var valsAtrasado = [];
  var qtdLinhas = chartExponencial.series.length
  chartExponencial.series[qtdLinhas - 1].data.forEach(function (item) {
    // vals.push(item.y);
  });

  data['colunas'].forEach(pegaRequest);

  function pegaRequest(item) {
    cols.push(item.nome);
    if (item.valor > 100 || item.valor < 0) {
      if (item.valor > 100) {
        vals.push(100);
      }
      if (item.valor < 0) {
        vals.push(0);
      }

    } else {
      vals.push(parseInt(item.valor));
    }

    if (parseInt(item.valor - juros) > 100 || parseInt(item.valor - juros) < 0) {
      if (parseInt(item.valor - juros) > 100) {
        valsAtrasado.push(100);
      }
      if (parseInt(item.valor - juros) < 0) {
        valsAtrasado.push(0);
      }

    } else {
      valsAtrasado.push(parseInt(item.valor - juros));
    }

    if (parseInt(item.valor) + juros > 100 || parseInt(item.valor) + juros < 0) {
      if (parseInt(item.valor) + juros > 100) {
        valsAdiantado.push(100);
      }
      if (parseInt(item.valor) + juros < 0) {
        valsAdiantado.push(0);
      }

    } else {
      valsAdiantado.push(parseInt(item.valor) + juros);
    }
  }
  if (qtdLinhas < 9) {
    //com desconto
    chartExponencial.addSeries({
      data: [] = vals,
      draggableY: true,
      dragMaxY: 100,
      dragMinY: 0,
      name: 'Antecipado ' + ((qtdLinhas / 3) + 1),
    });

    //sem desconto
    chartExponencial.addSeries({
      data: [] = valsAdiantado,
      draggableY: true,
      dragMaxY: 100,
      dragMinY: 0,
      name: 'Em dia ' + ((qtdLinhas / 3) + 1),
    });

    //com multa
    chartExponencial.addSeries({
      data: [] = valsAtrasado,
      draggableY: true,
      dragMaxY: 100,
      dragMinY: 0,
      name: 'Após vcto ' + ((qtdLinhas / 3) + 1),
    });

    // // console.log(parseInt(qtdLinhas) + 1);
  } else {
    alert('numero maximo de linhas excedido');
  }
});

var data = colunas;
var valor = colunas;

var elem = document.getElementById("fullscreen");

function openFullscreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}

$('#periodos').on('input', function () {
  var value = $(this).val();

  if ((value !== '') && (value.indexOf('.') === -1)) {

    $(this).val(Math.max(Math.min(value, 12), 0));
  }
});

