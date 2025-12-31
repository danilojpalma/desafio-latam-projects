const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const resultado = document.querySelector(".resultado");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");

btnSumar.addEventListener("click", () => {
  const num1 = parseInt(valor1.value) || 0;
  const num2 = parseInt(valor2.value) || 0;
  const suma = num1 + num2;
  resultado.textContent = suma;
});

btnRestar.addEventListener("click", () => {
  const num1 = parseInt(valor1.value) || 0;
  const num2 = parseInt(valor2.value) || 0;
  const resta = num1 - num2;
  resultado.textContent = resta > 0 ? resta : 0;
});
