
function buscaBanco(dados) {
  var val = chartExponencial.series;
  $.ajax({
    url: "busca.php",
    type: 'POST',
    data: dados,
    dataType: 'JSON',
    success: function (response) {
      montaTable(dados['p_nome'], response)
      response.forEach(function (e) {
        e.y = $.map(e.valores_y.split(','), Number);



        chartExponencial.series.forEach(function () {
        })

        $('#mensalidade').val(parseFloat(e.mensalidade));
        if (e.tipo_linha == 0) {
          val[0].setData(e.y);
          chartExponencial.redraw(true);
        }
        if (e.tipo_linha == 1) {
          val[1].setData(e.y);
          chartExponencial.redraw(true);
        }
        if (e.tipo_linha == 2) {
          val[2].setData(e.y);
          chartExponencial.redraw(true);
        }
      });
    }
  });
} 

$(document).ready(function () {

  buscaBanco(dados);


  $('.tooltipped').tooltip({
    outDuration: 0,
    delay: 0,
    inDuration: 700
  });


  $('.value').text('50');
  $('.modal').modal();
  $('select').formSelect();
});
setTimeout(function(){ $('#load-screen').hide(); }, 2500)

window.setInterval(function () {
  atualizaTela();
}, 1000);

window.addEventListener("load", function () {
  setTimeout(atualizaTela, 500, false);
}, false);


function atualizaTela() {
  aumentaValores(0, 0);
  aumentaValores(1, 0);
  aumentaValores(2, 0);
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

function aumentaValores(num_linha, porcentagem = 0.5) {

  var linha = chartExponencial.series[num_linha];
  var valorComDesconto = 0;


  colunas = linha.data;
  colunas.forEach(function (coluna) {
    if (coluna.y + ((coluna.y / 100) * porcentagem) > 100) {
      coluna.update(100);
    } else {
      coluna.update(coluna.y + ((coluna.y / 100) * porcentagem));
    }
  });

  valorComDesconto = parseFloat(calculaTotal(chartExponencial.series[num_linha].data)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  if (num_linha == 0) {
    $('.dia30').attr("placeholder", valorComDesconto)
  } else if (num_linha == 1) {
    $('.dia5').attr("placeholder", valorComDesconto);
  } else if (num_linha == 2) {
    $('.vcto').attr("placeholder", valorComDesconto);
  }
  
}


function reduzValores(num_linha, porcentagem = 0.5) {
  var linha = chartExponencial.series[num_linha];
  var valorComDesconto = 0;

  colunas = linha.data;
  colunas.forEach(function (coluna) {
    if (coluna.y - ((coluna.y / 100) * porcentagem) > 100) {
      coluna.update(100);
    } else {
      coluna.update(coluna.y - ((coluna.y / 100) * porcentagem));
    }
  });
  valorComDesconto = parseFloat(calculaTotal(chartExponencial.series[num_linha].data)).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
  if (num_linha == 0) {
    $('.dia30').attr("placeholder", valorComDesconto);
  } else if (num_linha == 1) {
    $('.dia5').attr("placeholder", valorComDesconto);
  } else if (num_linha == 2) {
    $('.vcto').attr("placeholder", valorComDesconto);
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
  while (tipoLinha <= 2) {
    var valsConcat = concatena(chart[tipoLinha].data);
    var linha = {
      titulo: titulo,
      tipoLinha: tipoLinha,
      mensalidade: mensalidade,
      qtdColunas: chart[tipoLinha].data.length,
      valoresY: valsConcat.join(),

    };

    dados.push(linha);
    tipoLinha++
  }


  function concatena(valores) {
    var vals = [];
    valores.forEach(function (valorAtual) {
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
      if (retorno.erro == 'none') {
        alert('Dados salvos');
      } else {
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

  } else {
    alert('numero maximo de linhas excedido');
  }
});

var data = colunas;
var valor = colunas;

$('#periodos').on('input', function () {
  var value = $(this).val();

  if ((value !== '') && (value.indexOf('.') === -1)) {

    $(this).val(Math.max(Math.min(value, 12), 0));
  }
});


function calculaTotal(colunas, valCheio = data['total_curso']) {
  var mensalidade = valCheio / (colunas.length)
  var total = 0;

  colunas.forEach(function (coluna) {
    //porcentagem
    var desconto = (mensalidade / 100) * coluna.y;
    totalPeriodo = (mensalidade - desconto) * 6;

    total = total + totalPeriodo;
  })
  return (total);
}

$('#input-dia30, #input-dia5, #input-vcto').focusout(function(){
  $(this).val('');
  atualizaTela();
})
$('#input-dia30').focus(function(){
  $(this).val(inputPlaceholder(this));
})
$('#input-dia5').focus(function(){
  $(this).val(inputPlaceholder(this));
})
$('#input-vcto').focus(function(){
  $(this).val(inputPlaceholder(this));
})

function inputPlaceholder(inputID){
  var placeholder = $(inputID).attr('placeholder');
  var convert = placeholder.replace('.','').replace(',','.');
  
  return convert
}

// $('#input-dia5').keypress(function (event) {
//   var keycode = (event.keyCode ? event.keyCode : event.which);
//   if (keycode == '13') {
//     calculaTotal
//     var novoValor = parseFloat($('#input-dia5').val());
//     var valorAtual = calculaTotal(chartExponencial.series[1].data).toFixed(2)
//     var cont = 0;
//     if (novoValor < valorAtual) {
//       while (novoValor < valorAtual) {
//         novoValor = parseFloat($('#input-dia5').val());
//         valorAtual = calculaTotal(chartExponencial.series[1].data).toFixed(2)
//         dados = chartExponencial.series[1].data;
//         dados.forEach(function (dado) {
//           if (dado.y > 99.9) {
//             dado.update(100);
//           } else {
//             dado.update(dado.y + 0.5);
//           }
//         });
//       }
//     }
//     if (novoValor > valorAtual) {
//       while (novoValor < valorAtual) {
//         novoValor = parseFloat($('#input-dia5').val());
//         valorAtual = calculaTotal(chartExponencial.series[1].data).toFixed(2)
//         dados = chartExponencial.series[1].data;
//         dados.forEach(function (dado) {
//           if (dado.y < 0.1) {
//             dado.update(0);
//           } else {
//             dado.update(dado.y - 0.5);
//           }
//         });
//       }

//     }
//   }
// });


function montaTable(inicial, busca) {
  var anoInicial = parseInt(inicial);
  var semestre = inicial.substr(inicial.length - 1);;
  var html = "<tr> <th>Período</th> <th><font color='green'>Dia 30</font></th> <th>5º dia</th> <th><font color='red'>Vcto</font></th> </tr>";
  var linhas = busca;
  var valores = [];
  var descontos = [];

  linhas.forEach(function (linha) {
    var colunasInt = [];
    var colunas = linha.valores_y.split(',')
    colunas.forEach(function (coluna) {

      var valor_periodo = parseFloat(coluna);
      var tamArr = colunas.length;
      var total_periodo = (parseInt(data['total_curso'] / tamArr) - (valor_periodo / tamArr) * parseInt(data['total_curso'] / 100));


      colunasInt.push(total_periodo.toFixed(2));
    })
    descontos.push(colunas)
    valores.push(colunasInt);
  });

  for (i = 0; i < valores[0].length; i++) {
    var descDia30 = descontos[0][i] + '%';
    var descDia5 = descontos[1][i] + '%';
    var descVcto = descontos[2][i] + '%';
    var valPeriodo_dia30 = 'R$' + (parseFloat(valores[0][i])).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    var valPeriodo_dia5 = 'R$' + (parseFloat(valores[1][i])).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    var valPeriodo_vcto = 'R$' + (parseFloat(valores[2][i])).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    html += "<tr><td><b>" + anoInicial + "." + semestre + "</b></td><td>" + valPeriodo_dia30 + '<br>' + descDia30 + "</td><td>" + valPeriodo_dia5 + '<br>' + descDia5 + "</td><td>" + valPeriodo_vcto + '<br>' + descVcto + "</td></tr>";
    if (semestre == 1) {
      semestre = 2
    } else {
      anoInicial++;
      semestre = 1
    }
  }
  $("#tabela-grafico").html(html);
}

$('#input-dia30').keypress(function (event) {
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  var inputId = '#' + this.id;
    
  if (keyCode == '13') {
    $('#load-screen').show();
    setTimeout(function () {
      attValByInput(keyCode, inputId, 0)
      $('#load-screen').hide();
    }, 1000);
  }
  
});

$('#input-dia5').keypress(function (event) {
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  var inputId = '#' + this.id;
    
  if (keyCode == '13') {
    $('#load-screen').show();
    setTimeout(function () {
      attValByInput(keyCode, inputId, 1)
      $('#load-screen').hide();
    }, 1000);
  }
  
});

$('#input-vcto').keypress(function (event) {
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  var inputId = '#' + this.id;
    
  if (keyCode == '13') {
    $('#load-screen').show();
    setTimeout(function () {
      attValByInput(keyCode, inputId, 2)
      $('#load-screen').hide();
    }, 2000);
  }
});

function attValByInput(keycode, inputId, linha) {
  var maxInput = parseInt(data['total_curso']) * 6;
  console.log(maxInput)
  if (keycode == '13') {
    if ($('#input-vcto').val() > maxInput || $('#input-dia30').val() > maxInput || $('#input-dia5').val() > maxInput) {
      alert('Erro.\nValor inserido é maior do que o total do curso!')
    } else {
      //calculaTotal
      
        var pontos = chartExponencial.series[linha].data;
        var totalAtual = dados['total_curso'] * 6;
        var valorAtual = calculaTotal(pontos);
        var valorInput = parseInt($(inputId).val());

        var porcentagemAtual = ( valorAtual * 100 ) / totalAtual;
        var porcentagemInput = ( valorInput * 100 ) / totalAtual;
        var porcentUpdate = porcentagemInput - porcentagemAtual;

        pontos.forEach(function(ponto){
          ponto.update(ponto.y - porcentUpdate);
        })
    }
  }
}
