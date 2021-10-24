function Adicionar() {
  var divLista = document.getElementById("listaFilmes");  
  var novoFilme = document.createElement("img");
  
  novoFilme.class="filmes";
  novoFilme.src=document.getElementById("novoFilme").value;

  divLista.appendChild(novoFilme);
}