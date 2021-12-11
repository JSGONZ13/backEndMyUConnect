const postService = require('../services/post_service');

const guardarPost = async (req, res) => {
    res.json({
        Posts: await postService.guardarPost(req.body)
    })
}

const eliminarPost = async (req, res) => {
    res.json({
        Posts: await postService.eliminarPost(req.params.idPost)
    })
}

const listarPost = async (req, res) => {
    res.json({
        Posts: await postService.listarPostById(req.params.idPost)
    })
}

const listarPostEmail = async (req, res) => {
    res.json({
        Posts: await postService.listarPostByEmail(`${req.params.email}`)
    })
}

const editarPostByEmail = async (req, res) => {
    res.json({
        Posts: await postService.editarPostByEmail(req.body)
    })
}

module.exports = { guardarPost, eliminarPost, listarPost, listarPostEmail, editarPostByEmail }