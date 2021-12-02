const express = require('express');
const User = require('../models/user_model');

const router = express.Router();

router.get('/', function (req, res) {
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
});

router.post('/signin', function (req, res) {
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, (err, user) => {
        if (err) {
            console.log(err)
            res.json({
                error: err,
                message: 'email y/o contraseña incorrectos'
            })
        } else {
            if (user == null) {
                res.json()
            } else {
                res.json({
                    user
                })
            }
        }
    })
});

router.post('/signup', function (req, res) {
    User.findOne({
        email: req.body.email,
        nickName: req.body.nickName,
        cedula: req.body.cedula
    }, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            if (user == null) {
                const user = new User({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    cedula: req.body.cedula,
                    telefono: req.body.telefono,
                    email: req.body.email,
                    password: req.body.password,
                    nickName: req.body.nickName,
                    universidad: req.body.universidad,
                    carrera: req.body.carrera,
                    cargo: req.body.cargo
                })
                user.save().then((err) => {
                    if (err) {
                        console.log(err)
                        res.json(err)
                    } else {
                        console.log(user)
                        res.json(user)
                    }
                })
            } else {
                res.json({ message: 'El email no está disponible' })
            }

        }
    })

});


module.exports = router;