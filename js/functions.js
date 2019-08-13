
  $(document).ready(function(){
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

