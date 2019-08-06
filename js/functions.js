$(document).ready(function () {

    if ($('.reta').click(function(){
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
        $('#angular').addClass('ativo');
        $('#exponencial').addClass('oculto');
        $('#reta').addClass('oculto');
        $('#perso').addClass('oculto');
        //////////////////////////////
        $('#angular').removeClass('oculto');
        $('#reta').removeClass('ativo');
        $('#exponencial').removeClass('ativo');
        $('#perso').removeClass('ativo');
    }));
    
    if ($('.perso').click(function(){
        $('#perso').addClass('ativo');
        $('#exponencial').addClass('oculto');
        $('#angular').addClass('oculto');
        $('#reta').addClass('oculto');
        $('#drop').addClass('oculto');
        //////////////////////////////  
        $('#perso').removeClass('oculto');
        $('#angular').removeClass('ativo');
        $('#exponencial').removeClass('ativo');
        $('#reta').removeClass('ativo');
    }));
    
    if ($('.exponencial').click(function(){
        $('#exponencial').addClass('ativo');
        $('#reta').addClass('oculto');
        $('#angular').addClass('oculto');
        $('#perso').addClass('oculto');
        $('#drop').addClass('oculto');
        //////////////////////////////  
        $('#exponencial').removeClass('oculto');
        $('#angular').removeClass('ativo');
        $('#reta').removeClass('ativo');
        $('#perso').removeClass('ativo');
    }));

    $('.btn-floating').click(function () {
        if ($('#drop').not("oculto")){
            $('#drop').addClass('oculto');     
        } 

        if ($('#drop').hasClass("oculto")) {
             $('#drop').empty();
             $('#drop').removeClass('oculto'); 
        }
    });
    
    $('.tooltipped').tooltip({outDuration: 0, delay: 0, inDuration: 700});
});
var data = colunas;
var valor = colunas;