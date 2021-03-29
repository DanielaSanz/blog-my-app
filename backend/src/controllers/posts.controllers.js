const PostModel = require('../models/Post');

async function getPosts(req, res, next) {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts)
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Ocurrio un error al tratar de traer los posts"})
    }
}

async function createPost(req, res, next) {
    try {
    const { title, preface, body, author, date } = req.body;
    const newPost = new PostModel( {
        "title": title,
        "preface": preface,
        "body": body,
        "author": author,
        "date": date
    })
    console.log(newPost)
    await newPost.save();
    res.status(200).json({message:'Post saved'})
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Ocurrio un error al tratar de crear el post"})
    }
}

async function getPost(req, res, next) {
    try {
        const post = await PostModel.findById(req.params.id);
        res.status(200).json(post)
        console.log(post)
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Ocurrio un error al tratar de traer el post"})
    }
}

async function updatePost(req, res, next) {
    try {
        console.log(req.params.id, req.body)
        const { title, preface, body, author, date } = req.body;
        const post = await PostModel.findByIdAndUpdate(req.params.id, {
            "title": title,
            "preface": preface,
            "body": body,
            "author": author,
            "date": date
        });
        console.log(req.params.id)
        res.status(200).json({message:'Post updated'})
        console.log(post)
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Ocurrio un error al tratar de modificar el post"})
    }
}

async function deletePost(req, res, next) {
    try {
        const post = await PostModel.findByIdAndDelete(req.params.id);
        console.log(req.params.id)
        res.status(200).json({message: 'Post deleted'})
        console.log(post)
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Ocurrio un error al tratar de eliminar el post"})
    }
}

module.exports = { 
    getPosts, 
    createPost, 
    getPost,
    updatePost,
    deletePost
};