import path from 'path';
import { addPostQuery, getPostsQuery, addLikeQuery } from '../models/queries.js';

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
};


const addPost = async (req, res) => {
    const { usuario, URL, descripcion } = req.body;
    console.log(req.body);
    const newPost = await addPostQuery({ usuario, URL, descripcion });
    res.json(newPost);
}

const getPosts = async (req, res) => {
    const posts = await getPostsQuery();
    res.json(posts);
}

const addLike = async (req, res) => {
    const { id } = req.query;
    const post = await addLikeQuery(id);
    res.json(post);
}




export {
    addPost,
    getPosts,
    addLike
    
}

