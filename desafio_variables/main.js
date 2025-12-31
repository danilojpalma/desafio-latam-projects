// Operaciones matemáticas

// Pedir al usuario que ingrese su nombre
let nombre = prompt("Ingresar tu nombre");
// Pedir al usuario que ingrese dos números
let num1 = prompt("Ingresar el primer numero");
let num2 = prompt("Ingresar segundo numero");

// Convertir los números a enteros y sumar, restar, multiplicar y dividir
let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let multiplicacion = parseInt (num1) * parseInt(num2);
let division = parseInt(num1) / parseInt(num2);

// Mostrar los resultados al usuario
document.write(`<p>${nombre} el resultado de sumar ${num1} + ${num2} es ${suma}</p> `)
document.write(`<p>${nombre} el resultado de restar ${num1} - ${num2} es ${resta}</p> `) 
document.write(`<p>${nombre} el resultado de multiplicar ${num1} * ${num2} es ${multiplicacion}</p> `)
document.write(`<p>${nombre} el resultado de dividir ${num1} / ${num2} es ${division}</p> `)

//Temperatura en Kelvin y Fahrenheit

// Pedir al usuario la temperatura en Celsius
let temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Convertir la temperatura a Kelvin y Fahrenheit
let temperaturaKelvin = parseFloat(temperaturaCelsius) + 273.15;
let temperaturaFahrenheit = parseFloat(temperaturaCelsius) * 9/5 + 32;
  
// Mostrar los resultados al usuario
document.write(`La temperatura en Kelvin es: ${temperaturaKelvin} K <br>`);
document.write(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit} °F`);



// Convertir días a años, semanas y días
  
// Pedir al usuario la cantidad de días
 let cantidadDias = parseInt(prompt("Ingrese la cantidad de días: "));
  
//Convertir los días a años, semanas y días
  let años = Math.floor(cantidadDias / 365);
  let semanas = Math.floor((cantidadDias % 365) / 7);
  let diasRestantes = Math.floor((cantidadDias % 365) % 7);
  
// Mostrar los resultados al usuario
  document.write(`<p>El equivalente en años, semanas y días es: ${años} año(s), ${semanas} semana(s) y ${diasRestantes} día(s)  </p>`);
 

// Calcular el promedio de 5 números


// Variables para almacenar los números y la suma
let numero1, numero2, numero3, numero4, numero5, sumaNumeros;

// Solicitar al usuario que ingrese 5 números
numero1 = parseFloat(prompt("Ingrese el primer número: "));
numero2 = parseFloat(prompt("Ingrese el segundo número: "));
numero3 = parseFloat(prompt("Ingrese el tercer número: "));
numero4 = parseFloat(prompt("Ingrese el cuarto número: "));
numero5 = parseFloat(prompt("Ingrese el quinto número: "));

// Calcular la suma
sumaNumeros = numero1 + numero2 + numero3 + numero4 + numero5;

// Calcular el promedio
let promedio = sumaNumeros / 5;

// Mostrar los resultados
document.write(`La suma de los números es: ${sumaNumeros} <br>`);
document.write(`El promedio de los números es: ${promedio}`);



