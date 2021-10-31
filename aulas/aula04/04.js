let novoFilme = document.getElementById("novoFilme");

novoFilme.addEventListener("keyup", function(e){
  if(e.keyCode ===13){
    e.preventDefault();
    document.getElementById("btnAdd").click();
  }
})

function adicionar(){

  let elementNovoFilme = "<img src=\"" + novoFilme.value + "\" class=\"film\">";
  let listaFilme = document.getElementById("listFilms");
  
  listaFilme.innerHTML += elementNovoFilme;

  document.getElementById("novoFilme").value = "";
}