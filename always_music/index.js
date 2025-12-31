import pg from 'pg';

const { Client } = pg; 

// Configuración de la conexión a la base de datos
const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'root', // cambiar por su contraseña
    database: 'always_music', // cambiar por su base de datos
    port: 5432,

}

// Crear un nuevo cliente
const client = new Client(config);

// Obtener los argumentos de la línea de comandos
const argumentos = process.argv.slice(2)

let arg1 = argumentos[0];
let arg2 = argumentos[1];
let arg3 = argumentos[2];
let arg4 = argumentos[3];
let arg5 = argumentos[4];



// Escuchar cuando la conexion se cierra
// client.on('end', () => {
//     console.log('Conexión cerrada.');
// });

// Conectar a la base de datos
await client.connect()


// funcion para crear un nuevo estudiante
const nuevoEstudiante = async (arg2, arg3, arg4, arg5) => {
    const query = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)';
    try {
        await client.query(query, [arg2, arg3, arg4, arg5]);
        console.log(`Estudiante ${arg2} agregado exitosamente`);
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
};

// funcion para obtener un estudiante por su rut

const consultarPorRut = async (arg2) => {
    const query = 'SELECT * FROM estudiantes WHERE rut=$1';
    try {
        
        const res = await client.query(query, [arg2]);
        if (res.rows.length > 0) { // creo que esto no podria suceder ya que al rut le puse unique
            console.log(res.rows[0]);
        } else {
            console.log("No se encontró ningún estudiante con ese RUT.");
        }
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}


// funcion para consultar todos los estudiantes registrados
const estudiantesRegistrados = async () => {
    const query = 'SELECT * FROM estudiantes';
    try {
        console.log('Registro Actual:')
        const res = await client.query(query);
        console.log(res.rows);
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

// funcion para actualizar un estudiante
const actualizarEstudiante = async (arg2, arg3, arg4, arg5) => {
    const query = 'UPDATE estudiantes SET nombre=$1, rut=$2, curso=$3, nivel=$4 WHERE nombre=$1';
    try {
        const res = await client.query(query, [arg2, arg3, arg4, arg5]);
        if (res.rowCount === 0) {
            console.log(`No se encontró ningún estudiante con el nombre ${arg2}`);
            return;
        }
        console.log(`Estudiante ${arg2} actualizado exitosamente`);
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}

// funcion para eliminar un estudiante
const eliminarEstudiante = async (arg2) => {
    const query = 'DELETE FROM estudiantes WHERE rut=$1';
    try {
        await client.query(query, [arg2]);
        console.log(`Registro de estudiante con rut ${arg2} eliminado`);
    } catch (error) {
        console.error(error);
    } finally {
        client.end();
    }
}




// Logica para determinar que acción realizar y validar la cantidad de argumentos
switch (arg1) {
    case 'nuevo':
        if (argumentos.length !== 5) {
            console.error('Error, intenta de nuevo con el siguiente orden y numero de argumentos: node index.js nuevo <nombre> <rut> <curso> <nivel>');
            client.end();
            break;
          }
        nuevoEstudiante(arg2, arg3, arg4, arg5);
        break;
    case 'rut':
        if (argumentos.length !== 2) {
            console.error('Error, intenta de nuevo con el siguiente orden y numero de argumentos: node index.js rut <rut>');
            client.end();
            break;
          }
        consultarPorRut(arg2);
        break;
    case 'consulta':
        if (argumentos.length !== 1) {
            console.error('Error, esta accion no necesita argumentos: node index.js consulta');
            client.end();
            break;
          }
        estudiantesRegistrados();
        break;
    case 'editar':
        if (argumentos.length !== 5) {
            console.error('Error, intenta de nuevo con el siguiente orden y numero de argumentos: node index.js editar <nombre> <rut> <curso> <nivel>');
            client.end();
            break;
          }
        actualizarEstudiante(arg2, arg3, arg4, arg5);
        break;
    case 'eliminar':
        if (argumentos.length !== 2) {
            console.error('Error, intenta de nuevo con el siguiente orden y numero de argumentos: node index.js eliminar <rut>');
            client.end();
            break;
          }
        eliminarEstudiante(arg2);
        break;
   
    default:
        console.log('Acción desconocida');
        client.end();
}