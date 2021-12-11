const { Router } = require('express');
const { editarRespuesta, eliminarRespuesta, guardarRespuesta, listarResById } = require('../controller/response_controller');
const router = Router();

router.get('/response/:idResponse', listarResById);
router.post('/responseSave', guardarRespuesta);
router.delete('/responseDeleted/:idResponse', eliminarRespuesta);
router.put('/updateRes', editarRespuesta);

module.exports = router;