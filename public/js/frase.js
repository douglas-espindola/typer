$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  frase.text(data[0]);
}