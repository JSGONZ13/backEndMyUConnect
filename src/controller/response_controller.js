const resService = require('../services/response_service');

const guardarRespuesta = async (req, res) => {
    res.json({
        Responses: await resService.guardarRespuestas(req.body)
    })
}

const eliminarRespuesta = async (req, res) => {
    res.json({
        Responses: await resService.eliminarRespuestas(req.params.idResponse)
    })
}

const listarResById = async (req, res) => {
    res.json({
        Responses: await resService.listarRestById(req.params.idResponse)
    })
}

const editarRespuesta = async (req, res) => {
    res.json({
        Responses: await resService.editarRes(req.body)
    })
}

module.exports = { guardarRespuesta, eliminarRespuesta, listarResById, editarRespuesta }