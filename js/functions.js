

$(document).ready(function () {
  buscaBanco(dados);
  // console.log(dados)
  
  

  $('.tooltipped').tooltip({
    outDuration: 0,
    delay: 0,
    inDuration: 700
  });


  $('.value').text('50');
  $('.modal').modal();
  $('select').formSelect();

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
var timeout =0;
window.setInterval(function(){
  atualizaTela();
}, 1000);

window.addEventListener("load", function () {
  setTimeout(atualizaTela, 500, false);
}, false);

function atualizaTela() {
  aumentaValores(0,0);
  aumentaValores(1,0);
  aumentaValores(2,0);
}


function  buscaBanco(dados){
  var val = chartExponencial.series;
  $.ajax({
    url: "busca.php",
    type: 'POST',
    data:dados,   
    dataType: 'JSON',
    success: function (response) {
      response.forEach(function (e) {
        e.y = $.map( e.valores_y.split(','), Number );
        
          
          
            chartExponencial.series.forEach(function (){
            })
            
            $('#mensalidade').val(parseFloat(e.mensalidade));
            if(e.tipo_linha == 0){
              val[0].setData(e.y);
              chartExponencial.redraw(true);
              // val[0].data[e.x].update(parseInt(e.y));
            }
            if(e.tipo_linha == 1){
              val[1].setData(e.y);
              chartExponencial.redraw(true);
              // val[1].data[e.x].update(parseInt(e.y));
            }
            if(e.tipo_linha == 2){
              val[2].setData(e.y);
              chartExponencial.redraw(true);
              // val[2].data[e.x].update(parseInt(e.y));
            }
        });
      }
    });
}
   
var timeout;
$( "#aumenta_dia30" ).mousedown(function(){
  timeout = setInterval(function(){   
      reduzValores(0, 0.1);
  }, 30)

  return false;
});

$("#aumenta_dia30").mouseup(function(){
    clearInterval(timeout);
    return false;
});

$("#aumenta_dia30").mouseleave(function(){
  clearInterval(timeout);
  return false;
});
$( "#reduz_dia30" ).mousedown(function(){
  timeout = setInterval(function(){   
    aumentaValores(0, 0.1);
  }, 10)
  return false;
});
$("#reduz_dia30").mouseleave(function(){
  clearInterval(timeout);
  return false;
});
$("#reduz_dia30").mouseup(function(){
    clearInterval(timeout);
    return false;
});
$( "#aumenta_dia5" ).mousedown(function(){
  timeout = setInterval(function(){   
      reduzValores(1, 0.1);
  }, 10)
  return false;
});
$("#aumenta_dia5").mouseup(function(){
    clearInterval(timeout);
    return false;
});
$("#aumenta_dia5").mouseleave(function(){
  clearInterval(timeout);
  return false;
});
$( "#reduz_dia5" ).mousedown(function(){
  timeout = setInterval(function(){   
    aumentaValores(1, 0.3);
  }, 10)
  return false;
});
$("#reduz_dia5").mouseup(function(){
    clearInterval(timeout);
    return false;
}); 
$("#reduz_dia5").mouseleave(function(){
  clearInterval(timeout);
  return false;
});
$( "#aumenta_vcto" ).mousedown(function(){
  timeout = setInterval(function(){   
      reduzValores(2, 0.3);
  }, 10)
  return false;
});
$("#aumenta_vcto").mouseup(function(){
    clearInterval(timeout);
    return false;
});
$("#aumenta_vcto").mouseleave(function(){
  clearInterval(timeout);
  return false;
});
$( "#reduz_vcto" ).mousedown(function(){
  timeout = setInterval(function(){   
    aumentaValores(2, 0.1);
  }, 10)
  return false;
});
$("#reduz_vcto").mouseup(function(){
    clearInterval(timeout);
    return false;
});
$("#reduz_vcto").mouseleave(function(){
  clearInterval(timeout);
  return false;
});

    function aumentaValores(num_linha, porcentagem = 0.5){
        
      var linha = chartExponencial.series[num_linha];    
      var valorComDesconto = 0;    
  
  
        colunas  = linha.data;
        colunas.forEach(function (coluna){
          if(coluna.y + ((coluna.y/100)* porcentagem) > 100){
            coluna.update(100);
          }else{
            coluna.update(coluna.y+((coluna.y/100)* porcentagem));
          }
        });
        
        valorComDesconto = parseFloat(calculaTotal(chartExponencial.series[num_linha].data)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
      
      if(num_linha == 0){
        $('.dia30').attr("placeholder", "R$"+valorComDesconto)
      }else if(num_linha == 1){
          $('.dia5').attr("placeholder", "R$"+valorComDesconto);
      }else if(num_linha == 2){        
        $('.vcto').attr("placeholder", "R$"+valorComDesconto);
      }
    }
  
  
  
    function reduzValores(num_linha, porcentagem = 0.5){
        
      var linha = chartExponencial.series[num_linha];  
      var valorComDesconto = 0;    
  
        colunas  = linha.data;
        colunas.forEach(function (coluna){
          if(coluna.y - ((coluna.y/100)* porcentagem) > 100){
            coluna.update(100);
          }else{
            coluna.update(coluna.y-((coluna.y/100)* porcentagem));
          }
        });
        valorComDesconto = parseFloat(calculaTotal(chartExponencial.series[num_linha].data)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    
        if(num_linha == 0){
          $('.dia30').attr("placeholder", "R$"+valorComDesconto);
        }else if(num_linha == 1){  
          $('.dia5').attr("placeholder", "R$"+valorComDesconto);
        }else if(num_linha == 2){          
          $('.vcto').attr("placeholder", "R$"+valorComDesconto);
        }
    }

$("#save_button").click(function () {
  var url = new URL(window.location.href);
  var titulo = url.searchParams.get("nome_graf");
  var mensalidade = url.searchParams.get("mensalidade");

  var chart = chartExponencial.series;
  var dados = [];
  var tipoLinha = 0;
  //0 - dia 30
  //1 - dia 5
  //2 - apos vencimento
    while(tipoLinha <= 2){
      var valsConcat = concatena(chart[tipoLinha].data);
      var linha ={
        titulo: titulo,
        tipoLinha: tipoLinha,
        mensalidade: mensalidade,
        qtdColunas: chart[tipoLinha].data.length,
        valoresY: valsConcat.join(),
  
      };
      
      dados.push(linha);
      tipoLinha++
    }
  
  
    function concatena(valores){
      var vals = [];
      valores.forEach(function (valorAtual){
        // vals.push(Math.round(valorAtual.y));
        vals.push(valorAtual.y.toFixed(2));
      })
      return vals;
    }
    
    var json = JSON.stringify(dados);
  
    $.ajax({
      url: "salva.php",
      data: "dados=" + json,
      success: function (response) {
        retorno = JSON.parse(response)
        if(retorno.erro == 'none'){
          alert('Dados salvos');
        }else{
          alert('Erro ao registar no banco de dados');
        }

      }
    });
  });

  $("#titulo").change(
    function () {
    buscaBanco(dados);
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

function calculaTotal(colunas, valCheio = data['total_curso']){
  var mensalidade = valCheio/(colunas.length) 
  var total = 0; 
  
  colunas.forEach(function(coluna) {
      //porcentagem
      var desconto = (mensalidade / 100) * coluna.y;
      totalPeriodo = (mensalidade - desconto)*6;
      
      total = total + totalPeriodo;
  })
  
  return(total);
}