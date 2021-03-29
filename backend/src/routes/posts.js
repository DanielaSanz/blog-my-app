const { Router } = require('express');
const router = Router();

const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/posts.controllers');

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;    