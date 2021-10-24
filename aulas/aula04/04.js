var listFilms = [];

function adicionar(){
  listFilms.push("<img src=\"" + document.getElementById("novoFilme").value + "\">");
  for(let i in listFilms){
    document.getElementById("listFilms").innerHTML = listFilms;
  }
}