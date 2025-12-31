import express from 'express';
import { home, addSong, getSongs, updateSong, deleteSong } from '../controllers/controller.js';
const router = express.Router();

router.get('/', home);

router.post('/cancion', addSong);

router.get('/canciones', getSongs);

router.put('/cancion/:id', updateSong);

router.delete('/cancion', deleteSong);

router.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default router;