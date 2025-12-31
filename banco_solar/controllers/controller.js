import path from 'path';
import { newUserQuery, getUsersQuery, updateUserQuery, deleteUserQuery, transactionQuery, getTransactionsQuery } from '../models/queries.js';

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
};

const newUser = async (req, res) => {

    const { nombre, balance } = req.body;

    try {
        const newUser = await newUserQuery({nombre, balance}); 
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error creando el nuevo usuario' }); 
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await getUsersQuery();
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error obteniendo los usuarios' }); 
    }
};

const updateUser = async (req, res) => {
    const { nombre, balance } = req.body;
    const { id } = req.query;

    try {
        const user = await updateUserQuery({nombre, balance, id});
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error actualizando el usuario' }); 
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.query;

    try {
        const user = await deleteUserQuery({id});
        res.status(204).end();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error eliminando el usuario' }); 
    }
};

const transfer = async (req, res) => {

    const { emisor, receptor, monto } = req.body;


    try {
        const transfer = await transactionQuery({emisor, receptor, monto}); 
        res.status(201).json(transfer);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error realizando la transferencia' }); 
    }
}

const getTransactions = async (req, res) => {
    try {
        const transactions = await getTransactionsQuery();
        res.status(200).json(transactions);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Error obteniendo las transacciones' }); 
    }
};


export {
    newUser,
    getUsers,
    updateUser,
    deleteUser,
    transfer,
    getTransactions
}