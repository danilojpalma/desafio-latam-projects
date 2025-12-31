import express from 'express';
import path from 'path';
import fs from 'fs';
const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


router.get('/agregar', (req, res) => {

    try{
        const { nombre, precio } = req.query;

        const deporte = {
            nombre,
            precio
        };

        const data = JSON.parse(fs.readFileSync(__dirname + '/data/deportes.json', 'utf8'));
        const deportes = data.deportes;
        deportes.push(deporte);
        fs.writeFileSync(__dirname + '/data/deportes.json', JSON.stringify(data));
        res.redirect('/');

    } catch(err){
        console.log(err);
        res.status(500).send('Hubo un error al agregar el deporte.');
}
});

router.get('/deportes', (req, res) => {

    try{
        const data = JSON.parse(fs.readFileSync(__dirname + '/data/deportes.json', 'utf8'));
        res.json(data);

    } catch(err){
        console.log(err);
        res.status(500).send('Hubo un error al obtener los deportes.');
    }
});

router.get('/editar', (req, res) => {
    
    try{
        const { nombre, precio } = req.query;
        const data = JSON.parse(fs.readFileSync(__dirname + '/data/deportes.json', 'utf8'));
        const deportes = data.deportes;
    
    deportes.forEach((d) => {
        if (d.nombre === nombre) {
            d.precio = precio;
        }
    });

        fs.writeFileSync(__dirname + '/data/deportes.json', JSON.stringify(data));
        res.redirect('/');


    } catch(err){
        console.log(err);
        res.status(500).send('Hubo un error al editar el deporte.');
    }
});

router.get('/eliminar', (req, res) => {
    
    try{
        const { nombre } = req.query;
        const data = JSON.parse(fs.readFileSync(__dirname + '/data/deportes.json', 'utf8'));
        const deportes = data.deportes;
        const updatedData = deportes.filter((d) => d.nombre !== nombre);
        data.deportes = updatedData;
        fs.writeFileSync(__dirname + '/data/deportes.json', JSON.stringify(data));
        res.redirect('/');

    } catch(err){
        console.log(err);
        res.status(500).send('Hubo un error al eliminar el deporte.');
}
});
    


export default router;