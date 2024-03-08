function verificar() {
  var numero = Number(
    document.getElementById("numero").value);
  var conteudo = document.getElementById("conteudo");

  if (numero < 10) {
    alert("Número menor que 10!");
    conteudo.innerHTML = "Número menor que 10!";
  }
}

