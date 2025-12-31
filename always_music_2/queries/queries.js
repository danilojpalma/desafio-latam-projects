import pool from '../config/db.js';


const agregarEstudiante = async (nombre, rut, curso, nivel) => {
    const query = {
        text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)',
        values: [nombre, rut, curso, nivel]
    };

    try {
        const res = await pool.query(query);
        return res.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const consultarPorRut = async (rut) => {
    const query = {
        text: 'SELECT * FROM estudiantes WHERE rut=$1',
        values: [rut] 
    };

    try {
        const res = await pool.query(query);   
        return res.rows[0];
        
    } catch (error) {
        console.error(error);
        throw error;
   
}}

const consultarTodos = async () => {
    const query = {
        rowMode: 'array',
        text: 'SELECT * FROM estudiantes'
    };

    try {
        const res = await pool.query(query);
        return res.rows;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

const actualizarEstudiante = async (rutActual, nuevoNombre, nuevoRut, nuevoCurso, nuevoNivel) => {
    const query = {
        text: 'UPDATE estudiantes SET nombre=$2, rut=$3, curso=$4, nivel=$5 WHERE rut=$1',
        values: [rutActual, nuevoNombre, nuevoRut, nuevoCurso, nuevoNivel]
    };
    try {
        const res = await pool.query(query);
        return res.rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const eliminarEstudiante = async (rut) => {
    const estudiante = await buscarEstudiante(rut);
    
    if (!estudiante) {
    const error = new Error('El rut ingresado no corresponde a ningun estudiante registrado.');
    error.status = 404;
    throw error;
  }


    const query = {
        text: 'DELETE FROM estudiantes WHERE rut=$1',
        values: [rut]
    };

    try {
        await pool.query(query);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}


// Esta funcion es para verificar si existe un estudiante con ese rut
const buscarEstudiante = async (rut) => {
    const query = {
      text: 'SELECT * FROM estudiantes WHERE rut=$1',
      values: [rut]
    };
  
    try {
      const result = await pool.query(query);
      return result.rows[0];
    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }



export { agregarEstudiante, 
         consultarPorRut, 
         consultarTodos, 
         actualizarEstudiante, 
         eliminarEstudiante, 
         buscarEstudiante};

