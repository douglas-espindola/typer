var tempoInicial = $("#tempo-digitacao").text();
var tempoRestante = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function () {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botao-reinicia").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numeroPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numeroPalavras);
}

function inicializaContadores() {
  campo.on("input", function () {

    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro() {
  var tempoRestante = $("tempo-digitacao").text();
  campo.one("focus", function () {
    var cronometroId = setInterval(function () {
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroId);
        campo.toggleClass("campo-desativado");
      }
    }, 1000);
  });
}

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.toggleClass("campo-desativado");
}