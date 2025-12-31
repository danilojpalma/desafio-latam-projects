let numeroIngresado = parseInt(prompt("Ingrese un número de 1 a 20"));

const validarNumero = (numero) => {
    if (numero < 1 || numero > 20) {
        console.log("El número ingresado no es válido");
        return false;
    }  
    return true;      
}
    
const generarMultiplicacion = (numero) => {
    for (let i = 1; i <= numero; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}


const generarFactorial = (numero) => {
    for (let i = 1; i <= numero; i++) {
        let resultado = 1;
        for (let j = 1; j <= i; j++) {
            resultado *= j;
        }
    console.log(`El factorial de ${i} es ${resultado}`);
    }
}

let validacion = validarNumero(numeroIngresado);

if (validacion) {
    generarMultiplicacion(numeroIngresado);
    generarFactorial(numeroIngresado);
}