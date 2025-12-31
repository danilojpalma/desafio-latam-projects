import express from 'express';
import path from 'path';
import Jimp from "jimp";
import { v4 as uuid4 } from 'uuid';

const router = express.Router();
const __dirname = path.resolve();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


router.get('/create', async(req, res) => {
    const url = req.query.url;
    const id = uuid4().slice(0, 6);
    const img = await Jimp.read(url);
    await img.resize(150, Jimp.AUTO).greyscale().writeAsync(path.join(__dirname, 'public', 'images', `${id}.png`));
    res.sendFile(path.join(__dirname, 'public', 'images', `${id}.png`)); 
});




export default router;