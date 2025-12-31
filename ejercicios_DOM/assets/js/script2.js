// Seleccionar cada btn
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");


// esta funcion se activa con el onclick del boton

const cambiarColor = (event) => {
    let newColor = event.target.style.backgroundColor;
    let caja = document.getElementById("caja");
    caja.style.backgroundColor = newColor;
  }

