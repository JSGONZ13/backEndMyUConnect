const Response = require('../models/response_model');

class ResponseService {

    ResponseService() {

    }

    async listarRestById (idResponse) {
        try {
            return await Response.find({
                idResponse: idResponse
            })
        } catch (error) {
            return console.log(error);
        }
    }

    async guardarRespuestas (respuestas = new Response()) {
        try {
            var resGuardado;
            await Response.create(respuestas).then((value)  => {
                resGuardado = value;
            });
            console.log(resGuardado);
            return resGuardado;
        } catch (error) {
            return console.log(error);
        }
    }

    async eliminarRespuestas(idResponse) {
        var respEliminado;
        try {
            await Response.findOneAndRemove({
                idResponse: idResponse
            }).then((value) => {
                respEliminado = value;
            })
            return respEliminado;
        } catch (error) {
            console.log(error);
        }
    }

    async editarRes (resBody) {
        var editarRes;
        try {
            await Response.findOneAndUpdate({
                idResponse: resBody.idResponse
            }, resBody).then((value) => {
                editarRes = resBody;
            });
            return editarRes;
        } catch (error) {
            return console.log(error);
        }
    }

}

module.exports = new ResponseService();