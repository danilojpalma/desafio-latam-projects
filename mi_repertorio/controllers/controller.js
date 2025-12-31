import path from 'path';
import { addSongQuery, getSongsQuery, updateSongQuery, deleteSongQuery } from '../models/queries.js';

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
};


const addSong = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    console.log(req.body);
    const newSong = await addSongQuery({ titulo, artista, tono });
    res.json(newSong);
}

const getSongs = async (req, res) => {
    const songs = await getSongsQuery();
    res.json(songs);
}

const updateSong = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const updatedSong = await updateSongQuery({ id, titulo, artista, tono });
    res.json(updatedSong);
}

const deleteSong = async (req, res) => {
    const { id } = req.query;
    const deletedSong = await deleteSongQuery(id);
    res.json(deletedSong);
    console.log(deletedSong);
}


export {
    addSong,
    getSongs,
    updateSong,
    deleteSong
}

