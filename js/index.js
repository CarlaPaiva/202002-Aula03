$(document).ready(function (){

    $("#btnCalcular").click(function (){
        let txtConteudo = $("#txtConteudo").val();

        if (txtConteudo != null && txtConteudo != ''){
         let frases = txtConteudo.trim().split(".");
        
         frases = frases.filter(function(e) { return e !== '' });
         frases = frases.filter(function(e) { return e !== ' ' });

         let palavras = txtConteudo.trim().split(" ");
         palavras = palavras.filter(function(e) { return e !== '' });

         let qtdFrases = frases.length;
         let qtdPalavras = palavras.length;
         let mediaPalavras = calcularMediaPalavras(qtdFrases, qtdPalavras);
         let indice = calcularLegibilidade(mediaPalavras);
         let indiceDesc = getClassificacao(indice);     
         
         mostrarResultado(qtdFrases, qtdPalavras, mediaPalavras, indice, indiceDesc);

        }
        else{
            //Não digitou nada
            alert('Informe o texto a ser testado.');
        }
    });


    $("#btnLimpar").click(function (){
        limparResultado();
    });
    
    function calcularMediaPalavras(qtdFrases, qtdPalavras){
        return qtdPalavras/qtdFrases;
     }

    function calcularLegibilidade(mediaPalavras){
        return Math.ceil(mediaPalavras * 0.6);
    }

     function getClassificacao(indiceLegibilidade){
         let classificacao = "";

        if (indiceLegibilidade > 0 && indiceLegibilidade <= 7){
            classificacao = "História em quadrinhos";
        }
        else if (indiceLegibilidade >= 8 && indiceLegibilidade <= 10) {
            classificacao = "Excepcional";
        }
        else if (indiceLegibilidade >= 11 && indiceLegibilidade <= 15) {
            classificacao = "Ótimo";
        }
        else if (indiceLegibilidade >= 16 && indiceLegibilidade <= 19) {
            classificacao = "Pequena dificuldade";
        }
        else if (indiceLegibilidade >= 20 && indiceLegibilidade <= 30) {
            classificacao = "Muito difícil";
        }
        else if (indiceLegibilidade >= 31 && indiceLegibilidade <= 40) {
            classificacao = "Linguagem técnica";
        }
        else{
            classificacao = "Nebulosidade";
        }

         return classificacao;
     }

     function mostrarResultado(qtdFrases, qtdPalavras, media, indice, indiceDesc){
         $("#txtQtdPalavras").val(qtdPalavras);
         $("#txtQtdFrases").val(qtdFrases);
         $("#txtMediaPalavras").val(Math.round(media));
         $("#txtResultadoCompleto").val(indice + " - " + indiceDesc);

         $("#resultados").css('display', 'block');
     }

     function limparResultado(){
        $("#txtQtdPalavras").val('');
        $("#txtQtdFrases").val('');
        $("#txtMediaPalavras").val('');
        $("#txtResultadoCompleto").val('');

        $("#resultados").css('display', 'none');
    }
});