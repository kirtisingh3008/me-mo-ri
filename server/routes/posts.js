import express from 'express';


import { getPostsBySearch ,getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";
// http://localhost:5000/posts
router.get('/', getPosts);
router.get('/search', getPostsBySearch);
// we need to know id for updating post but not for creation
router.post('/',auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;
