class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `
        <li class="list-group-item"> 
        El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono} 
        </li>

        <li class="list-group-item"> 
        ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad} 
        </li>
        `;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }



    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    datosPropietario(){
        return super.datosPropietario();
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(nuevoNombre) {
        this._nombreMascota = nuevoNombre;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }



}


// Capturar los elementos del formulario
const formulario = document.getElementById('formulario');
const inputPropietario = document.getElementById('propietario');
const inputTelefono = document.getElementById('telefono');
const inputDireccion = document.getElementById('direccion');
const inputNombreMascota = document.getElementById('nombreMascota');
const inputTipo = document.getElementById('tipo');
const inputEnfermedad = document.getElementById('enfermedad');
const resultado = document.querySelector('#resultado ul');



formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    const valorSeleccionado = inputTipo.value;
    
    if (valorSeleccionado === 'perro') {
        const Perro = new Mascota(inputPropietario.value, inputDireccion.value, inputTelefono.value, inputTipo.value, inputNombreMascota.value, inputEnfermedad.value);
        console.log(Perro);
        resultado.innerHTML += Perro.datosPropietario();

    }else if (valorSeleccionado === 'gato') {
        const Gato = new Mascota(inputPropietario.value, inputDireccion.value, inputTelefono.value, inputTipo.value, inputNombreMascota.value, inputEnfermedad.value);
        console.log(Gato);
        resultado.innerHTML += Gato.datosPropietario();

    }else if (valorSeleccionado === 'conejo') {
        const Conejo = new Mascota(inputPropietario.value, inputDireccion.value, inputTelefono.value, inputTipo.value, inputNombreMascota.value, inputEnfermedad.value);
        console.log(Conejo);
        resultado.innerHTML += Conejo.datosPropietario();
    }
    
});