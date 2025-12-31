import pool from '../config/db.js'

const newUserQuery = async ({nombre, balance}) => {
    const query = {
        text: 'INSERT INTO usuarios (nombre, balance) VALUES ($1, $2)',
        values: [nombre, balance]
    }
    
    try {
        const response = await pool.query(query)
        if (response.rowCount > 0) {
            return response.rows[0]
        } else {
            return new Error('Error adding user')
        }
    }
    catch (error) {
        throw error; 

    }
}

const getUsersQuery = async () => {
    const query = {
        text: 'SELECT * FROM usuarios'
    }
    
    try {
        const response = await pool.query(query)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error('Error adding user')
        }
    }
    catch (error) {
        throw error; 

    }
}

const updateUserQuery = async ({nombre, balance, id}) => {
    const query = {
        text: 'UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3',
        values: [nombre, balance, id]
    }
    
    try {
        const response = await pool.query(query)
        if (response.rowCount > 0) {
            return response.rows[0]
        } else {
            return new Error('Error updating user')
        }
    }
    catch (error) {
        throw error; 

    }
}

const deleteUserQuery = async ({id}) => {

    const query = {
        text: 'DELETE FROM usuarios WHERE id = $1',
        values: [id]
    }

    try {
        const response = await pool.query(query)
        if (response.rowCount > 0) {
            return response.rows[0]
        } else {
            return new Error('Error deleting user')
        }
    }
    catch (error) {
        throw error; 

    }

}

const transactionQuery = async ({emisor, receptor, monto}) => {

    try{
    await pool.query("BEGIN");


     // Buscar el ID del usuario emisor por nombre
     const emisorIdQuery = {
        text: 'SELECT id FROM usuarios WHERE nombre = $1',
        values: [emisor]
    };
    const { rows: emisorRows } = await pool.query(emisorIdQuery);
    const emisorId = emisorRows[0]?.id;



    // Buscar el ID del usuario receptor por nombre
    const receptorIdQuery = {
        text: 'SELECT id FROM usuarios WHERE nombre = $1',
        values: [receptor]
    };
    const { rows: receptorRows } = await pool.query(receptorIdQuery);
    const receptorId = receptorRows[0]?.id;


    if (!emisorId ||!receptorId) {
        throw new Error('Uno de los usuarios no encontrado');
    }

    const currentDate = await pool.query('SELECT CURRENT_TIMESTAMP');

    const query = {
        text: 'INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, $4)',
        values: [emisorId, receptorId, monto, currentDate.rows[0].current_timestamp]
    }

    await pool.query(query);


    const descontar = {
        text: `UPDATE usuarios SET balance = balance - $1 WHERE id = $2;`,
        values: [monto, emisorId]
    };

    await pool.query(descontar);

    const acreditar = {
        text: `UPDATE usuarios SET balance = balance + $1 WHERE id = $2;`,
        values: [monto, receptorId]
    };

    await pool.query(acreditar);

    await pool.query('COMMIT');

    return {
        success: true,
        message: 'Transacción realizada exitosamente',
        details: { emisor, receptor, monto }
      };



    }
    catch (error) {
        await pool.query('ROLLBACK');
        throw error; 

    }

}

const getTransactionsQuery = async () => {
    const query = {
        text: 'SELECT * FROM transferencias'
    }
    
    
    try {
        const response = await pool.query(query)
        if (response.rowCount > 0) {
            return response.rows
        } else {
            return new Error('Error en la consulta de transferencias')
        }
    }
    catch (error) {
        throw error; 

    }
}

    
        



export {
    newUserQuery,
    getUsersQuery,
    updateUserQuery,
    deleteUserQuery,
    transactionQuery,
    getTransactionsQuery

}