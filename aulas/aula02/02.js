function Converter() {

    var cotacaoDolar = document.getElementById("cotacaoDolar");
    cotacaoDolar = parseFloat(cotacaoDolar.value);

    var valorEmDolar = document.getElementById("valorEmReal");
    valorEmDolar = parseFloat(valorEmDolar.value);

    var valorEmReal = valorEmDolar * cotacaoDolar;
    
    var elementoConvertido = document.getElementById("valorConvertido");
    var insertElementoConvertido = "Valor em Real = R$ " + valorEmReal.toFixed(2);
    elementoConvertido.innerHTML = insertElementoConvertido;
}