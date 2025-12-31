// Función constructora para crear un paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;

    this.getNombre = function () {
        return this._nombre;
    };

    this.setNombre = function (nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    this.getEdad = function () {
        return this._edad;
    }

    this.setEdad = function (nuevaEdad) {
        this._edad = nuevaEdad;
    }

    this.getRut = function () {
        return this._rut;
    }

    this.setRut = function (nuevoRut) {
        this._rut = nuevoRut;
    }

    this.getDiagnostico = function () {
        return this._diagnostico;
    }

    this.setDiagnostico = function (nuevoDiagnostico) {
        this._diagnostico = nuevoDiagnostico;
    }
}

// Metodo para mostrar los datos del paciente
Paciente.prototype.mostrarDatos = function () {
    return `Nombre: ${this._nombre}, Edad: ${this._edad}, Rut: ${this._rut}, Diagnostico: ${this._diagnostico}`;
}


// Funcion constructora para crear un consultorio

function Consultorio(nombre, pacientes) {
    this._nombre = nombre;
    this._pacientes = pacientes;

    this.getPacientes = function() {
        return this._pacientes;
    };

    this.setPacientes = function(nuevoPaciente) {
        this._pacientes = nuevoPaciente;
    };
}

// Metodo para buscar un paciente en el consultorio

Consultorio.prototype.buscarPaciente = function(nombre) {
    const pacienteEncontrado = this._pacientes.find(paciente => paciente.getNombre() === nombre);

    if (pacienteEncontrado) {
        return pacienteEncontrado.mostrarDatos();
    } else {
        console.log('El paciente no existe en la base de datos');
    }
};

// Metodo para mostrar todos los pacientes del consultorio

Consultorio.prototype.mostrarTodosLosPacientes = function () {
    for (const paciente of this._pacientes) {
        console.log(paciente.mostrarDatos());
    }
};

const p1 = new Paciente('Robert Plant', 80, '12345678-9', 'Lupus');
const p2 = new Paciente('Jimmy Page', 76, '98765432-1', 'Mononucleosis');
const p3 = new Paciente('John Paul Jones', 78, '98765432-1', 'Sinusitis');
const p4 = new Paciente('John Bonhan', 76, '98765432-1', 'Amigdalitis');

const pacientesC1 = [p1, p2, p3, p4];


const c1 = new Consultorio('Clinica Mayo', pacientesC1);

console.log(c1.buscarPaciente('Robert Plant'));
console.log(c1.buscarPaciente('Jimmy Page'));
console.log(c1.buscarPaciente('Robert Plants')); // El paciente no existe en la base de datos


console.log(p4.mostrarDatos()); // Muestra los datos de un paciente
c1.mostrarTodosLosPacientes();  // Muestra todos los pacientes del consultorio