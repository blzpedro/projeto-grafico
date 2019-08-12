$("#fullscreen_button").click(function() {
    var elem = document.body;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
});
$("#save_button").click(function() {
      var val = chartExponencial.series[0].data;
      var dados = [];
      val.forEach(exporta);
      
      function exporta(item) {
        var coordenadas = [];
        coordenadas.push('x'+item.x);
        coordenadas.push('y'+item.y.toFixed(2));
        dados.push(coordenadas);
      }
      console.log(dados);
      var json = JSON.stringify(dados);

      
      $.ajax({
        url: "test.php", 
        data: "dados="+json,
        success: function(){
        alert("Dados salvos");
      }});
      // alert("Dados JSON: "+json);
    });
$(document).ready(function () {     
    $('.tooltipped').tooltip({outDuration: 0, delay: 0, inDuration: 700});
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

