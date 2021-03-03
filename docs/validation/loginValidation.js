const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [    
    check('email')
    .isEmail()
    .isLength({ 
        min:1
    }).withMessage("Debe ingresar un mail valido"),

    check('password')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña"),

    body('password')
    .custom(function(value,{req}){
        return db.Usuarios.findOne({
            where : {
                email : req.body.email
            }
        })
        .then( user => {
            if(value != user.password){
                return Promise.reject('Credenciales inválidas')
            }
        })
        .catch(err => {
            return Promise.reject('Credenciales inválidas')
        })
    })
]