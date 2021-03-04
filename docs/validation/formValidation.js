const { check, body } = require('express-validator');

module.exports = [
    check('name')
    .isLength({
        min:1
    }).withMessage("Debe ingresar su nombre"),

    check('email')
    .isEmail()
    .isLength({ 
        min:1
    }).withMessage("Debe ingresar un mail valido"),

    check('numero')
    .isLength({
        min:1,max:10
    })
    .withMessage("Escribe tu numero de telefono 11xxxxxxxx"),
]