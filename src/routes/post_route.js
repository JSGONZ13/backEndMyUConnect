const { Router } = require('express');
const { guardarPost, eliminarPost, listarPost, listarPostEmail, editarPostByEmail } = require('../controller/post_controller');
const router = Router();


router.post('/postSave', guardarPost);
router.delete('/postDeleted/:idPost', eliminarPost);
router.get('/post/:idPost', listarPost);
router.get('/postEmail/:email', listarPostEmail);
router.put('/updatePost', editarPostByEmail);

module.exports = router;