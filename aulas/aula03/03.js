var valorRandom = Math.floor(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  tentativas--;
  var valorChutado = document.getElementById("valor");

  valorChutado = parseInt(valorChutado.value);

  var resultado = document.getElementById("resultado");
  var elementoTentativas = document.getElementById("tentativas");
  var dica = document.getElementById("dica");

  if (valorChutado === valorRandom) {
    resultado.innerHTML = "Aeeewww!!! Você acertooou!";
    elementoTentativas.innerHTML = "";
    dica.innerHTML = "";
  } else if (tentativas > 0) {
    if (valorChutado < 0 || valorChutado > 10) {
      resultado.innerHTML = "Digite um valor entre 0 e 10!";
    } else {
      resultado.innerHTML = "Errou... Tente novamente!";
    }
    if(valorRandom>valorChutado){
        dica.innerHTML = "O número aleatório é maior que o informado!";
    } else {
        dica.innerHTML = "O número aleatório é menor que o informado!";
    }
    elementoTentativas.innerHTML = "Você tem " + tentativas + " tentativas!";
  } else {
    resultado.innerHTML = "";
    dica.innerHTML = "";
    elementoTentativas.innerHTML = "Suas tentativas acabaram, comece novamente!";
  }
}