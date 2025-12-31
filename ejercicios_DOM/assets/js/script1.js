// Asignar el formulario a la variable form
let form = document.getElementById("formulario");

// Agregar un evento al formulario
form.addEventListener("submit", (e) => {
  
    e.preventDefault();
    limpiarErrores();

    let textNombre = document.getElementById("nombre").value;
    let textAsunto = document.getElementById("asunto").value;
    let textMensaje = document.getElementById("mensaje").value;

    let resultado = validar(textNombre, textAsunto, textMensaje);

    if (resultado == true) {
        exito();
    }
  
});


const limpiarErrores = () => {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}


const exito = () => {
    document.querySelector(".resultado").innerHTML = "Formulario pasó la validación";
}

const validar = (nombre, asunto, mensaje) => {
    
    let pasamosLaValidacion = true;
    let patron = /^[A-Za-z]+$/; //Tiene que empezar ^ y terminar $ con una letra, no puede tener numeros ni caracteres especiales

    if (patron.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre valido";
        pasamosLaValidacion = false;
    }

    if (patron.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto valido";
        pasamosLaValidacion = false;
    }

    if (patron.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje valido";
        pasamosLaValidacion = false;
    }

    return pasamosLaValidacion;
}