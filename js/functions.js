$(document).ready(function () {

    if ($('.reta').click(function(){
        // console.log(colunas);
        $('#reta').addClass('ativo');
        $('#exponencial').addClass('oculto');
        $('#angular').addClass('oculto');
        $('#perso').addClass('oculto');
        //////////////////////////////  
        $('#reta').removeClass('oculto');
        $('#angular').removeClass('ativo');
        $('#exponencial').removeClass('ativo');
        $('#perso').removeClass('ativo');
    }));
    
    if ($('.angular').click(function(){        
        // console.log(colunas);
        $('#angular').addClass('ativo');
        $('#exponencial').addClass('oculto');
        $('#reta').addClass('oculto');
        $('#perso').addClass('oculto');
        //////////////////////////////  asdsa
        $('#angular').removeClass('oculto');
        $('#reta').removeClass('ativo');
        $('#exponencial').removeClass('ativo');
        $('#perso').removeClass('ativo');
    }));
    
    if ($('.perso').click(function(){
        // console.log(colunas);
        $('#perso').addClass('ativo');
        $('#exponencial').addClass('oculto');
        $('#angular').addClass('oculto');
        $('#reta').addClass('oculto');
        //////////////////////////////  
        $('#perso').removeClass('oculto');
        $('#angular').removeClass('ativo');
        $('#exponencial').removeClass('ativo');
        $('#reta').removeClass('ativo');
    }));
    
    if ($('.exponencial').click(function(){
        // console.log(colunas);
        $('#exponencial').addClass('ativo');
        $('#reta').addClass('oculto');
        $('#angular').addClass('oculto');
        $('#perso').addClass('oculto');
        //////////////////////////////  
        $('#exponencial').removeClass('oculto');
        $('#angular').removeClass('ativo');
        $('#reta').removeClass('ativo');
        $('#perso').removeClass('ativo');
    }));
});

var data = colunas;
document.getElementById("total-curso").innerHTML = 'Valor total do curso: '+data['total_curso'];