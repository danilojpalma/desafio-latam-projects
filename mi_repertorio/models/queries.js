import pool from '../config/db.js'

const addSongQuery = async ({titulo, artista, tono}) => {

    const query = {
        text: `INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *`,
        values: [titulo, artista, tono]
    }

    try {
        const result = await pool.query(query)
        if (result.rowCount > 0) {
            return result.rows[0]
        } else {
            return new Error('Error adding song');
        }
    } catch (error) {
        console.log(error)
    }
}

const getSongsQuery = async () => {
    const query = {
        text: `SELECT * FROM canciones`
    }

    try {
        const result = await pool.query(query)
        return result.rows
    }

    catch (error) {
        console.log(error)
    }
}

const updateSongQuery = async ({id, titulo, artista, tono}) => {
    const query = {
        text: `UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *`,
        values: [titulo, artista, tono, id]
    }

    try {
        const result = await pool.query(query)
        if (result.rowCount > 0) {
            return result.rows[0]
        } else {
            return new Error('Error updating song');
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteSongQuery = async (id) => {
    const query = {
        text: `DELETE FROM canciones WHERE id = $1`,
        values: [id]
    }

    try {
        const result = await pool.query(query)
        if (result.rowCount > 0) {
            return 'Cancion Eliminada'
        } else {
            return new Error('Error eliminando canción');
        }
    }
    
        catch (error) {
            console.log(error)
        }

}

export {
    addSongQuery,
    getSongsQuery,
    updateSongQuery,
    deleteSongQuery
    
}