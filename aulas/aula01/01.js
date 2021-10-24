const btn = document.querySelector("#btn-submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const nota1 = document.querySelector("#nota1").value;
  const nota2 = document.querySelector("#nota2").value;
  const nota3 = document.querySelector("#nota3").value;
  const nota4 = document.querySelector("#nota4").value;

  var notaFinal = (
    (parseFloat(nota1) +
      parseFloat(nota2) +
      parseFloat(nota3) +
      parseFloat(nota4)) /
    4
  ).toFixed(2);

  var resultado = "";

  if (notaFinal >= 0 && notaFinal <= 10) {
    if (notaFinal >= 7) {
      resultado = "Aprovado! Nota " + notaFinal + "!";
    } else if (notaFinal >= 3) {
      resultado = "Recuperação! Nota " + notaFinal + "!";
    } else {
      resultado = "Reprovado! Nota " + notaFinal + "!";
    }
  } else {
    resultado = "Nota inválida! Nota deve ser entre 0 e 10";
  }

  document.querySelector("#resultado").innerHTML = resultado;
});
