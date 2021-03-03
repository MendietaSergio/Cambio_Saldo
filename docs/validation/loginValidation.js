const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('email')
        .isEmail()
        .withMessage("Debes ingresar un email válido."),

    check('password')
        .isLength({
            min: 1
        }).withMessage("Escribe tu contraseña."),

    body('password')
        .custom(function (value, { req }) {
            return db.Usuarios.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    if (value, user.password) {
                        return Promise.reject("Login Incorrecto.")
                    }
                })
                .catch(error => {
                    return Promise.reject("Login Incorrecto.")
                })
        })

]