const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: String,
    telefono: String,
    email: String,
    password: String,
    nickName: String,
    universidad: String,
    carrera: String,
    cargo: String
});


module.exports = mongoose.model('User', newSchema);