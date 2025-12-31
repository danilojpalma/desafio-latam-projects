import express from 'express';
import { 
    agregarEstudiante, 
    consultarPorRut, 
    consultarTodos, 
    actualizarEstudiante, 
    eliminarEstudiante,
    } from '../queries/queries.js';
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World');
});


router.get('/agregar', async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.query;
        await agregarEstudiante(nombre, rut, curso, nivel);

        // Respuesta en la consola
        console.log(`Estudiante ${nombre} agregado exitosamente`);
        // Respuesta al cliente
        res.status(200).send(`Estudiante ${nombre} agregado exitosamente`);

    } catch (error) {
        console.error(error);
        // Envía una respuesta indicando error
        res.status(500).send('Hubo un error al insertar el estudiante.');
    }
});

router.get('/consultarRut', async (req, res) => {
    try {
        const { rut } = req.query;
        const estudiante = await consultarPorRut(rut);

        // Verificar si el estudiante existe
        if (!estudiante || Object.keys(estudiante).length === 0) {
            // No se encontró ningún estudiante
            console.log('No se encontró ningún estudiante con el RUT proporcionado.');
            return res.status(404).send('No se encontró ningún estudiante con el RUT proporcionado.');
            
        } else {
            // Se encontró un estudiante
            console.log(`Estudiante encontrado: ${JSON.stringify(estudiante)}`);
            res.json(estudiante);
        }

    } catch (error) {
        console.error(error);
        // Envía una respuesta indicando error
        res.status(500).send('Hubo un error al consultar el estudiante.');
    }
});

router.get('/consultarTodos', async (req, res) => {

    try {

        const estudiantes = await consultarTodos();

        // Verificar si hay estudiantes registrados

        if (!estudiantes || estudiantes.length === 0) {
            // No se encontraron estudiantes
            console.log('No se encontraron estudiantes registrados.');
            return res.status(404).send('No se encontraron estudiantes registrados.');
        } else {
            // Se encontraron estudiantes
            console.log(`Estudiantes encontrados: ${JSON.stringify(estudiantes)}`);
            res.json(estudiantes);
        }

    } catch (error) {
        console.error(error);
        // Envía una respuesta indicando error
        res.status(500).send('Hubo un error al consultar los estudiantes.');
    }       
}
);

router.get('/actualizar', async (req, res) => {
    try {
        const { rutActual, nuevoNombre, nuevoRut, nuevoCurso, nuevoNivel } = req.query;
        await actualizarEstudiante(rutActual, nuevoNombre, nuevoRut, nuevoCurso, nuevoNivel);

        // Respuesta en la consola
        console.log(`Estudiante ${nuevoNombre} actualizado exitosamente`);
        // Respuesta al cliente
        res.status(200).send(`Estudiante ${nuevoNombre} actualizado exitosamente`);

    } catch (error) {
        console.error(error);
        // Envía una respuesta indicando error
        res.status(500).send('Hubo un error al actualizar el estudiante.');
    }
});

router.get('/eliminar', async (req, res) => {
    try {
        const { rut } = req.query;
        await eliminarEstudiante(rut);

        // Respuesta en la consola
        console.log(`Estudiante con RUT ${rut} ha sido eliminado exitosamente`);
        // Respuesta al cliente
        res.status(200).send(`Estudiante con RUT ${rut} ha sido eliminado exitosamente`);

    } catch (error) {
        console.error(error);

    // Verificar si el error es debido a que el estudiante no existe
    if (error.status === 404) {
      res.status(404).send(error.message);
    }
    else {
      // Envía una respuesta indicando error
      res.status(500).send('Hubo un error al eliminar el estudiante.');
    }
  }
});



router.get('*', (req, res) => {
    res.status(404).send('Not found');
});

export default router;