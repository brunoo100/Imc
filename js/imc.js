var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();
  peso = parseFloat(document.getElementById("peso").value);
  altura = parseFloat(document.getElementById("altura").value);
  imc = peso / (altura * altura);

  if (imc < 17) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      " seu resultado foi " +
      imc.toFixed(2) +
      "   e você está  muito abaixo do peso";
  } else if (imc > 17 && imc < 18.49) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> seu resultado foi " +
      imc.toFixed(2) +
      "  <br/> e você está abaixo do peso";
  } else if (imc > 18.5 && imc < 24.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> seu resultado foi " +
      imc.toFixed(2) +
      "  <br/> e você está no peso normal";
  } else if (imc > 25 && imc < 29.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> seu resultado foi " +
      imc.toFixed(2) +
      "  <br/> e você está acima do peso";
  } else if (imc > 30 && imc < 34.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> seu resultado foi " +
      imc.toFixed(2) +
      "  <br/> e você está muito acima do peso";
  } else if (imc > 35) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML =
      "<br/> seu resultado foi " + 
      imc.toFixed(2) +
       "  <br/> e você está obeso";
  }
}
