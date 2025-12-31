import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

// Crear un objeto de la clase Impuesto y otro de la clase Cliente
let impuesto1 = new Impuesto(90000000, 80000);
let cliente1 = new Cliente('Juan', impuesto1);

// Crear un objeto de la clase Cliente en una sola línea
let cliente2 = new Cliente('Pedro', new Impuesto(100000000, 50000));

// Modificar los atributos del objeto cliente2 a través de sus métodos set
cliente2.nombre = 'Bob';
cliente2.impuesto.montoBrutoAnual = 3000000;
cliente2.impuesto.deducciones = 100000;

// Imprimir en consola el nombre del cliente y el impuesto que debe pagar.
console.log(cliente1.nombre)
console.log(cliente1.calcularImpuesto()); 

console.log(cliente2.nombre)
console.log(cliente2.calcularImpuesto());


