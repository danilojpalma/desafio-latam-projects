import express from 'express';
import { home, addPost, getPosts, addLike} from '../controllers/controller.js';
const router = express.Router();

router.get('/', home);

router.post('/post', addPost);

router.get('/posts', getPosts); 

router.put('/post', addLike);



router.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default router;