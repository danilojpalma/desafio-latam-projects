import express from 'express';
import { home, newUser, getUsers, updateUser, deleteUser, transfer, getTransactions} from '../controllers/controller.js';
const router = express.Router();

router.get('/', home);

router.post('/usuario', newUser)

router.get('/usuarios', getUsers)

router.put('/usuario', updateUser)

router.delete('/usuario', deleteUser)

router.post('/transferencia', transfer)

router.get('/transferencias', getTransactions)

router.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default router;