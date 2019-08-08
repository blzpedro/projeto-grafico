$("#save_button").click(function() {
      var val = chartExponencial.series[0].data;
      var dados = [];
      val.forEach(exporta);

      function exporta(item) {
          dados.push(item.y.toFixed(2));
      }
      var json = JSON.stringify(dados);
      alert("Dados JSON: "+json);
    });
$(document).ready(function () {
        
    $('.tooltipped').tooltip({outDuration: 0, delay: 0, inDuration: 700});
});
var data = colunas;
var valor = colunas;