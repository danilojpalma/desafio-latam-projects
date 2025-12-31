import { Router } from 'express';
import { home, addImg, deleteImg } from '../controllers/controller.js';

const router = Router();

router.get('/', home);
router.post('/imagen', addImg);
router.get('/imagen/:nombre', deleteImg); // el navegador no me permite hacer peticiones de tipo delete por defecto asi que tuve usar get
router.delete('imagen/:nombre', deleteImg); // este solo funciona en postman

export default router;