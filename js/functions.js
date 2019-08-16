$(document).ready(function(){
  $('.modal').modal();
  $('select').formSelect();

  $("#save_filter").click(function() {
    var valor_inicial = $("#field_inicial").val();
    var valor_final = $("#field_final").val();
    var desc_min = $("#field_descMin").val();
    var desc_max = $("#field_descMax").val();
    var periodos = $("#periodos").val();
    var regiao = $("#regioes").val();
    var polo = $("#polos").val();
    var filtro_json = {"valor_inicial":[parseInt(valor_inicial)],"valor_final":[parseInt(valor_final)],"desc_min":[parseInt(desc_min)],"desc_max":[parseInt(desc_max)],"periodos":[parseInt(periodos)],"regiao":[regiao],"polo":[polo]};
  
      $.ajax({
        url: "", 
        data: filtro_json,
        success: function() { 
            console.log(filtro_json)
        }
      });
    });

  $.ajax({
    url: "busca.php", 
    type: 'get',
    dataType: 'JSON',
    success: function(response){
      var GrafArray = [];
      response.forEach(function(e){
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
  }});
});

$("#save_button").click(function() {
  var titulo = $("#titulo").val();
  var val = chartExponencial.series[0].data;
  var dados = [];
  if(titulo == ''){
    alert('Digite um nome para o grafico');
  }else{
    val.forEach(exporta);
    
    dados.push(titulo);
    function exporta(item) {
      var coordenadas = [];
      coordenadas.push('x'+item.x);
      coordenadas.push('y'+item.y.toFixed(2));
      dados.push(coordenadas);
    }
    console.log(dados);
    var json = JSON.stringify(dados);

    
    $.ajax({
      url: "salva.php", 
      data: "dados="+json,
      success: function(){
      alert("Dados salvos");
    }});

  }
  });
$(document).ready(function () {     
  $('.tooltipped').tooltip({outDuration: 0, delay: 0, inDuration: 700});
});
$("#titulo").change(
function(){
  var val = chartExponencial.series[0].data;
  $.ajax({
    url: "busca.php",  
    type: 'get',
    dataType: 'JSON',
    success: function(response){
      response.forEach(function(e){
        if(e.graf_nome == $("#titulo").val()){
          val[e.x].update(parseInt(e.y));
        }
      });
  }});
}
);

$("#add_button").click(function() {
var vals = [];
var qtdLinhas = chartExponencial.series.length
chartExponencial.series[qtdLinhas -1].data.forEach(function(item){
  vals.push(item.y);
});
if (qtdLinhas < 9){
  //com desconto
  chartExponencial.addSeries({
    data:[] = vals,
    draggableY: true,
    dragMaxY: 100,
    dragMinY: 0,
    name: 'Antecipado '+((qtdLinhas / 3) +1),
  });

  //sem desconto
  chartExponencial.addSeries({
    data:[] = vals,
    draggableY: true,
    dragMaxY: 100,
    dragMinY: 0,
    name: 'Em dia '+((qtdLinhas / 3) +1),
  });

  //com multa
  chartExponencial.addSeries({
    data:[] = vals,
    draggableY: true,
    dragMaxY: 100,
    dragMinY: 0,
    name: 'Após vcto '+((qtdLinhas / 3) +1),
  });

  console.log(parseInt(qtdLinhas) + 1);
}
else{
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