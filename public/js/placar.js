$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usurio = "Douglas";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usurio, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);
  $(".placar").slideDown(500);
  scrollPlacar();
}

function scrollPlacar() {
  var posicaoPlacar = $(".placar").offset().top;

  $("body").animate(
    {
      scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function novaLinha(usurio, palavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usurio);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha() {
  event.preventDefault();
  $(this).parent().parent().fadeOut(1000);

  setTimeout(function () {
    $(this).parent().parent().remove();
  }, 1000)

}

function mostraPlacar() {
  $(".placar").stop().slideToggle(700);
}